/* 
			Ethereum Balance Checker
This is a simple JavaScript code snippet that allows you to check the balance of an Ethereum address using the web3.js library.

*/

var Web3 = require('web3');

var url = "https://mainnet.infura.io/v3/563c48cd7d1d40bea8a6bcc9be3afaf6";
var web3 = new Web3(url);

var address = '0xAdd5c5Aa42BdA65D709A95ac6D852C92749d7F01';

web3.eth.getBalance(address, (err, bal) => {
	if (err) {
	  console.error('Error:', err);
	} else {
	  var balance = web3.utils.fromWei(bal, 'ether');
	  console.log('Balance:', balance, 'ETH');
	}
  });