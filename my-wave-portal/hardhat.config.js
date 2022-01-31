require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/nF4xCnS5cKHX-N_x9J_u3azXPphzK6Fz",
      accounts: ["e5e6bfe76db85ad1abc844dfd2a79fcc06dad7f9e07a38938cd221997700fb05"]
    }
  }
};
