import React from "react";
import { lightTheme } from "./Themes";
import styled, { ThemeProvider } from "styled-components";
import { Design, Develope } from "./AllSvgs";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import ParticleComponent from "./ParticleComponent";


const Box = styled.div`
background-color: ${(props) => props.theme.body};
width: 100vw;
height: 100vh:
position: relative;
display: flex;
justify-content: space-evenly;
align-items: center;
`;

const Main = styled.div`
	border: 2px solid ${(props) => props.theme.text};
	color: ${(props) => props.theme.text};
	background-color: ${(props) => props.theme.body};
	padding: 2rem;
	margin-top: 20vh;
	margin-bottom: 15vh;
	width: 30vw;
	height: 60vh;
	z-index: 3;
	line-height: 1.5;
	cursor: pointer;

	font-family: "Ubuntu Moro", monospace;
	display: flex;
	flex-direction: column;
	justify-content: space-between;

	&:hover{
		color: ${(props) => props.theme.body};
		background-color ${(props) => props.theme.text};
	}
`;

const Title = styled.h2`
	display: flex;
	align-items: center;
	justify-content: space-evenly;
	font-size: calc(1em + 1vw);

	${Main}:hover &{
		&>*{
			fill:${props => props.theme.body};
		}
	}

	&>*:first-child{
		fill:${props => props.theme.text};
	}
`;

const Description = styled.div`
	color: ${props => props.theme.text};
	font-size: calc(0.2em + 1vw);
	padding: 0.5em 0;

	${Main}:hover &{
		color:${props => props.theme.body};
	}


	strong{
		margin-bottom: 1px;
		text-transform: uppercase;
	}

	ul, p{
		margin-left: 2rem;
	}

`;

function MySkillsPage() {
	return (
		<ThemeProvider theme={lightTheme}>
			<Box>
			<ParticleComponent theme='light'/>
			<LogoComponent />
			<PowerButton />
			<SocialIcons /> 
				<Main>
					<Title>
						<Design width={40} height={40} />{" "}
						Blockchain Developer
					</Title>
					<Description>
						I Love Developing Blockchain Apps From Scratch And I Am Also A Great Solidity Smart Contract
						Developer 
					</Description>
					<Description>
						<strong>I Love To Develope:</strong>
						<p>
							DApps, Smart Contracts, DAO, NFT
							Marketplace.
						</p>
					</Description>
					<Description>
						<strong>My Skills:</strong>
						<p>
							Solidity, Front-End, Ethereum.
						</p>
					</Description>
					<Description>
						<strong>Tools I Know:</strong>
						<p>
							Remix, Chai, Hard Hat, Alchemy, Meta
							Mask.
						</p>
					</Description>
				</Main>
				<Main>
					<Title>
						<Develope width={40} height={40} />{" "}
						Frontend Developer
					</Title>
					<Description>
						I Am Front End Developer Practicing
						For 4+ Years, I Have Also Started
						Working On Backend Development
					</Description>
					<Description>
						<strong>I Love To Develope:</strong>
						<p>
							E-Commerce Application, Bloackchain Applications, Educational Platforms
						</p>
					</Description>
					<Description>
						<strong>My Skills:</strong>
						<p>
							HTML, CSS, JS, React, Bootstrap, Tailwind CSS, Firebase etc.
						</p>
					</Description>
					<Description>
						<strong>Tools I Know:</strong>
						<p>
							VSCode, Github, Codepen.
						</p>
					</Description>
				</Main>
			</Box>
		</ThemeProvider>
	);
}

export default MySkillsPage;
