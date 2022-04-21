import {
  ensureIpfsUriPrefix,
  makeNFTMetadata,
  makeGatewayURL,
  ipfsAddOptions
} from '../src/utilities/ipfs-helpers'

// // server/index.js
// const fs = require("fs");
// const fsProm = require('fs/promises')
const express = require("express");
var cors = require('cors')
// var { Blob } = require('buffer')
var { create, IPFSHTTPClient } = require('ipfs-http-client')
const util = require('util')
const multer  = require('multer');
const path = require('path')

const PORT = process.env.PORT || 3002;

const app = express();
app.use(cors({ origin: 'http://localhost:3000'}))
app.use(express.static(__dirname));
const upload = multer();

// app.use(bodyParser.raw({ type: 'video/x-matroska;codecs=avc1' }))
// app.use(express.json({type: 'video/x-matroska;codecs=avc1'}));
// const upload = multer({ dest: 'uploads/' })
// const body = bodyParser({limit: '500mb'});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

// All other GET requests not handled before will return our React app
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
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
});