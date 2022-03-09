import React, { useState } from "react";
import styled from "styled-components";

const Main = styled.div`
	width: 80vw;
	height: auto;
	padding: calc(1.5rem + 1vh);
	display: flex;
	left: 0;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: calc(0.5rem);
	margin-left: calc(10vw - 1.5rem - 1vh);
	border: 0.5px solid rgba(0, 0, 0, 0.2);
	border-radius: 6px;
	background-color: rgba(0, 0, 0, 0.01);
	font-family: "Open Sans", sans-serif;

	button:hover {
		cursor: pointer;
		color: rgba(255, 255, 255, 0.6);
		background-color: rgba(0, 0, 0, 0.15);
	}

	a {
		text-decoration: none;
		color: skyblue;
	}
`;

const ProgressBar = styled.div`
	width: 80vw;
	height: auto;
	padding: calc(1.5rem + 1vh);
	margin-top: calc(0.5rem + 10vh);
	margin-left: calc(10vw - 1.5rem - 1vh);
	background-color: rgba(0, 0, 0, 0.01);

	div {
		background-color: rgba(0, 0, 0, 0.1);
		height: 30px;
		width: 100%;
		display: flex;
		left: 0;
		flex-direction: row;
		justify-content: left;
		align-items: center;
		text-align: center;
		padding: 0;
		border-radius: 20px;
	}

	div .green-bar {
		background: -webkit-linear-gradient(
			60deg,
			#e66465,
			#9198e5
		);
		color: white;
		font-weight: 600;
		font-size: 18px;
		padding-left: 20px;
		transition: all 10s ease;
	}

	div .plane {
		background-color: transparent;
		margin-left: -35px;
		font-size: 50px;
		width: 50px;
	}
`;

const Heading = styled.h2`
	width: 80%;
	text-align: left;
	font-weight: 800;
`;

const Content = styled.h3`
	width: 80%;
	text-align: left;
	font-weight: 400;
	line-height: 30px;
`;

const Code = styled.h3`
	width: 74%;
	text-align: left;
	font-weight: 400;
	background-color: lightgrey;
	color: rgba(0, 0, 0, 0.7);
	padding: 3%;
	line-height: 30px;
`;

const Next = styled.button`
	font-size: calc(0.6rem + 0.6vw);
	font: sans-serif, monospace;
	padding: 0.5rem calc(0.8rem + 0.6vw);
	font-weight: 600;
	border: none;
	color: white;
	background: -webkit-linear-gradient(
		60deg,
		#e66465,
		#9198e5
	);
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0.5rem calc(1rem + 1vw) 0rem calc(1rem + 1vw);
	transition: all 0.3s linear;
`;

const Back = styled.button`
	font-size: calc(0.6rem + 0.6vw);
	font: sans-serif, monospace;
	padding: 0.5rem calc(0.8rem + 0.6vw);
	font-weight: 600;
	border: none;
	color: white;
	background: -webkit-linear-gradient(
		60deg,
		#e66465,
		#9198e5
	);
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 0.5rem calc(1rem + 1vw) 0rem calc(1rem + 1vw);
	transition: all 0.3s linear;
`;

const Buttons = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
`

const Lesson1 = () => {
	const [currentPage, setCurrentPage] = useState(1);
	let progress = (currentPage / 12) * 100;
	let page = currentPage;
	const increment = () => {
		page++;
		console.log("You are on page number: ", page);
		setCurrentPage(page);
		window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};
	const decrement = () => {
		page--;
		console.log("You are on page number: ", page);
		setCurrentPage(page);
		window.scroll({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	};

	return (
		<div>
			<ProgressBar>
				<div>
					<div
						style={{ width: progress + "%" }}
						className="green-bar"
					>
						Progress
					</div>
					<div className="plane">🛫</div>
				</div>
			</ProgressBar>
			{currentPage === 1 ? (
				<Main>
					<Heading>
						Welcome To The World Of Web3 🚀
					</Heading>
					<Content>
						In this lesson you are going to
						learn about various concepts
						involved in the creation of a dapp
						and at the end create a small
						decentralized application yourself.
						There's a lot of great content
						comming up, I am working on some of
						the most detailed courses available
						for free in the domain of Web3 just
						for you so stay tuned...
					</Content>
					<Content>
						We are also going to integrate
						concepts such as DAO, Tokens, NFTs
						and all that cool Web3 stuff with
						this portal for our community to
						grow and show their support.
					</Content>
					<Heading>
						🦸🏻‍♂️ What Are We Going To Make ?
					</Heading>
					<Content>
						We are going to make a super cool
						dapp where people will be able to
						drop the name of thier favourite
						Marvel or DC character and also vote
						in a poll for Marvel vs DC
					</Content>
					<Content>
						We will store all the data on
						blockchain so that people can stay
						anonymous while sharing their
						opinions and also the data is
						immutable so that we all know the
						poll is fair.
					</Content>
					<Heading>
						What's At The End ??? 🧐
					</Heading>
					<Content>
						At the end of this lesson we are
						going to have a quiz to prove that
						you have learnt all the concepts
						taught in this course and through
						that you can earn a cool NFT
						certificate. So make sure you have
						your MetaMask wallet connected!
					</Content>

					<Content>
						The answers of the quiz will be
						stored in a smart contract on
						blockchain, completely immutable,
						this is just one practical
						application of blockchain and you
						will get to learn more as we go.
					</Content>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="270"
						height="270"
						fill="none"
					>
						<path
							fill="url(#B)"
							d="M0 0h270v270H0z"
						/>
						<defs>
							<filter
								id="A"
								color-interpolation-filters="sRGB"
								filterUnits="userSpaceOnUse"
								height="270"
								width="270"
							>
								<feDropShadow
									dx="0"
									dy="1"
									stdDeviation="2"
									flood-opacity=".225"
									width="200%"
									height="200%"
								/>
							</filter>
						</defs>

						<defs>
							<linearGradient
								id="B"
								x1="0"
								y1="0"
								x2="270"
								y2="270"
								gradientUnits="userSpaceOnUse"
							>
								<stop stop-color="#e66465" />
								<stop
									offset="1"
									stop-color="#9198e5"
									stop-opacity=".99"
								/>
							</linearGradient>
						</defs>
						<text
							x="32.5"
							y="140"
							font-size="28"
							fill="#fff"
							filter="url(#A)"
							font-family="Plus Jakarta Sans,DejaVu Sans,Noto Color Emoji,Apple Color Emoji,sans-serif"
							font-weight="bold"
						>
							Web3 Beginner
						</text>
						<text
							x="32.5"
							y="165"
							font-size="14"
							fill="#fff"
							filter="url(#A)"
							font-family="Plus Jakarta Sans,DejaVu Sans,Noto Color Emoji,Apple Color Emoji,sans-serif"
							font-weight="bold"
						>
							The Coding Corporation ©️
						</text>
					</svg>
					<Heading>
						Have Some Suggestions, Queries,
						Issues?
					</Heading>
					<Content>
						Always feel free to contact me on
						twitter{" "}
						<a href="https://twitter.com/OjasRajankar">
							@OjasRajankar
						</a>{" "}
						incase you have anything to share or
						ask... I love to hear your feedbacks
						and suggestions.
					</Content>
					<Next onClick={increment}>Next</Next>
				</Main>
			) : (
				""
			)}
			{currentPage === 2 ? (
				<Main>
					<Heading>
						Starting Your Engine 🚘
					</Heading>
					<Content>
						Before we start the real fun let's
						make sure you have node installed in
						your system, it will help us install
						various modules which will ease our
						journey a lot. You can download node
						from here: <a href="">Node</a>, to
						confirm node has been installed run
						the below command and confirm if you
						get similar output from it.
					</Content>
					<Code>
						Command:
						<br />
						{">"} node --version
						<br />
						<br />
						Output:
						<br />
						{">"} version info
					</Code>
					<Content>
						Now, let's setup our folder
						structure for the project. Head on
						to your vs code terminal and create
						the folders in following way, I have
						named our project battle-o-fans
						where Marvel Fans and DC Fans will
						have a fight to prove who is best,
						feel free to change it if you have
						more funky idea in your mind.
					</Content>
					<Content>
						So let me explain what we are doing
						here, he have first created our main
						project folder then in it we have
						created two sub folders; frontend
						and backend. As the name suggest we
						will be keeping our backend files
						(smart contracts) and frontend files
						(html, css, js) seperated for
						convinience in development.
					</Content>
					<Code>
						{">"} mkdir battle-o-fans
						<br />
						{">"} cd battle-o-fans
						<br />
						{">"} mkdir frontend
						<br />
						{">"} mkdir backend
					</Code>
					<Content>
						We are going to build both frontend
						and backend from scratch, if you
						loose balance at any point and need
						a helping hand feel free to contact
						me on twitter{" "}
						<a href="https://twitter.com/OjasRajankar">
							@OjasRajankar
						</a>{" "}
						or if you wanna take a sneak peak at
						the final code, it will be available
						for you <a href="">here</a>, you can
						also clone it and make your
						customization but I won't suggest
						doing that instead follow along and
						make it from scrath with everyone.
					</Content>
					<Buttons>
					<Back onClick={decrement}>Back</Back>
					<Next onClick={increment}>Next</Next>
					</Buttons>
				</Main>
			) : (
				""
			)}
			{currentPage === 3 ? (
				<Main>
					<Heading>
						On The Way To Solidity...
					</Heading>
					<Content>
						I am very exicet for this module In
						this module we will create our first
						smart contract in solidity
						programming language, before that
					</Content>
					<Buttons>
					<Back onClick={decrement}>Back</Back>
					<Next onClick={increment}>Next</Next>
					</Buttons>
				</Main>
			) : (
				""
			)}
			{currentPage === 4 ? (
				<Main>
					<Heading>
						More Content Comming Soon...
					</Heading>
					<Back onClick={decrement}>Back</Back>
				</Main>
			) : (
				""
			)}
		</div>
	);
};

export default Lesson1;
