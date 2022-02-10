import React from "react";
import styled from "styled-components";
import logo from "./assets/logo.png";
import discord from "./assets/discord.png";
import twitter from "./assets/twitter.png";
import instagram from "./assets/instagram.png";

const Main = styled.div`
	position: fixed;
    width: 100vw;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
    z-index: 10;
    padding-top: 2vh;
`;

const Left = styled.div`
    img {
        height: calc(1.5rem + 1.2vw);
    }

    width: 5vw;
    margin-left: 1rem;
`;

const Right = styled.div`
	display: flex;
	justify-content: space-evenly;
    width: 20vw;
    margin-right: 1rem;

    img {
        height: calc(1.2rem + 1.2vw);
    }
`;

const Header = () => {
	return (
		<Main>
			<Left>
				<img src={logo} alt="Logo"/>
			</Left>
			<Right>
				<img src={discord} alt="Logo"/>
				<img src={instagram} alt="Logo"/>
				<img src={twitter} alt="Logo"/>
			</Right>
		</Main>
	);
};

export default Header;
