const main = async () => {
	const domainContractFactory =
		await hre.ethers.getContractFactory("Domains");
	const domainContract =
		await domainContractFactory.deploy("dev");
	await domainContract.deployed();
	console.log(
		"Contract Deployed To: ",
		domainContract.address,
	);

	const [owner, randomPerson] =
		await hre.ethers.getSigners();
	console.log("Contract Deployed By: ", owner.address);

	const txnRegister1 = await domainContract.register(
		"solidity",
		{ value: hre.ethers.utils.parseEther("0.1") },
	);
	await txnRegister1.wait();

	const domainOwner1 = await domainContract.getAddress(
		"solidity",
	);

	console.log(
		"Owner Of solidity.dev Domain Is: ",
		domainOwner1,
	);

	const txnRecord = await domainContract.setRecord(
		"solidity",
		"Damn, I am a solidity developer.",
	);
	await txnRecord.wait();

	const recordedStuff = await domainContract.getRecord(
		"solidity",
	);
	console.log(
		"Data Recorded With solidity.dev Is: ",
		recordedStuff,
	);

    const balance = await hre.ethers.provider.getBalance(domainContract.address);
    console.log("Contract Balance: ", hre.ethers.utils.formatEther(balance));
};

const runMain = async () => {
	try {
		await main();
		process.exit(0);
	} catch (error) {
		console.log(error.message);
		process.exit(1);
	}
};

runMain();
