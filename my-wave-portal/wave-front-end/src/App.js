import "./App.css";
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import abi from "./utils/WavePortal.json"

function App() {
	const [currentAccount, setCurrentAccount] =
		useState("");

	const contractAddress =
		"0xD194f3030D653cbd7066E1D2Fa340218aD11C201";

  const contractABI = abi.abi;

	const checkIfWalletIsConnected = async () => {
		try {
			const { ethereum } = window;

			if (!ethereum) {
				console.log("Make sure you have metamask");
			} else {
				console.log(
					"We have the ethereum object",
					ethereum,
				);
			}

			const accounts = await ethereum.request({
				method: "eth_accounts",
			});

			if (accounts.length !== 0) {
				const account = accounts[0];
				console.log(
					"Found an authorized account: ",
					account,
				);
				setCurrentAccount(account);
			} else {
				console.log("No authorized account found");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const connectWallet = async () => {
		try {
			const { ethereum } = window;

			if (!ethereum) {
				alert("Get MetaMask!!!");
				return;
			}

			const accounts = await ethereum.request({
				method: "eth_requestAccounts",
			});

			console.log("Connected", accounts[0]);
			setCurrentAccount(accounts[0]);
		} catch (error) {
			console.log(error);
		}
	};

	const wave = async () => {
		try {
			const { ethereum } = window;

			if (ethereum) {
				const provider =
					new ethers.providers.Web3Provider(
						ethereum,
					);
				const signer = provider.getSigner();
				const wavePortalContract =
					new ethers.Contract(
						contractAddress,
						contractABI,
						signer,
					);

				let count =
					await wavePortalContract.getTotalWaves();
				console.log(
					"Retrived total wave count...",
					count.toNumber(),
				);

        const waveTxn = await wavePortalContract.wave();
        console.log("Mining...", waveTxn.hash);

        await waveTxn.wait();
        console.log("Mined -- ", waveTxn.hash);

        count = await wavePortalContract.getTotalWaves();
        console.log("Retrived total wave count...", count.toNumber());

			} else {
				console.log(
					"Ethereum object doesn't exist!",
				);
			}
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		checkIfWalletIsConnected();
	}, []);

	return (
		<div className="App">
			<div className="mainContainer">
				<div className="dataContainer">
					<div className="header">
						👋 Hey There!
					</div>
					<div className="bio">
						I have got in depth in web3 now,
						give me a wave!
					</div>
					<button
						className="waveButton"
						onClick={wave}
					>
						Wave At Me!
					</button>

					{!currentAccount && (
						<button
							className="waveButton"
							onClick={connectWallet}
						>
							Connect Wallet
						</button>
					)}
				</div>
			</div>
		</div>
	);
}

export default App;
