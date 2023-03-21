import { ethers, run, network } from "hardhat";
import * as dotenv from "dotenv";
dotenv.config();

async function main() {
  const S2Factory = await ethers.getContractFactory("SimpleStorage");
  const S2 = await S2Factory.deploy();
  await S2.deployed();
  console.log(S2.address);
  if (network.config.chainId == 5 && process.env.ETHERSCAN_KEY) {
    await S2.deployTransaction.wait(6);
    await verify(S2.address, []);
  }
  // todo try to store and update value
}

async function verify(contractAddress: string, args?: any) {
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    console.log(e);
  }
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
