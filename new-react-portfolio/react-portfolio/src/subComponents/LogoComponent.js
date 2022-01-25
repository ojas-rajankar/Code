import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { darkTheme } from "../component/Themes";


const Logo = styled(motion.h1)`
display: inline-block;
color: ${(props) =>
	props.color === "dark"
		? "#FFF"
		: darkTheme.body};
font-family: 'Pacifico', cursive;
position:fixed;
top: 2rem;
left: 2rem;
z-index: 3;
`;

const LogoComponent = (props) => {
	return (<Logo
	
		initial={{
			y: -200,
			transition: {
				type: "spring",
				duration: 1.5,
				delay: 1,
			},
		}}
		animate={{
			y: 0,
			transition: {
				type: "spring",
				duration: 1.5,
				delay: 1,
			},
		}}

		color={props.theme}>OMR</Logo>)
};

export default LogoComponent;
