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
		"0x8FE8C5C1B71F8961df4ee7d58bAAce2c6AAf997C";
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
					`Check You NFT At: https://rinkeby.rarible.com/collection/${signer}/owned`,
				);
			}
		} catch (error) {}
	};

	const [fileName, setFileName] = useState(
		"Click To Upload Image",
	);
	const [imageURL, setImageURL] = useState("");
	const [buttonText, setButtonText] = useState(
		"Connect Metamask",
	);

	const [nftName, setNftName] = useState("");
	const [nftDescription, setNftDescription] =
		useState("");
	const [file, setFile] = useState("");
	const [url, setURL] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		uploadFile(file)
		/*if (buttonText == "Make NFT") {
			if (
				nftName != "" &&
				nftDescription != "" &&
				file != ""
			) {
				makeNFT(nftName, nftDescription, file);
				console.log(imageURL);
			}
		} else {
			if (!props.account) {
				setButtonText("Connect Metamask");
				props.connect();
			} else {
				setButtonText("Make NFT");
			}
		}*/
	};

	const uploadFile = (file) => {
		const ref = storage.ref(`/images/${file.name}`);
		const uploadTask = ref.put(file);
		uploadTask.on("state_changed", console.log, console.error, () => {
		  ref
			.getDownloadURL()
			.then((url) => {
			  setFile(null);
			  setURL(url);
			});
		});

		console.log(url)
	};

	const handleFileChange = (e) => {
		const filePath = e.target.value.split("\\").pop();
		setFile(e.target.files[0]);
		setFileName(filePath);
		setImageURL(URL.createObjectURL(e.target.files[0]));
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
				<img src={imageURL} />
				<div>
					<div className="subgroup img">
						<label for="file">{fileName}</label>
						<input
							id="file"
							name="file"
							type={"file"}
							className="inputfile"
							accept="image/*"
							onChange={(e) =>
								handleFileChange(e)
							}
						></input>
					</div>
				</div>
				<div className="subgroup">
					<button
						onClick={(e) => handleSubmit(e)}
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
