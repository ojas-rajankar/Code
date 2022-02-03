const main = async () => {
    const NFTMinterContractFactory = await hre.ethers.getContractFactory("NFTMinter");
    const NFTMinter = await NFTMinterContractFactory.deploy();
    await NFTMinter.deployed();
    console.log("Contract Deployed At: ", NFTMinter.address)

    let txn = await NFTMinter.makeAnNFT("Testing", "Just Testing Version 2", "https://s3.amazonaws.com/ocn-media/1e16b10d-b38a-4efa-aca0-303cc24c2d12.png");
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