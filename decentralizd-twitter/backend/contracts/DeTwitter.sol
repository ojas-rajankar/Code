// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract DeTwitter {

    struct Tweet {
        address sender;
        string message;
        uint timestamp;
    }

    event Tweeted(string tweetContent, address tweetedBy, uint twittedAt);

    Tweet[] Tweets;

    function tweet(string memory _message) external {
        Tweets.push(Tweet(msg.sender, _message, block.timestamp));
        emit Tweeted( _message, msg.sender, block.timestamp);
    }

    function getAllTweets() external view returns (Tweet[] memory){
        return(Tweets);
    }
}