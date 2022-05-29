const { ethers } = require("hardhat");
const hre = require("hardhat");

 async function deployMintLand(){
  // [owner, account1, account2, account3] = await ethers.getSigners()
  const minter_address = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
  const landMint = await ethers.getContractFactory("MintLand")
  const landMintContract = await landMint.deploy(minter_address)
  const lastedDeployed = await ethers.getContractAt("MintLand",landMintContract.address)
  console.log("contract deployed  At ",landMintContract.address)
  return lastedDeployed
}

deployMintLand()

module.exports = {
    deployMintLand
}