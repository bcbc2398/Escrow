require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
module.exports = {
  solidity: "0.7.5",
  paths: {
    artifacts: "./app/artifacts",
  },
  networks: {
  rinkeby: {
      url: `${process.env.RINK_URL}`,
      accounts: [`0x${process.env.RINK_PRI},0x${process.env.RINK_PRI2},0x${process.env.RINK_PRI3}`],
    }
  }
};
