import "./App.css";
import styled from "styled-components";
import logo from "./assets/girlscript-logo.jpg";
import badge from "./assets/Nagpur.png";
import { ethers } from "ethers";
import NFTMinterABI from "./NFTMinter.json";
import { useState, useEffect } from "react";

const Main = styled.div`
	position: absolute;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: black;
	display: flex;
	justify-content: center;
	align-items: center;
`;
const Header = styled.div`
  z-index:2;
  position: absolute;
  top 0;
  left: 0;
  right: 0;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: center;
  aligh-items: center;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  background-image: linear-gradient(to right,#ee4758,#d64c7f);
`;

const LogoImg = styled.img`
	width: 3rem;
	height: 3rem;
	border-radius: 50%;
`;

const LogoTxt = styled.span`
	font-size: 2rem;
	font-family: "Roboto Mono", monospace;
	margin-left: 1rem;
	font-weight: 600;
	color: white;
`;
const Container = styled.div`
	margin-top: 5vh;
	position: absolute;
	z-index: 2;
	font-size: 2rem;
	font-family: "Roboto Mono", monospace;
	font-weight: 300;
	color: white;

	form {
		max-height: 60vh;
		padding: 10vh 10vw 10vh 10vw;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: 1px solid white;
	}

	button {
		background-image: linear-gradient(
			to right,
			#00b09b,
			#96c93d
		);
		color: white;
		font-size: 1.5rem;
		font-family: "Roboto Mono", monospace;
		font-weight: 600;
		border: 1px solid white;
		margin-top: 5vh;
		cursor: pointer;
	}

	img {
		width: 40vh;
	}

	a {
		font-size: 1rem;
		margin-top: 5vh;
		margin-bottom: 5vh;
		text-decoration: none;
		color: white;
	}
`;

function App() {
	const [currentWallet, setCurrentWallet] = useState("");
	const [buttonText, setButtonText] = useState("Mint");

	const contractABI = NFTMinterABI.abi;
	const contractAddress =
		"0x6bf91af2087f0749426145eef96bb20eded371d2";

	const checkIfWalletIsConnected = async () => {
		try {
			const { ethereum } = window;

			if (!ethereum) {
				setButtonText("Download Metamask");
			} else {
				const accounts = await ethereum.request({
					method: "eth_accounts",
				});

				if (accounts.lenght !== 0) {
					const account = accounts[0];
					setCurrentWallet(account);
				} else {
					setButtonText("Connect Wallet");
				}
			}
		} catch (error) {
			console.log(error.message);
		}
	};

	const connectWallet = async () => {
		try {
			const { ethereum } = window;

			if (!ethereum) {0
				setButtonText("Download Metamask");
			} else {
				const accounts = await ethereum.request({
					method: "eth_requestAccounts",
				});

				if (accounts.lenght !== 0) {
					const account = accounts[0];
					setCurrentWallet(account);
				} else {
					setButtonText("Mint");
				}
			}
		} catch (error) {
			console.log(error.message);
		}
	};

	const mint = async () => {
		try {
			const { ethereum } = window;

			if (!ethereum) {
				setButtonText("Download Metamask");
			} else {
				const provider =
					new ethers.providers.Web3Provider(
						ethereum,
					);
				const signer = provider.getSigner();
				const NFTMinterContract =
					new ethers.Contract(
						contractAddress,
						contractABI,
						signer,
					);

				const mint =
					await NFTMinterContract.makeAnNFT();
				mint.wait();

				setButtonText("Minted");
			}
		} catch (error) {
			console.log(error.message);
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (buttonText === "Connect Wallet") {
			connectWallet();
		} else if (buttonText === "Mint") {
			mint();
		}
	};

	useEffect(() => {
		checkIfWalletIsConnected();
	}, []);

	return (
		<div className="App">
			<Main>
				<Header>
					<LogoImg
						src={logo}
						alt={"GirlScript Logo"}
					></LogoImg>
					<LogoTxt>GirlScript Foundation</LogoTxt>
				</Header>
				<Container>
					<form onSubmit={(e) => handleSubmit(e)}>
						<h3>
							Mint An Web3 Camp Nagpur Special
							NFT
						</h3>
						<img src={badge}></img>
						<button>{buttonText}</button>
						<a href="https://testnets.opensea.io/collection/web3camp">
							Check All Web3Camp NFTs
						</a>
					</form>
				</Container>
			</Main>
		</div>
	);
}

export default App;
