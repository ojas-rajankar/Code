// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";


contract WavePortal {
    uint totalWaves;
    uint seed;

    event NewWave(address indexed from, uint timestamp, string message);

    struct Wave {
        address waver;
        string message;
        uint timestamp;
    }

    Wave[] waves;

    mapping(address => uint) public lastWavedAt;

    constructor() payable {
        console.log("Smart Contract Deployed!!!");
        seed = (block.timestamp + block.difficulty) % 100;
    }

    function wave(string memory _message) public {
        require(lastWavedAt[msg.sender] + 15 < block.timestamp, "Wait 15m");

        totalWaves += 1;
        console.log("%s has waved w/ message %s", msg.sender, _message);
        waves.push(Wave(msg.sender, _message, block.timestamp));

        seed = (block.difficulty + block.timestamp + seed) % 100;
        console.log("Random # generated: %d:", seed);

        if (seed <= 5) {
            console.log("%s won!!!", msg.sender);

            
        uint prizeAmount = 0.0001 ether;

        require(prizeAmount <= address(this).balance);

        (bool success, ) = (msg.sender).call{value: prizeAmount}("");
        require(success, "Failed to withdraw money from contract"); 


        }

                emit NewWave(msg.sender, block.timestamp, _message);
    }

    function getAllWaves() public view returns (Wave[] memory) {
        return waves;
    }

    function getTotalWaves() public view returns (uint){
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }

}