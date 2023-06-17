const Web3 = require('web3');
const web3 = new Web3('http://127.0.0.1:7545');

const acc1 = '0x96B36AD8BFf26bE7696da833Ad892001B02E0509';
const acc2 = '0xB58Dae6F96C800d8b95b15a4eEb2a4f2D2d63bDF';
const val = web3.utils.toWei('1', 'ether');



web3.eth.sendTransaction({ from: acc1, to: acc2, value: val});

web3.eth.getBalance(acc1, (err, bal) => console.log(bal));