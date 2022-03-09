// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "hardhat/console.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import {Base64} from "./libraries/Base64.sol";

contract NFTMinter is ERC721URIStorage {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address public contractAdmin;
    address[] partcipants;
    mapping (address => uint) participantTokenId;
    string password;

    event nftMinted(address recepient, uint tokenId);
    event passwordChanged(string oldPassword, string newPassword);

    constructor() ERC721("Web3CampNagpur", "W3C") {
        console.log("My NFT Contract");
        contractAdmin = msg.sender;
    }

    function makeAnNFT(address memory recepient, string memory _password) public {
        require(keccak256(abi.encodePacked(password)) === keccak256(abi.encodePacked(_password)));
        uint256 newItemId = _tokenIds.current();
        _safeMint(recepient, newItemId);
        
        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"name": "Web3 Camp Badge", "description": "First Web3 Camp In Nagpur", "image": "https://ipfs.infura.io/ipfs/QmSzBjVVvcRKboDwNC3jCUiu1EKC1dwe9rBBoEgExT5Ter"}'
                    )
                )
            )
        );
        string memory finalTokenUri = string(
            abi.encodePacked("data:application/json;base64,", json)
        );
        _setTokenURI(newItemId, finalTokenUri);
        console.log(
            "An NFT w/ ID %s has been minted to %s",
            newItemId,
            recepient
        );
        _tokenIds.increment();
        participants.push(recepient);
        emit NFTMinted(recepient, newItemId);
    }

    function getParticipants() public view returns(address[] memory) {
        return participants;
    }

    function setPassword(string memory _password) public{
        require(msg.sender == contractAdmin);
        emit passwordChanged(password, _password);
        password = _password;
    }
}
