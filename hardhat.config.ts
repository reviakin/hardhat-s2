import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-etherscan";
import * as dotenv from "dotenv";
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
  },
};

export default config;
