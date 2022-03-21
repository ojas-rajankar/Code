import "./App.css";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import CommingSoon from "./pages/CommingSoon";
import Error from "./pages/Error";
import Web3Camp from "./pages/Web3Camp";
import Setup from "./pages/Setup";
import Solidity from "./pages/Solidity";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/setup" element={<Setup />} />
          <Route path="/solidity" element={<Solidity />} />
          <Route path="/commingsoon" element={<CommingSoon />} />
          <Route path="/web3camp" element={<Web3Camp />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
