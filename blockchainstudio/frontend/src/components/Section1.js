import React from "react";
import styled from "styled-components";
import backgroundvideo from "./assets/backgroundvideo.mp4";

const Main = styled.div`
	z-index: -1;
	width: 100vw;
	height: 100vh;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: black;
	background-size: contain;

	video {
		width: 100vw;
		height: 100vh;
		object-fit: cover;
		z-index: -1;
	}
`;

const Content = styled.div`
	position: absolute;
	top: 50vh;
	color: white;
	margin-left: calc(2vw + 2vh);

	button {
		position: absolute;
		left: 0;
		text-align: center;
		font-family: "IBM Plex Sans Thai Looped", sans-serif;
		font-size: calc(1vw + 1vh);
		padding: calc(0.5vw + 0.5vh);
		color: white;
		border: none;
		border-radius: 5px;
		background: linear-gradient(
			30deg,
			#8877ff 23%,
			#321fb7 100%
		);
		margin-top: calc(2vw + 2vh);
		transition: all ease 1s;
	}

	button:hover {
		margin-top: calc(1.5vw + 1.5vh);
		background: linear-gradient(
			30deg,
			#8877ff 23%,
			#321fb7 100%
		);
	}
`;

const MainText = styled.div`
	font-family: "Rowdies", cursive;
	font-size: calc(3vw + 4vh);
	margin-bottom: calc(2vw + 2vh);

	p {
		margin: 0;
		max-width: 60vw;
		text-align: left;
		line-height: calc(4vw + 4vh);
	}
`;

const SubText = styled.div`
	font-family: "IBM Plex Sans Thai Looped", sans-serif;
	font-size: calc(1.5vw + 1.5vh);

	p {
		margin: 0;
		max-width: 85vw;
		text-align: left;
		line-height: calc(2vw + 2vh);
	}
`;

const Section1 = () => {
	return (
		<Main>
			<div>
				<video autoPlay muted loop>
					<source
						src={backgroundvideo}
						type="video/mp4"
					/>
				</video>
			</div>
			<Content>
				<MainText>
					<p>MINT MONEY</p>
				</MainText>
				<SubText>
					<p>
						An NFT Game in which players match
						Gems to win massive MATIC prixe
						pools.
					</p>
				</SubText>
				<button>PUBLIC SALE IS LIVE</button>
			</Content>
		</Main>
	);
};

export default Section1;
