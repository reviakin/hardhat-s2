import { task } from "hardhat/config";

task("block-number", "Prints the current block number").setAction(
  async (taskArg, hre) => {
    const blockNumber = hre.ethers.provider.getBlockNumber();
    console.log(blockNumber);
  }
);
