import 'hardhat-typechain'
import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-waffle'
import '@nomiclabs/hardhat-etherscan'

export default {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${process.env.4b6f463c8f9e464abbeb9ad02c94cc31}`,
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${process.env.4b6f463c8f9e464abbeb9ad02c94cc31}`,
    },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${process.env.4b6f463c8f9e464abbeb9ad02c94cc31}`,
    },
    goerli: {
      url: `https://goerli.infura.io/v3/${process.env.4b6f463c8f9e464abbeb9ad02c94cc31}`,
    },
    kovan: {
      url: `https://kovan.infura.io/v3/${process.env.`4b6f463c8f9e464abbeb9ad02c94cc31}`,
    },
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
  solidity: {
    version: '0.7.6',
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
      metadata: {
        // do not include the metadata hash, since this is machine dependent
        // and we want all generated code to be deterministic
        // https://docs.soliditylang.org/en/v0.7.6/metadata.html
        bytecodeHash: 'none',
      },
    },
  },
}
