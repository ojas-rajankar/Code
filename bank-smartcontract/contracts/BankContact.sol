// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Bank{
    address public bankOwner;
    string public bankName;
    mapping(address => uint) public customerBalance;

    constructor() {
        bankOwner = msg.sender;
    }

    function depositMoney() public payable {
        require(msg.value >= 0, "Enter A Valid Amount!");
        customerBalance[msg.sender] += msg.value;
    }

    function setBankName(string memory _name) external {
        require(msg.sender == bankOwner, "Only Owner Can Change The Name!");
        bankName = _name;
    }

    function withdrawMoney(address payable _to, uint256 _amount) payable public {
        require(_amount <= customerBalance[msg.sender], "Please Enter Amount Less Than Equal To Account Balance!");
        _to.transfer(_amount);

        customerBalance[msg.sender] -= _amount;
    }

    function getCustomerBalance() external view returns (uint256){
        return customerBalance[msg.sender];
    }

    function getBankBalance() public view returns (uint256){
        require(msg.sender == bankOwner, "Only Bank Owner Can Check Bank Balance!");
        return address(this).balance;
    }
}