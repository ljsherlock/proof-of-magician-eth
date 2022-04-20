import { useQuery } from "@apollo/client";
import { Contract } from "@ethersproject/contracts";
import { shortenAddress, useContractFunction, useEthers, useLookupAddress } from "@usedapp/core";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import Web3 from 'web3';

import { addresses, abis } from "@my-app/contracts";
import ScreenRecorder from "./components/screenRecorder";
import { Body, Button, Container, Header, Image, Link } from "./components";
import GET_TRANSFERS from "./graphql/subgraph";

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

  async addBlobToIPFS(blob, account, number, mintToken, send) {
    console.log('addBlobToIPFS blob', blob);
  
    let data = new FormData();
    data.append('blob', blob);
    data.append('account', account);
    let that = this;
    
    axios({
      method: 'post',
      url: `http://localhost:${'3002'}/ipfs`,
      data: data,
      headers: {'Content-Type': 'multipart/form-data' }
    }).then(function (response) {
        //handle success
        console.log(response);
        that.setState({
          ipfsResultObj: response.data
        });

        mintToken(response.data.metadataURI, account, send)
    })
    .catch(function (response) {
        //handle error
        console.log(response);
    });
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
  // console.log('ipfsResultObj', ipfsResultObj)
  // we have it.

  const { account } = useEthers();
  // const metadataURI = ipfsResultObj ? ipfsResultObj.metadataURI : '';
  // const { loading, error: subgraphQueryError, data } = useQuery(GET_TRANSFERS);

  // useEffect(() => {
  //   if (subgraphQueryError) {
  //     console.error("Error while querying subgraph:", subgraphQueryError.message);
  //     return;
  //   }
  //   if (!loading && data && data.transfers) {
  //     console.log({ transfers: data.transfers });
  //   }
  // }, [loading, subgraphQueryError, data]);

  const contract = new Contract(addresses.ceaErc20, abis.erc20);
  console.log('contract', contract)

  const { send } = useContractFunction(
    contract,
    "mintToken"
  )

  return (
    <Container>
      <Header>
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
