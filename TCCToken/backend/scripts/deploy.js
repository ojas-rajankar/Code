const main = async () => {
  const TCCTokenContractFactory = await hre.ethers.getContractFactory("TCCToken");
  const TCCTokenContract = await TCCTokenContractFactory.deploy("Coding Corporation Coin", "CCC")
  await TCCTokenContract.deployed()
  console.log("Deployed At", TCCTokenContract.address)
}

const runMain = async () => {
  try {
    await main()
  } catch (error) {
    console.log(error.message)
  }
}

runMain()