import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NFT1 from "./pages/NFT1";
import NFT2 from "./pages/NFT2";

function App() {
  return (
    <div className="App">
            <BrowserRouter>
        <Routes>
          <Route path="/" element={<div />} />
          <Route path="/1" element={<NFT1 />} />
          <Route path="/2" element={<NFT2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
