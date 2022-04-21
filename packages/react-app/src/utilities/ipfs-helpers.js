export const ipfsAddOptions = {
  cidVersion: 1,
  hashAlg: 'sha2-256'
}
const ipfsGatewayURL = 'https://ipfs.io/ipfs';

export function makeGatewayURL(ipfsURI) {
  return ipfsGatewayURL + '/' + stripIpfsUriPrefix(ipfsURI)
}

export function stripIpfsUriPrefix(cidOrURI) {
  if (cidOrURI.startsWith('ipfs://')) {
      return cidOrURI.slice('ipfs://'.length)
  }
  return cidOrURI
}

// function createFileFromBuffer(buffer, filePath) {
//   const webmBuffers = [buffer];

//   const webmReadable = new Readable();
//   webmReadable._read = () => {  };
//   webmBuffers.forEach(chunk => {
//       webmReadable.push(chunk);
//   });
//   webmReadable.push(null);

//   const outputWebmStream = fs.createWriteStream(filePath);
//   return webmReadable.pipe(outputWebmStream);
// }

  /**
  * Helper to construct metadata JSON for 
  * @param {string} assetCid - IPFS URI for the NFT asset
  * @param {object} options
  * @param {?string} name - optional name to set in NFT metadata
  * @param {?string} description - optional description to store in NFT metadata
  * @returns {object} - NFT metadata object
  */
export async function makeNFTMetadata(assetURI, options) {
  const {name, description} = options;
  assetURI = ensureIpfsUriPrefix(assetURI)
  return {
      name,
      description,
      video: assetURI
  }
}

export function ensureIpfsUriPrefix(cidOrURI) {
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