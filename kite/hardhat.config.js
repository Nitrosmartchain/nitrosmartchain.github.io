require("@nomiclabs/hardhat-waffle");

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 53,
    },
    //  unused configuration commented out for now
    // mumbai: {
    //   url: "https://rpc-mumbai.maticvigil.com",
    //   accounts: [process.env.PRIVATE_KEY],
    // },
    // matic: {
    //   url: "https://rpc-mumbai.maticvigil.com",
    //   accounts: [
    //     process.env.PRIVATE_KEY
    //   ],
    // },
    // optimism: {
    //   url: "https://mainnet.optimism.io",
    //   accounts: [process.env.PRIVATE_KEY],
    // },
    csc: {
      url: "https://testnet-rpc.coinex.net",
      accounts: "d982fb75f1b2358965331d2b144687067045c8a3aea363d3428213aa49b11c90",
    },
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
