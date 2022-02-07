import "./App.css";
import { useEffect, useState } from "react";

function App() {
	const checkIfWalletIsConnected = async () => {
		try {
			const { solana } = window;

			if (solana) {
				if (solana.isPhantom) {
					console.log("Phantom Wallet Found!");

					const response = await solana.connect({
						onlyIfTrusted: true,
					});
					console.log(
						"Connected with Public Key:",
						response.publicKey.toString(),
					);
					setWalletAddress(
						response.publicKey.toString(),
					);
				}
			} else {
				alert("Get a Phantom Wallet!");
			}
		} catch (error) {
			console.log(error);
		}
	};

	const connectWallet = async () => {
		const { solana } = window;

		if (solana) {
			const response = await solana.connect();
			console.log(
				"Connected with Public Key: ",
				response.publicKey.toString(),
			);
			setWalletAddress(response.publicKey.toString());
		}
	};

	const sendGIF = async () => {
		if (inputValue != "") {
			console.log("GIF Link: ", inputValue);
			setGifList([...gifList, inputValue])
			setInputValue("");
		} else {
			console.log("Please Enter An Link!");
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
    sendGIF()
	};

	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	const [walletAddress, setWalletAddress] = useState("");
	const [inputValue, setInputValue] = useState("");
	const [gifList, setGifList] = useState([]);

	const TEST_GIFS = [
		"https://i.giphy.com/media/eIG0HfouRQJQr1wBzz/giphy.webp",
		"https://media3.giphy.com/media/L71a8LW2UrKwPaWNYM/giphy.gif?cid=ecf05e47rr9qizx2msjucl1xyvuu47d7kf25tqt2lvo024uo&rid=giphy.gif&ct=g",
		"https://media4.giphy.com/media/AeFmQjHMtEySooOc8K/giphy.gif?cid=ecf05e47qdzhdma2y3ugn32lkgi972z9mpfzocjj6z1ro4ec&rid=giphy.gif&ct=g",
		"https://i.giphy.com/media/PAqjdPkJLDsmBRSYUp/giphy.webp",
	];

	useEffect(() => {
		const onLoad = async () => {
			await checkIfWalletIsConnected();
		};

		window.addEventListener("load", onLoad);
		return () =>
			window.removeEventListener("load", onLoad);
	}, []);

	useEffect(() => {
		if (walletAddress) {
			console.log("Fetching GIF list...");

			setGifList(TEST_GIFS);
		}
	}, []);

	return (
		<div className="App">
			<h1>GIF Store</h1>
			{!walletAddress ? (
				<button onClick={connectWallet}>
					Connect Wallet
				</button>
			) : (
				<div>
					<form onSubmit={(e) => handleSubmit(e)}>
						<input
							type={"text"}
							placeholder="Enter GIF Link!"
							value={inputValue}
							onChange={(e) =>
								handleChange(e)
							}
						/>
						<button type={"submit"}>
							Submit
						</button>
					</form>
					{TEST_GIFS.map((gif) => (
						<div key={gif}>
							<img src={gif} alt={gif} />
						</div>
					))}
				</div>
			)}
		</div>
	);
}

export default App;
