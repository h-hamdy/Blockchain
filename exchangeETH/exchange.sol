// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

// this smart constract send ETH from an account to another
contract Exchange {
    address public minter;
    mapping (address => uint) public balances;

    event Sent(address from, address to, uint amount);

    constructor () public {
        minter = msg.sender;
    }

    function mint(address receiver, uint amount) public  {
        if (msg.sender != minter) return;
        balances[receiver] += amount;
    }

    function send(address receiver, address sender, uint amount) payable public {
        if (balances[sender] < amount) return;
        balances[sender] -= amount;
        balances[receiver] += amount;
        emit Sent(sender, receiver, amount);
    }
}