import { ethers } from "hardhat";

async function main() {

  const Bloy = await ethers.getContractFactory("Bloy");
  const bloy = await Bloy.deploy();

  await bloy.deployed();

  console.log(`Stuniq (Bloy) deployed to ${bloy.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
