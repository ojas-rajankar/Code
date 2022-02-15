const main = async () => {
    const ROIContractFactory = await hre.ethers.getContractFactory("ROIContract");
    const ROIContract = await ROIContractFactory.deploy();
    await ROIContract.deployed();

    console.log("Contract Deployed To: ", ROIContract.address);

    const [owner, randomPerson] = await hre.ethers.getSigners()

    let registerTxn;
    registerTxn = await ROIContract.register({from: owner.address, value: hre.ethers.utils.parseEther("1")})
    registerTxn = await ROIContract.connect(randomPerson).register({from: randomPerson.address, value: hre.ethers.utils.parseEther("1")})

    let depositTxn;
    depositTxn = await ROIContract.deposit({from: owner.address, value: hre.ethers.utils.parseEther("1.5")})

    let contractBalance = await hre.ethers.provider.getBalance(
        ROIContract.address
      );

    console.log("Contract Balance: ", hre.ethers.utils.formatEther(contractBalance))

    let registeredUsersArr;
    registeredUsersArr = await ROIContract.getRegisteredUsers();

    console.log(registeredUsersArr)

    let getUserBalance;
    getUserBalance = await ROIContract.getUserDeposit();

    console.log(getUserBalance)

}

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain()