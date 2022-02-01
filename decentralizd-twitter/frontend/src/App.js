import "./App.css";
import styled from "styled-components";
import Header from "./components/Header";
import Tweets from "./components/Tweets";
import TweetInput from "./components/TweetInput";

const Background = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	position: fixed;
	z-index: -1;
	background-color: black;
`;

const Main = styled.div`
	top: 0;
	position: absolute;
	left: 0;
	right: 0;
	height: auto;
`;

function App() {
	return (
		<div className="App">
			<Background />
			<Header />
			<Main>
        <TweetInput />
				<Tweets />
				<Tweets />
				<Tweets />
			</Main>
		</div>
	);
}

export default App;
