const EtherSender = artifacts.require("./EtherSender.sol");

module.exports = function(deployer) {
  deployer.deploy(EtherSender);
};