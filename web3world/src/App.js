import "./App.css";
import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Wallet from "./pages/Wallet";
import Landing from "./pages/Landing";
import CommingSoon from "./pages/CommingSoon";
import Error from "./pages/Error";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/commingsoon" element={<CommingSoon />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
