// SPDX-License-Identifier: MIT
pragma solidity ^0.8.13;

contract EtherSender {
    address public owner;

    modifier onlyOwner() {
        require(msg.sender == owner, "Ownable: You are not the owner, Bye.");
        _;
    }

    constructor() {
        owner = msg.sender;
    }

    event Response(bool success, bytes data);

    uint256 public balanceReceived;

    function receiveMoney() public payable {
        balanceReceived += msg.value;
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function sendEthers(address payable _to) public payable {
        (bool success, bytes memory data) = _to.call{value: msg.value}("");
        require(success, "Failed to send ether");
        emit Response(success, data);
    }

    function withdrawAll() external onlyOwner {
        (bool success, bytes memory data) = msg.sender.call{
            value: address(this).balance
        }("");

        require(success, "Failed to withdraw ether");
        emit Response(success, data);
    }
}
