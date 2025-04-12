// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

contract ETHTransfer {
    event TransferSent(address indexed sender, address indexed recipient, uint256 amount);
    
    function sendETH(address payable _recipient) external payable {
        require(msg.value > 0, "Jumlah ETH harus lebih dari 0");
        _recipient.transfer(msg.value);
        emit TransferSent(msg.sender, _recipient, msg.value);
    }
}