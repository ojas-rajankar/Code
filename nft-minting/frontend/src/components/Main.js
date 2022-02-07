import React, { useState } from "react";
import styled from "styled-components";
import { ethers } from "ethers";
import abi from "./NFTMinter.json";
import { storage } from "./firebase";

const MainContent = styled.div`
	position: absolute;
	background-color: rgba(255, 255, 255, 0.1);
	top: 10vh;
	width: calc(80vw);
	margin-left: 10vw;
	color: rgba(255, 255, 255, 0.8);
	z-index: 1;
	border: 5px solid;
	border-image-slice: 1;
	border-image-source: linear-gradient(
		to left,
		#743ad5,
		#d53a9d
	);
	padding: 8vh 0;

	.subgroup {
		height: 10vh;
		align-items: center;
		padding: 0 15vw;
	}

	h1 {
		font-size: calc(1.2rem + 1vw);
		font-family: "Rowdies", cursive;
		background: -webkit-linear-gradient(
			60deg,
			#e66465,
			#9198e5
		);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		margin-bottom: 10vh;
		width: 60%;
		padding: 0 20%;
	}

	label {
		font-family: "IBM Plex Sans Thai Looped", sans-serif;
		font-size: calc(1rem + 0.5vw);
		cursor: pointer;
	}

	input {
		border: none;
		background: none;
		border-bottom: 0.1px solid rgba(255, 255, 255, 0.6);
		width: 100%;
		color: white;
		font-size: calc(1rem + 0.5vw);
		cursor: pointer;
	}

	input:focus {
		outline: none;
	}

	input[type="file"] {
		display: none;
	}

	.img {
		text-align: center;
	}

	img {
		max-height: 15vh;
	}

	button {
		padding: 1vh 3vw;
		font-size: calc(1rem + 0.5vw);
		font-family: "Rowdies", cursive;
		background: linear-gradient(
			60deg,
			#e66465,
			#9198e5
		);
		border: none;
		color: rgba(255, 255, 255, 0.7);
	}
`;

const Main = (props) => {
	const contractAddress =
		"0x9d0653B3EFaec68DBB88fB8F24923034aac4a95c";
	const contractABI = abi.abi;
	const nftView =
		"https://rinkeby.rarible.com/collection/0x2c9584a1F091805284A7E27403cEfd18ea6F1A90/owned";

	const makeNFT = async (
		_nftName,
		_nftDescription,
		_imageURL,
	) => {
		try {
			const { ethereum } = window;

			const accounts = await ethereum.request({method: "eth_accounts"})

			if (ethereum) {
				const provider =
					new ethers.providers.Web3Provider(
						ethereum,
					);
				const signer = provider.getSigner();
				const nftMintingContract =
					new ethers.Contract(
						contractAddress,
						contractABI,
						signer,
					);

				let nftTxn =
					await nftMintingContract.makeAnNFT(
						_nftName,
						_nftDescription,
						_imageURL,
					);

				console.log("Mining...please wait.");
				await nftTxn.wait();

				console.log(
					`Mined, see transaction: https://rinkeby.etherscan.io/tx/${nftTxn.hash}`,
				);

				console.log(
					`Check Your NFT At: https://rinkeby.rarible.com/collection/${accounts[0]}/owned`,
				);

				alert(`Check Your NFT At: https://rinkeby.rarible.com/collection/${accounts[0]}/owned`)
			}
		} catch (error) {}
	};

	const [nftName, setNftName] = useState("");
	const [nftDescription, setNftDescription] =
		useState("");
	const [text, setText] = useState("");

	function handleUpload(e) {
		e.preventDefault();
		makeNFT(nftName, nftDescription, text);
	}

	const handleTextChange = (e) => {
		const NftText = e.target.value;
		setText(NftText);
	};

	const handleNameChange = (e) => {
		const NftName = e.target.value;
		setNftName(NftName);
	};

	const handleDescriptionChange = (e) => {
		const NftDescription = e.target.value;
		setNftDescription(NftDescription);
	};

	return (
		<MainContent>
			<h1>Want To Make An NFT ?</h1>
			<form>
				<div>
					<div className="subgroup">
						<input
							placeholder="Name Your NFT"
							type={"text"}
							onChange={(e) =>
								handleNameChange(e)
							}
						></input>
					</div>
					<div className="subgroup">
						<input
							placeholder="Add Some Description"
							type={"text"}
							onChange={(e) =>
								handleDescriptionChange(e)
							}
						></input>
					</div>
				</div>
				<div className="subgroup">
						<input
							placeholder="Some Text For Your NFT"
							type={"text"}
							onChange={(e) =>
								handleTextChange(e)
							}
						></input>
					</div>
				<div className="subgroup">
					<button
						onClick={(e) => handleUpload(e)}
					>
						{!props.account
							? "Connect Metamask"
							: "Make NFT"}
					</button>
				</div>
			</form>
		</MainContent>
	);
};

export default Main;
