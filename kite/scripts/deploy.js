const { ethers } = require("hardhat");
const hre = require("hardhat");
const fs = require("fs");

async function main() {
  //get the signer that we will use to deploy
  const [deployer] = await ethers.getSigners();

  //Get the NFTMarketplace smart contract object and deploy it
  const Kite = await hre.ethers.getContractFactory("Kite");
  const kite = await Kite.deploy();

  await Kite.deployed();

  console.log("Kite deployed to:", Kite.address);

  //Pull the address and ABI out while you deploy, since that will be key in interacting with the smart contract later
  const data = {
    address: Kite.address,
    abi: JSON.parse(Kite.interface.format("json")),
  };

  //This writes the ABI and address to the marketplace.json
  //This data is then used by frontend files to connect with the smart contract
  fs.writeFileSync("./abi/Kite.json", JSON.stringify(data));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
