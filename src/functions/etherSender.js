const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
require("dotenv").config();

//RPC CONNECTION TO BLOCKCHAIN NODE

const NODE_IP = "127.0.0.1";
const NODE_PORT = "9545";
const MNEMONIC =
  "";

RPC_CONNECTION = `http://${NODE_IP}:${NODE_PORT}`;

const provider = new HDWalletProvider({
  mnemonic: {
    phrase: MNEMONIC,
  },
  providerOrUrl: RPC_CONNECTION,
});

const web3 = new Web3(provider);

module.exports = async function (callback) {
  //Log the wallet address
  let accounts = await web3.eth.getAccounts();
  console.log(accounts);
  web3.eth.getBalance(accounts[0]).then(function (value) {
    console.log(web3.utils.fromWei(value, "ether"));
  });

  // Get  ABI from json of compiled contract
  const json = require("../../build/contracts/EtherSender");
  const contractAddress = json.networks["5777"].address;

  const Contract = web3.eth.Contract;
  const contract = new Contract(json.abi, contractAddress);

  contract.methods
    .sendEthers(accounts[1])
    .send({ from: accounts[0], value: 10000})
    .then(function (res) {
      console.log("Result", res);
      callback();
    });
};
