import React from "react";
import styled from "styled-components";

const Main = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	width: auto;
	justify-content: space-between;
	height: auto;
	padding: 0.8rem;
	background-color: white;
	color: black;
	font-weight: 800;
	align-items: center;
	z-index: 10;
	border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
`;
const Logo = styled.span`
	font-size: calc(1rem + 1vw);
	background: -webkit-linear-gradient(
		60deg,
		#e66465,
		#9198e5
	);
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const Button = styled.button`
	font-size: calc(0.8rem + 0.5vw);
	font: sans-serif, monospace;
	padding: 0.5rem calc(0.8rem + 0.6vw);
	font-weight: 600;
	border: none;
	color: black;
	background-color: rgba(0, 0, 0, 0.1);
	border-radius: 5px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	transition: all 0.3s linear;

	img {
		height: 1.6rem;
		margin-right: 0.3rem;
	}

	&:hover {
		color: black;
		background-color: rgba(0, 0, 0, 0.15);
	}
`;

const Header = (props) => {

	const home = () => {
		props.setCurrentLesson("")
	}

	return (
		<Main>
			<Button onClick={home}>
				<img src="https://img.icons8.com/ios-glyphs/30/000000/menu-rounded.png" />
				Home
			</Button>
			<Logo> The Coding Corporation</Logo>
			<Button>
				<img src="https://img.icons8.com/ios-glyphs/30/000000/administrator-male.png" />
				Profile
			</Button>
		</Main>
	);
};

export default Header;
