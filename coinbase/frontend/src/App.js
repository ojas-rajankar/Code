import "./App.css";
import logo from "./logo192.png";
import { useEffect, useState } from "react";

import axios from "axios";
import styled from "styled-components";

const Main = styled.div`
  table {
    width: 100vw;
    overflow-x: hidden;
  }

  tr {
    width: 100vw;
    overflow-x: hidden;
  }

  th {
    border: solid 1px black;
  }

  .data {
    padding: 1vh 1vw;
    border: solid 1px black;
  }
`;

function App() {
  // Connecting Wallet

  const [currentAccount, setCurrentAccount] = useState("");
  const [connectButtonText, setConnectButtonText] = useState("Connecting");

  const networks = {
    polygon: {
      chainId: `0x${Number(137).toString(16)}`,
      chainName: "Polygon Mainnet",
      nativeCurrency: {
        name: "MATIC",
        symbol: "MATIC",
        decimals: 18
      },
      rpcUrls: ["https://polygon-rpc.com/"],
      blockExplorerUrls: ["https://polygonscan.com/"]
    }
  };

  const checkIfWalletIsConnected = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        console.log("Download MetaMask");
        return;
      } else {
        console.log("Connect MetaMask");
        setConnectButtonText("Connect MetaMask");
      }

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Account Connected:", account);
        setConnectButtonText("Connected");
        setCurrentAccount(account);
      } else {
        console.log("No Accounts Connected");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      await ethereum.request({
        method: "wallet_addEthereumChain",
        params: [
          {
            ...networks["polygon"]
          }
        ]
      });

      const accounts = await ethereum.request({
        method: "eth_requestAccounts"
      });
      console.log("Connected:", accounts[0]);
      setConnectButtonText("Connected");
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);
    }
  };

  //Notification Setup

  const [notificationButtonText, setNotificationButtonText] = useState(
    "Allow Notifications"
  );

  const requestNotificationPermission = () => {
    const permissionStatus = Notification.permission;
    if (permissionStatus === "default") {
      var askPermission = Notification.requestPermission();
    } else if (permissionStatus === "granted") {
      setNotificationButtonText("Will Be Notified!");
    }
  };

  //Fetching Transactions

  const [fastGas, setFastGas] = useState("");
  const [proposedGas, setProposedGas] = useState("");
  const [safeGas, setSafeGas] = useState("");

  const [transactionList, setTransactionList] = useState([]);

  const getGasOracle = async () => {
    await axios
      .get(
        `https://api.polygonscan.com/api?module=gastracker&action=gasoracle&apikey=GGFU2AV98HT24I7HIGQZCCNQJVX7SGZTGS`
      )
      .then(function (response) {
        setFastGas(response.data.result.FastGasPrice);
        setProposedGas(response.data.result.ProposeGasPrice);
        setSafeGas(response.data.result.SafeGasPrice);
      });
  };

  const getTransactions = async () => {
    await axios
      .get(
        `https://api-testnet.polygonscan.com/api?module=account&action=txlist&address=0x47bF96eC1E4C0c8c4f8c1e67f5a14Be126EFa407&startblock=0&endblock=99999999&sort=asc&apikey=GGFU2AV98HT24I7HIGQZCCNQJVX7SGZTGS`
      )
      .then(function (response) {
        setTransactionList(response.data.result);
      });
  };

  const alertNewTransaction = async () => {
    for (let i = 0; i < transactionList.length; i++) {
      if (
        transactionList[i].timeStamp >
        Math.round(new Date().getTime() / 1000) - 5
      ) {
        alert(i + 1);
      }
    }
  };

  const storeDetails = async () => {
    const fcmToken = window.localStorage.get("fcm_token");
    const accountAddress = currentAccount;

    
  };

  useEffect(async () => {
    getTransactions();
    getGasOracle();
    requestNotificationPermission();
    checkIfWalletIsConnected();
    setInterval(function () {
      getTransactions();
      getGasOracle();
      alertNewTransaction();
    }, 5000);
  }, []);

  return (
    <div className="App">
      <Main>
        <h1>DehiddenScan</h1>
        <button onClick={requestNotificationPermission}>
          {notificationButtonText}
        </button>
        <button onClick={connectWallet}>{connectButtonText}</button>
        <table>
          <tr>
            <th>Safe Gas Price: {safeGas}</th>
            <th>Proposed Gas Price: {proposedGas}</th>
            <th>Fast Gas Price: {fastGas}</th>
          </tr>
        </table>
        <br />
        <br />
        <table>
          <tr>
            <th>Index</th>
            <th>Block Hash</th>
            <th>Transaction Hash</th>
            <th>Address To</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
          {transactionList.map((item, index) => (
            <tr key={index}>
              <td className="data">{index}</td>
              <td className="data">{item.blockHash}</td>
              <td className="data">{item.hash}</td>
              <td className="data">{item.to}</td>
              <td className="data">{item.timeStamp}</td>
              <td className="data">{item.isError ? "Passed" : "Failed"}</td>
            </tr>
          ))}
        </table>
      </Main>
    </div>
  );
}

export default App;
