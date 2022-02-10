import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import LoginBox from "./components/LoginBox";

function App() {
	const checkIfWalletIsConnected = async () => {
		const { ethereum } = window;

		if (!ethereum) {
			console.log("You Need Metamask To Proceed");
			setWarning("Get Metamask");
		} else {
		}
	};

	const connectWallet = async () => {
		const { ethereum } = window;

		if (!ethereum) {
			console.log("You Need Metamask To Proceed");
			setWarning("Get Metamask");
		} else {
			console.log("Metamask Found");
			console.log("Connecting To An Account...");
			setWarning("Connecting...");

			const accounts = await ethereum.request({
				method: "eth_requestAccounts",
			});
			setCurrentAccount(accounts[0]);
			setWarning("Account Connected");

			console.log("Connected To: ", accounts[0]);
		}
	};

	const [currentAccount, setCurrentAccount] =
		useState(null);
	const [warning, setWarning] = useState(
		"Connect Wallet",
	);

	useEffect(() => {
		checkIfWalletIsConnected();
	}, []);

	return (
		<div className="App">
			<Header />
			<LoginBox
				currentAccount={currentAccount}
				connectWallet={connectWallet}
				warning={warning}
			/>
		</div>
	);
}

export default App;
