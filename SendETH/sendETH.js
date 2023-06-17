const Web3 = require('web3');
const Tx = require('ethereumjs-tx').Transaction;

const web3 = new Web3(new Web3.providers.HttpProvider('https://sepolia.infura.io/v3/634bafc5c71b4580a2bbb048c9fd3edb'));

web3.eth.net.getId()
  .then(networkId => {
    console.log('Connected to network:', networkId);


	const account1 = '0x25C943d0222F150Ee6768b6c14b126DD52FAb1DF';
	const account2 = '0x1210Ea5a3eE0Ec51f7f7756448156733E2422a0C';

	const prkey = Buffer.from('2624f2040e7274539b2fda810a846a6464a48f41692e819a52afc32da9ece282', 'hex');

	web3.eth.getTransactionCount(account1, (err, txCount) => {
	const txObject = {
		from: account1,
		nonce: web3.utils.toHex(txCount),
		to: account2,
		value: web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
		gasLimit: web3.utils.toHex(21000),
		gasPrice: web3.utils.toHex(web3.utils.toWei('1', 'gwei'))
	};
	
	console.log(txObject.gasLimit);
	console.log(txObject.gasPrice);

	var tx = new Tx(txObject, {'chain':'ropsten'});
	tx.sign(prkey);

	const serializedTransaction = tx.serialize();
	const raw = '0x' + serializedTransaction.toString('hex');

	web3.eth.sendSignedTransaction(raw)
		.on('transactionHash', (hash) => {
		console.log('Transaction Hash:', hash);
		})
		.on('receipt', (receipt) => {
		console.log('Receipt:', receipt);
		})
		.on('error', (error) => {
		console.error('Error:', error);
		});
	});

	
    
  })
  .catch(error => {
    console.error('Error connecting to network:', error);
  });
