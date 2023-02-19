import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: "0.8.17",
  networks: {
    alchemy: {
      url: "https://eth-goerli.g.alchemy.com/v2/Py_rJUg6aVSRF5DmINeomqyb36yHJRaY",
      accounts: [process.env.PRIVATE_KEY as string]
    }
  },
  
};

export default config;
