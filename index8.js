require('dotenv').config();

const Web3 = require("web3");
const _ = require("underscore");

const rpcURL = process.env["RopstenURL"];
const web3 = new Web3(rpcURL);




//Get Contract Event Stream
const web3Utils = async () => {
    try {
        
        const result = await web3.eth.getGasPrice();
        console.log("Current Average Gas price is: ", result);
        console.log("Gas price in Gwei", web3.utils.fromWei(result, 'gwei'));

        }

    catch (error) {
        console.log('Error: ', error);
    }

    //Sha3
    try {

        const result2 = await web3.utils.sha3('PIAIC');
        console.log("Sha3 hash of PIAIC is: ", result2);
    }

    catch (error) {
        console.log('Error: ', error);
    }

    //Keccak256
    try {

        const result2 = await web3.utils.keccak256('PIAIC');
        console.log("keccak256 hash of PIAIC is: ", result2);
    }

    catch (error) {
        console.log('Error: ', error);
    }

    //Random Hex
    try {

        const result3 = await web3.utils.randomHex(32);
        console.log("Random hex is: ", result3);
    }

    catch (error) {
        console.log('Error: ', error);
    }


    //accessing _ library
    try {

        _.each({ Name1: 'Alpha', Name2: 'Online'}, (value, key) => {
            console.log(key);
            console.log(value);
        });
        
    }

    catch (error) {
        console.log('Error: ', error);
    }

    
}

web3Utils();