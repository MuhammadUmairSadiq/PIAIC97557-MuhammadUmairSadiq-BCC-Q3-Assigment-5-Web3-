require('dotenv').config();

const Web3 = require("web3");
const Tx = require('ethereumjs-tx').Transaction;
const rpcURL = process.env["RopstenURL"];
const web3 = new Web3(rpcURL);

const accountSender = '0xD7Aa152E5eB105d7F6b0dff9f5821d9129ED86c3';
const privateKeySender = Buffer.from(process.env.PRIVATE_KEY_1,'hex');

const accountReceiver = '0x92506A72dB4e529b48541F84ff9C4d3a7B2aBa29';


web3.eth.getTransactionCount(accountSender, (err, txCount) => {
    console.log("Nonce value: ", txCount);

    //1. Build a transaction object
    const txObject = {
        nonce:    web3.utils.toHex(txCount),
        to:       accountReceiver,
        value:    web3.utils.toHex(web3.utils.toWei('0.1', 'ether')),
        gasLimit: web3.utils.toHex(21000),
        gasPrice: web3.utils.toHex(web3.utils.toWei('10', 'gwei'))
        }

        //2. Sign the transaction
        const tx = new Tx(txObject, { 'chain': 'ropsten' });
        tx.sign(privateKeySender);

        //3. Broadcast the transaction
        const serialize = tx.serialize();
        const txHex = '0x' + serialize.toString('hex');
        web3.eth.sendSignedTransaction(txHex, (error, txHash) => {
            if(!error){
                console.log("Transaction Successful", txHash);
            } else{
                console.log("Transaction Error:", error);
            }
        });
});