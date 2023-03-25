import { HardhatUserConfig } from "hardhat/config";
import "hardhat-gas-reporter";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import * as dotenv from "dotenv";
import "./tasks/block-number";
dotenv.config();

const {
  GEORLI_URL = "",
  GEORLI_PRIVATE_KEY = "",
  ETHERSCAN_KEY = "",
} = process.env;

const config: HardhatUserConfig = {
  solidity: "0.8.8",
  etherscan: {
    apiKey: ETHERSCAN_KEY,
  },
  defaultNetwork: "hardhat",
  networks: {
    georli: {
      url: GEORLI_URL,
      accounts: [GEORLI_PRIVATE_KEY],
      chainId: 5,
    },
    localhost: {
      url: "http://127.0.0.1:8545/",
      chainId: 31337,
    },
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-reporter.txt",
    noColors: true,
    // TODO use in USD currency by coinmarketcap
  },
};

export default config;
