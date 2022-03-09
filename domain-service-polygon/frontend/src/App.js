import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import abiObject from "./components/Domains.json";

function App() {
	const [currentAccount, setCurrentAccount] =
		useState("");
	const [buttonText, setButtonText] = useState(
		"Connect Wallet",
	);
	const [connected, setConnected] = useState("");
	const [domain, setDomain] = useState("");
	const [description, setDescription] = useState("");
  const [network, setNetwork] = useState('');

	const contractAddress =
		"0x948D704C6F0A5Fd4c0d4Cc24e1AE12eBD766aC5a";
	const contractAbi = abiObject.abi;

	const mint = async (domain, description) => {
		console.log("Domain: ", domain);
		console.log("Description: ", description);

		try {
			const { ethereum } = window;
			if (ethereum) {
				setButtonText("Connecting...");

				const provider =
					new ethers.providers.Web3Provider(
						ethereum,
					);
				const signer = provider.getSigner();
				const contract = new ethers.Contract(
					contractAddress,
					contractAbi,
					signer,
				);

				setButtonText("Pay The Fee");
				let tx = await contract.register(domain, {
					value: ethers.utils.parseEther("0.3"),
				});
				const receipt = await tx.wait();

				if (receipt.status === 1) {
					setButtonText("Domain Minted");
					console.log(
						"Domain Minted! https://mumbai.polygonscan.com/tx/" +
							tx.hash,
					);

					tx = contract.setRecord(
						domain,
						description,
					);
					await tx.wait();

					console.log(
						"Record Set! https://mumbai.polygonscan.com/tx/" +
							tx.hash,
					);

					setDomain("");
					setDescription("");
				} else {
					alert("Transaction Failed");
					setButtonText("Domain Not Available");
				}
			}
		} catch (error) {
			console.log(error.message);
		}
	};

	const withdraw = async () => {
		try {
			const { ethereum } = window;
			if (ethereum) {
				const provider =
					new ethers.providers.Web3Provider(
						ethereum,
					);
				const signer = provider.getSigner();
				const contract = new ethers.Contract(
					contractAddress,
					contractAbi,
					signer,
				);
				const tx = contract.withdraw();
			} else {
			}
		} catch (error) {
			console.log(error.message);
		}
	};

	const connectWallet = async () => {
		const { ethereum } = window;

		if (ethereum) {
			setButtonText("Connecting...");
			const accounts = await ethereum.request({
				method: "eth_requestAccounts",
			});

			if (accounts.length !== 0) {
				const account = accounts[0];
				setButtonText("Mint");
				console.log("Connected To: ", account);
				setConnected("connected");
			} else {
				console.log("Please authorize an account");
			}
		} else {
			console.log("Make sure you have MetaMask");
			setButtonText("Download MetaMask");
			alert(
				"Please Download MetaMask To Proceed...(https://metamask.io/)",
			);
		}
	};

	const checkIfWalletIsConnected = async () => {
		const { ethereum } = window;
		if (!ethereum) {
			console.log("Make sure you have MetaMask");
			setButtonText("Download MetaMask");
			return;
		} else {
			console.log(
				"We have the ethereumn object",
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
			setConnected("connected");
			setButtonText("Mint");
		} else {
			console.log("No authorized accoutn found");
		}

    const chainId = await ethereum.request({ method: 'eth_chainId' });
		setNetwork(chainId);

		ethereum.on('chainChanged', handleChainChanged);
		
		// Reload the page when they change networks
		function handleChainChanged(_chainId) {
			window.location.reload();
		}
	};

  const switchNetwork = async () => {
    if (window.ethereum) {
      try {
        // Try to switch to the Mumbai testnet
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x13881' }], // Check networks.js for hexadecimal network ids
        });
      } catch (error) {
        // This error code means that the chain we want has not been added to MetaMask
        // In this case we ask the user to add it to their MetaMask
        if (error.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [
                {	
                  chainId: '0x13881',
                  chainName: 'Polygon Mumbai Testnet',
                  rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
                  nativeCurrency: {
                      name: "Mumbai Matic",
                      symbol: "MATIC",
                      decimals: 18
                  },
                  blockExplorerUrls: ["https://mumbai.polygonscan.com/"]
                },
              ],
            });
          } catch (error) {
            console.log(error);
          }
        }
        console.log(error);
      }
    } else {
      // If window.ethereum is not found then MetaMask is not installed
      alert('MetaMask is not installed. Please install it to use this app: https://metamask.io/download.html');
    } 
  }

	useEffect(() => {
		checkIfWalletIsConnected();
	}, []);

	return (
		<div className="App">
			<Header withdraw={withdraw} />
			<Main
				buttonText={buttonText}
				connectWallet={connectWallet}
				connected={connected}
				domain={domain}
				description={description}
				setDomain={setDomain}
				setDescription={setDescription}
				mint={mint}
			/>
		</div>
	);
}

export default App;
