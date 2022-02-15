const main = async () => {
  const decentragramContractFactory = await hre.ethers.getContractFactory(
    "Decentragram"
  );
  const decentragram = await decentragramContractFactory.deploy();
  await decentragram.deployed();
  console.log("Contract Deployed At: ", decentragram.address);

  const [owner] = await hre.ethers.getSigners();
  console.log("Contract Deployed By: ", owner.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(1);
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};

runMain();
