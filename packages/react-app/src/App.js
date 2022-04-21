import { useQuery } from "@apollo/client";
import { Contract } from "@ethersproject/contracts";
import { shortenAddress, useContractFunction, useEthers, useLookupAddress } from "@usedapp/core";
import React, { useEffect, useState } from "react";
import axios from 'axios'

import { addresses, abis } from "@my-app/contracts";
import ScreenRecorder from "./components/screenRecorder";
import { Body, Button, Container, Header, Image, Link } from "./components";
import connect from '@aragon/connect'
import connectTokens from '@aragon/connect-tokens'
import { create, IPFSHTTPClient } from 'ipfs-http-client'

import {
  ensureIpfsUriPrefix,
  makeNFTMetadata,
  makeGatewayURL,
  ipfsAddOptions
} from './utilities/ipfs-helpers'

async function daoNetwork() {
  // Initiates the connection to an organization
  // const org = await connect('miraclenetwork.aragonid.eth', 'thegraph', { network: 4 })

  // // Fetch the apps belonging to this organization
  // const apps = await org.apps()
  // apps.forEach(console.log)
  
  // console.log(org.app('token-manager'))

  // const tokens = await connectTokens(org.app('token-manager'))

  // console.log('tokens', tokens)
}

function WalletButton() {
  const [rendered, setRendered] = useState("");

  const ens = useLookupAddress();
  const { account, activateBrowserWallet, deactivate, error } = useEthers();

  // These functions only run when the second parameter changes.
  // param1 = the callback function (EFFECT)
  // param2 = the array of variables (CAUSE)
  useEffect(() => {
    if (ens) {
      setRendered(ens);
    } else if (account) {
      setRendered(shortenAddress(account));
    } else {
      setRendered("");
    }
  }, [account, ens, setRendered]);

  // These functions only run when the second parameter changes.
  // param1 = the callback function (EFFECT)
  // param2 = the array of variables (CAUSE)
  useEffect(() => {
    if (error) {
      console.error("Error while connecting wallet:", error.message);
    }
  }, [error]);

  return (
    <Button
      onClick={() => {
        if (!account) {
          activateBrowserWallet();
        } else {
          deactivate();
        }
      }}
    >
      {rendered === "" && "Connect Wallet"}
      {rendered !== "" && rendered}
    </Button>
  );
}

class ProofofMagician extends React.Component {

  constructor(props) {
    super(props);
    this.addBlobToIPFS = this.addBlobToIPFS.bind(this)
    this.mintToken = this.mintToken.bind(this)

    this.state = {
      ipfsResultObj: {},
      minted: false,
    }
    daoNetwork();
  }

  async mintToken(metadataURI, account, send) { 
    console.log('this.state.minted', this.state.minted)
    console.log('metadataURI', metadataURI)
    if(metadataURI && this.state.minted === false) {
      // this.setState({ minted: true }, () => {
      //   console.log(this.state.minted, 'minted');
      // }); 
      const tokenId = await send(
        account,
        metadataURI
      )
      console.log('tokenId', tokenId)
      
      return tokenId
    }
  }

  async clientSideCalltoIPFS(buffer, account) {
    const basename =  'proof-of-magician.webm';
    const ipfsPath = '/nft/' + basename;

    const ownerAddress = account;

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
      name: `Proof of Magician`,
      description: 'This NFT is literally proof of your magician abilities',
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

    return result;

    // res.json(result);
  }

  async addBlobToIPFS(blob, account, number, mintToken, send) {
    
    let that = this;

    this.clientSideCalltoIPFS(blob, account).then(function (response) {
      //handle success
      console.log(response);
      that.setState({
        ipfsResultObj: response.data
      });

      const tokenID = mintToken(response.metadataURI, account, send);
      console.log(`Token minted. TokenId = ${tokenID}`)
    })
    .catch(function (response) {
      //handle error
      console.log(response);
    });
     
    // axios({
    //   method: 'post',
    //   url: `http://localhost:${'3002'}/ipfs`,
    //   data: data,
    //   headers: {'Content-Type': 'multipart/form-data' }
    // }).then(function (response) {
    //     //handle success
    //     console.log(response);
    //     that.setState({
    //       ipfsResultObj: response.data
    //     });

    //     const tokenID = mintToken(response.data.metadataURI, account, send);
    //     console.log(`Token minted. TokenId = ${tokenID}`)
    // })
    // .catch(function (response) {
    //     //handle error
    //     console.log(response);
    // });
  }
  
  render() {
    const { ipfsResultObj } = this.state;
    console.log('changed')

    return (
      <App ipfsResultObj={ipfsResultObj} addBlobToIPFS={this.addBlobToIPFS} mintToken={this.mintToken} />
    )
  }
}

function App({ ipfsResultObj, addBlobToIPFS, mintToken }) {
  const { account } = useEthers();

  const contract = new Contract(addresses.ceaErc20, abis.erc20);
  console.log('contract', contract)

  const { send } = useContractFunction(
    contract,
    "mintToken"
  )

  return (
    <Container>
      <Header>
      <h1>Proof of Magician</h1>
        <WalletButton />
      </Header>
      <Body>
        <ScreenRecorder 
          addBlobToIPFS={addBlobToIPFS} 
          account={account}
          mintToken={mintToken}
          send={send}
          ipfsResultObj={ipfsResultObj}
        />
      </Body>
    </Container>
  );
}

export default ProofofMagician;
