require('dotenv').config();

const Web3 = require("web3");
const Tx = require('ethereumjs-tx').Transaction;

const rpcURL = process.env["RopstenURL"];
const web3 = new Web3(rpcURL);


//Get Contract Event Stream
const readBlock = async () => {
    try {
        
        //Read from contract
        const latestBlockNumber = await web3.eth.getBlockNumber();
        console.log("Latest block number is: ", latestBlockNumber);

        const latestBlock = await web3.eth.getBlock('latest');
        console.log("Latest block is: ", latestBlock);
        
        //This pieace of code is not working
     /*   await web3.eth.getBlockNumber().then((latest) => {
            for (let i = 0; i < 10; i++){
                web3.eth.getBlock(latest - i).then(console.log)
            }
        }
     */
    
    } catch (error) {
        console.log('Error: ', error);
    }
}

readBlock();