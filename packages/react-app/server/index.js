// server/index.js
const fs = require("fs");
const fsProm = require('fs/promises')
const express = require("express");
const axios = require("axios");
var cors = require('cors')
// var { Blob } = require('buffer')
var { create, IPFSHTTPClient } = require('ipfs-http-client')
const util = require('util')
const multer  = require('multer');
const bodyParser = require('body-parser')
const path = require('path')
const { Readable } = require('stream');

const PORT = process.env.PORT || 3002;
const ipfsAddOptions = {
  cidVersion: 1,
  hashAlg: 'sha2-256'
}
const ipfsGatewayURL = 'https://ipfs.io/ipfs';

const app = express();
app.use(express.static(__dirname));
const upload = multer();

// app.use(bodyParser.raw({ type: 'video/x-matroska;codecs=avc1' }))
// app.use(express.json({type: 'video/x-matroska;codecs=avc1'}));
// const upload = multer({ dest: 'uploads/' })
// const body = bodyParser({limit: '500mb'});

app.use(cors({
  origin: 'http://localhost:3000'}))

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

app.post('/ipfs', upload.any(), async (req, res) => {
  console.log(util.inspect(req.body, {showHidden: false, depth: null, colors: true}))
  
  const buffer = req.files[0].buffer;
  const filePath = '/tmp/proof-of-magician.webm';
  // const writeStream = createFileFromBuffer(buffer, filePath);
  // const file = await fsProm.readFile(writeStream.path);
  const basename =  path.basename(filePath);
  const ipfsPath = '/nft/' + basename;

  const ownerAddress = req.body.account;
  const number = '1' // this should be the count from the contract.

  console.log('buffer', buffer);
  // console.log(writeStream.path);
  // console.log('file', file)

  let ipfs = IPFSHTTPClient;
  try {
    ipfs = create({
      url: "https://ipfs.infura.io:5001/api/v0",
    });
    
  } catch (error) {
    console.error("IPFS error ", error);
    ipfs = undefined;
  }
  // const ipfsResponse = await ipfs.add(file, ipfsAddOptions);
  const ipfsResponse = await ipfs.add(
    {
      // The path you want the file to be accessible at from the root CID _after_ it has been added
      path: ipfsPath,
      // The contents of the file (see below for definition)
      content: buffer,
      // File mode to store the entry with (see https://en.wikipedia.org/wiki/File_system_permissions#Numeric_notation)
      mode: '-r--r--r--'
    }, 
    ipfsAddOptions
  )

  const { cid: assetCid } = ipfsResponse;
  const assetURI = ensureIpfsUriPrefix(assetCid) + '/' + basename
  
  console.log('ipfsResponse', ipfsResponse)


  const metadata = await makeNFTMetadata(assetURI, {
    name: `Proof of Magician #${number}`,
    description: '',
    owner: ownerAddress
  })

  // // add the metadata to IPFS
  const { cid: metadataCid } = await ipfs.add({
     path: '/nft/metadata.json', 
     content: JSON.stringify(metadata)
  }, ipfsAddOptions);
  const metadataURI = ensureIpfsUriPrefix(metadataCid) + '/metadata.json'

  const result = {
    // tokenId,
    ownerAddress: ownerAddress,
    metadata: metadata,
    assetURI: assetURI,
    metadataURI: metadataURI,
    assetGatewayURL: makeGatewayURL(assetURI),
    metadataGatewayURL: makeGatewayURL(metadataURI),
  }

  console.log()

  res.json(result);


  // return {
  //   tokenId,
  //   ownerAddress,
  //   metadata,
  //   assetURI,
  //   metadataURI,
  //   assetGatewayURL: makeGatewayURL(assetURI),
  //   metadataGatewayURL: makeGatewayURL(metadataURI),
  // }


  // console.info('metadataCid', metadataCid)

  // console.info('assetURI', assetURI)
  // console.info('cid', assetCid.toString())

  // res.json({
  //   cid: result.cid.toString(),
  //   path: result.path,
  // })
});

function makeGatewayURL(ipfsURI) {
  return ipfsGatewayURL + '/' + stripIpfsUriPrefix(ipfsURI)
}

function stripIpfsUriPrefix(cidOrURI) {
  if (cidOrURI.startsWith('ipfs://')) {
      return cidOrURI.slice('ipfs://'.length)
  }
  return cidOrURI
}

function createFileFromBuffer(buffer, filePath) {
  const webmBuffers = [buffer];

  const webmReadable = new Readable();
  webmReadable._read = () => {  };
  webmBuffers.forEach(chunk => {
      webmReadable.push(chunk);
  });
  webmReadable.push(null);

  const outputWebmStream = fs.createWriteStream(filePath);
  return webmReadable.pipe(outputWebmStream);
}

  /**
  * Helper to construct metadata JSON for 
  * @param {string} assetCid - IPFS URI for the NFT asset
  * @param {object} options
  * @param {?string} name - optional name to set in NFT metadata
  * @param {?string} description - optional description to store in NFT metadata
  * @returns {object} - NFT metadata object
  */
async function makeNFTMetadata(assetURI, options) {
  const {name, description} = options;
  assetURI = ensureIpfsUriPrefix(assetURI)
  return {
      name,
      description,
      video: assetURI
  }
}

function ensureIpfsUriPrefix(cidOrURI) {
  let uri = cidOrURI.toString()
  if (!uri.startsWith('ipfs://')) {
      uri = 'ipfs://' + cidOrURI
  }
  // Avoid the Nyan Cat bug (https://github.com/ipfs/go-ipfs/pull/7930)
  if (uri.startsWith('ipfs://ipfs/')) {
    uri = uri.replace('ipfs://ipfs/', 'ipfs://')
  }
  return uri
}

// fs.writeFile("/tmp/test", "Hey there!", function(err) {
//   if(err) {
//       return console.log(err);
//   }
//   console.log("The file was saved!");
// }); 

// app.put('/ipfs', async (req, res) => {
//   console.log(`request is ${req.body}`);
//   console.log(util.inspect(req.body, {showHidden: false, depth: null, colors: true}))
//   // console.log(JSON.stringify(req, null, 4));
//   const buffer = req.body;
//   //const buffer = Buffer.from( await blob.arrayBuffer() );
//   fs.writeFile('/tmp/pom-1.webm', buffer, {}, (err, res) => {
//     if(err){
//         console.error(err)
//         return
//     }
//     console.log('video saved')
//   });

//   let ipfs = IPFSHTTPClient;
//   try {
//     ipfs = create({
//       url: "https://ipfs.infura.io:5001/api/v0",
//     });
//   } catch (error) {
//     console.error("IPFS error ", error);
//     ipfs = undefined;
//   }

//   const result = await ipfs.add('/tmp/pom-1.webm', ipfsAddOptions);

//   console.info('result', result)
//   console.info('path', result.path)
//   console.info('cid', result.cid.toString())

//   res.json({
//     cid: result.cid.toString(),
//     path: result.path,
//   })

// });

// Works!
// const obj = {
//   hello: 'world'
// };
// const blob = new Blob([JSON.stringify(obj, null, 2)], {type : 'application/json'});

// axios.post(`http://localhost:${PORT}/ipfs`, {
//   blob // this automatically sets it to blob: blob
// })
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });