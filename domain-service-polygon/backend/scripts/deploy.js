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

	let txn = await domainContract.register("solidity", {
		value: hre.ethers.utils.parseEther("0.1"),
	});
	await txn.wait();

	console.log("Minted domain solidity.dev");

	txn = await domainContract.setRecord(
		"solidity",
		"The Best Of All",
	);
	await txn.wait();
	console.log("Set record for solidity.dev");

	const address = await domainContract.getAddress(
		"solidity",
	);
	console.log("Owner of domain banana: ", address);

	const balance = await hre.ethers.provider.getBalance(
		domainContract.address,
	);
	console.log(
		"Contract balance: ",
		hre.ethers.utils.formatEther(balance),
	);
};

const runMain = async () => {
	try {
		await main();
		process.exit(0);
	} catch (error) {
		console.log(error.msg);
		process.exit(1);
	}
};

runMain();
