require('dotenv').config();

const Web3 = require("web3");
const rpcURL = process.env["RopstenURL"];
const web3 = new Web3(rpcURL);

const account = "0xD7Aa152E5eB105d7F6b0dff9f5821d9129ED86c3";

//Method called to check balance
web3.eth.getBalance(account,(err, wei)=> {
    console.log("Balance in wei = ", wei);
    balance = web3.utils.fromWei(wei, 'ether');
    console.log("Balance in ether = ", balance);
})