import React from "react";
import styled from "styled-components";

const Top = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	z-index: 1;
	color: white;
	display: flex;
	align-items: center;
    flex-direction: column;
    justify-content: space-between;
    padding: 3vh;
    font-family: 'IBM Plex Sans Thai Looped', sans-serif;

	h1 {
		margin: 0;
		padding: 0;
        font-weight: 500;
	}

	h2 {
		margin: 0;
		padding: 0;
        font-weight: 400;
	}
`;

const Header = (props) => {
	return (
		<Top>
			<h1 onClick={props.withdraw}>👨🏽‍💻 Dev Name Service</h1>
			<h2>Only For True Developers</h2>
		</Top>
	);
};

export default Header;
