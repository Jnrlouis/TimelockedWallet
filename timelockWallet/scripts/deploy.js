
const hre = require("hardhat");

async function main() {

  // We get the contract to deploy
  const Timelock = await hre.ethers.getContractFactory("TimeLock");
  const timelock = await Timelock.deploy();

  await timelock.deployed();

  console.log("Timelock deployed to:", timelock.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
