import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import '@nomiclabs/hardhat-etherscan';
import '@nomiclabs/hardhat-ethers';

require('dotenv').config();
require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.17',
  },
  networks: {
    // for testnet
    'egan': {
      url: process.env.RPC_URL, 
      accounts: [process.env.WALLET_KEY as string],
    },
  },
  etherscan: {
   apiKey: {
    // Basescan doesn't require an API key, however
    // Hardhat still expects an arbitrary string to be provided.
    "base-goerli": "PLACEHOLDER_STRING"
   },
   customChains: [
     {
       network: "base-goerli",
       chainId: 80085,
       urls: {
        apiURL: "z",
        browserURL: "z"
       }
     }
   ]
 },
  defaultNetwork: 'hardhat',
};


export default config;