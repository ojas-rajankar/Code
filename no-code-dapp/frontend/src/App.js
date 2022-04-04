import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./sections/Header";
import Footer from "./sections/Footer";
import Home from "./pages/Home";
import VotingDapp from "./pages/VotingDapp";
import styled from "styled-components";

const Main = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  min-height: 100vh;
  background-color: #1a1a1d;
`;

function App() {
  return (
    <div className="App">
      <Main>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/votingdapp" element={<VotingDapp />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </Main>
    </div>
  );
}

export default App;
