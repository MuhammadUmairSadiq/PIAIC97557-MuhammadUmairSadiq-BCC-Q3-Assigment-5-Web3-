require('dotenv').config();

const Web3 = require("web3");
const Tx = require('ethereumjs-tx').Transaction;
const rpcURL = process.env["RopstenURL"];
const web3 = new Web3(rpcURL);

const accountSender = '0xD7Aa152E5eB105d7F6b0dff9f5821d9129ED86c3';
const privateKeySender = Buffer.from(process.env.PRIVATE_KEY_1,'hex');

const accountReceiver = '0x92506A72dB4e529b48541F84ff9C4d3a7B2aBa29';


const transferEthAsync = async () => {
    try {
        const txNonce = await web3.eth.getTransactionCount(accountSender);

        // Build a transaction object
        const txObject = {
            nonce: web3.utils.toHex(txNonce),
            to: accountReceiver,
            value: web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
            gasLimit: web3.utils.toHex(21000),
            gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
        }

        // Sign the transaction
        const tx = new Tx(txObject, { 'chain': 'ropsten' });
        tx.sign(privateKeySender);

        // Broadcast the transaction
        const serializedTx = tx.serialize();
        const raw = '0x' + serializedTx.toString('hex');
        const response = await web3.eth.sendSignedTransaction(raw);
        console.log('Transaction Hash: ', response.transactionHash);

    } catch (e) {
        console.log('Error: ', e);
    }
}

transferEthAsync();