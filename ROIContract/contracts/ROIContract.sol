//SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.1;

contract ROIContract {
    uint256 public bankBalance;
    uint256 public registrationFees;
    uint256 public liquifyLimit;
    address payable contractAddress;
    address payable owner;

    mapping(address => uint256) balance;
    mapping(address => uint256) reward;
    mapping(address => uint256) lastRewardedTime;
    mapping(address => bool) userIsRegistered;

    address payable[] public registerdUsers;

    constructor() payable {
        owner = payable(msg.sender);
        bankBalance = address(this).balance;
        registrationFees = 0.0169 ether;
        liquifyLimit = 1 ether;
        contractAddress = payable(address(this));
    }

    event userRegistered(address _user, uint256 _time);
    event ethDeposited(address _user, uint256 _amount, uint256 _time);
    event rewardsWithdrawn(address _user, uint256 _amount, uint256 _time);
    event userRewarded(address _user, uint256 _amount, uint256 _time);
    event liquifyLimitRewarded(address _user, uint256 _amount, uint256 _time);

    function register() public payable {
        require(msg.value == registrationFees, "You Can't Pay More Or Less Than Registration Fee");
        owner.transfer(registrationFees);
        balance[msg.sender] = 0;
        userIsRegistered[msg.sender] = true;
        registerdUsers.push(payable(msg.sender));
        emit userRegistered(msg.sender, block.timestamp);
    }

    function deposit() public payable {
        require(userIsRegistered[msg.sender], "Please Register To Deposit Amount");
        contractAddress.transfer(msg.value);
        balance[msg.sender] += msg.value;
        bankBalance += msg.value;
        emit ethDeposited(msg.sender, msg.value, block.timestamp);
    }

    function rewardAfterInterval() public {
        require(lastRewardedTime[msg.sender] > block.timestamp - 24 hours, "Please Wait For 24 Hours To Complete");
        reward[msg.sender] += (balance[msg.sender] * 171) / 1000000;
        emit userRewarded(msg.sender, reward[msg.sender], block.timestamp);
    }

    function liquifyLimitReached() public payable {
        require(msg.sender == owner, "Only Owner Can Perform This Action");
        require(address(this).balance >= liquifyLimit, "Liquify Limit Not Reached Yet");
        uint256 amountToBeDistributed = (address(this).balance * 67) / 10000;
        for (uint256 i = 0; i < registerdUsers.length; i++) {
            registerdUsers[i].transfer(amountToBeDistributed);
            emit liquifyLimitRewarded(msg.sender, amountToBeDistributed, block.timestamp);
        }
    }

    function withdraw() public payable {
        require(reward[msg.sender] > 0, "You Have No Pending Rewards");
        address payable _user = payable(msg.sender);
        _user.transfer(reward[msg.sender]);
        reward[msg.sender] = 0;
        emit rewardsWithdrawn(msg.sender, msg.value, block.timestamp);
    }

    function getContractBalance() public view returns(uint) {
        return address(this).balance;
    }

    function getRegisteredUsers() public view returns(address payable[] memory){
        return registerdUsers;
    }

    function getUserDeposit() public view returns(uint) {
        return balance[msg.sender];
    }

    receive() external payable {}
}   
