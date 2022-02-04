import './App.css';
import Background from './components/Background';
import Main from './components/Main';
import {useState, useEffect} from "react";

function App() {

  const [currentAccount, setCurrentAccount] = useState("");

  const checkIfWalletIsConnected = async () => {
    try {
      const {ethereum} =window;
      if (!ethereum) {
        console.log("Download Metamask")
        return
      } else {
        console.log(ethereum)
      }

      const accounts = await ethereum.request({method: "eth_accounts"})

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Connected Account: ", account);
        setCurrentAccount(account);
      } else {
        console.log("No Account Found");
      }

    } catch (error) {
      console.log(error);
    }
  }

  const connectWallet = async () => {
    try {
      const {ethereum} = window;

      const accounts = await ethereum.request({method: "eth_requestAccounts"})
      console.log("Connected: ", accounts[0]);
      setCurrentAccount(accounts[0]);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  return (
    <div className="App">
      <Background />
      <Main account={currentAccount} connect={connectWallet}/>
    </div>
  );
}

export default App;
