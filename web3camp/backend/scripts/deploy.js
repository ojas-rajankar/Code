const main = async () => {
    const NFTMinterContractFactory = await hre.ethers.getContractFactory("NFTMinter");
    const NFTMinter = await NFTMinterContractFactory.deploy();
    await NFTMinter.deployed();
    console.log("Contract Deployed At: ", NFTMinter.address)

    let txn = await NFTMinter.makeAnNFT();
    await txn.wait();
    console.log("NFT Minted");
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