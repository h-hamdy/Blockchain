var Web3 = require('web3');
var fs = require('fs');

var url = "https://mainnet.infura.io/v3/563c48cd7d1d40bea8a6bcc9be3afaf6";

var web3 = new Web3(url);


var abiFileContents = fs.readFileSync("ABI.json");
var contractABI = JSON.parse(abiFileContents);

var contractAddress = '0xdAC17F958D2ee523a2206206994597C13D831ec7';

var contract = new web3.eth.Contract(contractABI, contractAddress);

contract.methods.name().call((err, result) => { (console.log('Name of the Contract is = ', result)) }) ;

contract.methods.symbol().call((err, result) => { (console.log('Get the Symbol of the contract = ', result)) }) ;

contract.methods.totalSupply().call((err, result) => { (console.log('Get the total supply of the contract = ', result)) }) ;

