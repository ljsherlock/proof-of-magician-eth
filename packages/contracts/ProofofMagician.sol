//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ProofOfMagician is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    string private _baseURIextended;

    constructor(string memory tokenName, string memory symbol) ERC721(tokenName, symbol) {}
    

    function setBaseURI(string memory baseURI_) internal onlyOwner() {
        _baseURIextended = baseURI_;
    }

    function mintToken(address owner, string memory metadataURI)
    public
    returns (uint256)
    {
        setBaseURI("ipfs://");
        _tokenIds.increment();

        uint256 id = _tokenIds.current();
        _safeMint(owner, id);
        _setTokenURI(id, metadataURI);

        return id;
    }
}
