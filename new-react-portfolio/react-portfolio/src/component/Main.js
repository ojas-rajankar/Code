import { motion } from "framer-motion";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";

const MainContainer = styled.div`
	background: ${(props) => props.theme.body};
	color: ${(props) => props.theme.text};
	width: 100vw;
	height: 100vh;
	overflow: hidden;
	position: relative;
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-family: "Karla", sans-serif;
		font-weight: 500;
	}
`;

const Container = styled.div`
padding: 2rem;
}
`;

const Contact = styled(NavLink)`
	color: ${(props) => props.theme.text};
	position: absolute;
	top: 2rem;
	right: calc(1rem + 2vw);
	z-index: 3;
	text-decoration: none;
`;
const BLOG = styled(NavLink)`
	color: ${(props) => props.theme.text};
	position: absolute;
	top: 50%;
	right: calc(1rem + 2vw);
	transform: rotate(90deg) translate(-50%, -50%);
	z-index: 1;
	text-decoration: none;
`;

const RESUME = styled(NavLink)`
	color: ${(props) =>
		props.click ? props.theme.body : props.theme.text};
	position: absolute;
	top: 50%;
	left: 3rem;
	transform: translate(-50%, -50%) rotate(-90deg);
	z-index: 1;
	text-decoration: none;
`;

const BottomBar = styled.div`
	position: absolute;
	bottom: 1rem;
	left: 0;
	right: 0;
	width: 100%;

	display: flex;
	justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
	color: ${(props) =>
		props.click ? props.theme.body : props.theme.text};
	z-index: 1;
	text-decoration: none;
	transition: color 1s ease;
`;

const SKILLS = styled(NavLink)`
	color: ${(props) => props.theme.text};
	z-index: 1;
	text-decoration: none;
	transition: color 1s ease;
`;

const CERTIFICATION = styled(NavLink)`
	color: ${(props) => props.theme.text};
	z-index: 1;
	text-decoration: none;
	transition: color 1s ease;
`;

const WORK = styled(NavLink)`
	color: ${(props) =>
		props.click ? props.theme.body : props.theme.text};
	z-index: 1;
	text-decoration: none;
	transition: color 1s ease;
`;

const rotate = keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`;

const Center = styled.button`
	position: absolute;
	top: ${(props) => (props.click ? "85%" : "50%")};
	left: ${(props) => (props.click ? "92%" : "50%")};
	transform: translate(-50%, -50%);
	border: none;
	outline: none;
	background-color: transparent;
	cursor: pointer;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	transition: all 1s ease;
	font-family: "Source Sans Pro";
	font-weight: 600;

	& > :first-child {
		animation: ${rotate} infinite 1.5s linear;
	}

	& > :last-child {
		padding-top: 1rem;
	}
`;

const DarkDiv = styled.div`
	position: absolute;
	top: 0;
	bottom: 0;
	right: 50%;
	width: ${(props) => (props.click ? "50%" : "0%")};
	height: ${(props) => (props.click ? "100%" : "0%")};
	z-index: 1;
	background-color: #000;
	transition: height 0.5s ease, width 1s ease 0.5s;
`;

function Main() {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);

	return (
		<MainContainer>
			<DarkDiv click={click} />
			<Container>
				<PowerButton />
				<LogoComponent
					theme={click ? "dark" : "light"}
				/>
				<SocialIcons
					theme={click ? "dark" : "light"}
				/>

				<Contact
					target="_blank"
					to={{
						pathname:
							"mailto:ojasrajankar365@gmail.com",
					}}
				>
					<motion.h2
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
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						Contact
					</motion.h2>
				</Contact>

				<BLOG to="/projects">
					<motion.h2
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
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						Projects
					</motion.h2>
				</BLOG>

				<RESUME click={click} to="/resume">
					<motion.h2
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
						whileHover={{ scale: 1.1 }}
						whileTap={{ scale: 0.9 }}
					>
						Resume
					</motion.h2>
				</RESUME>

				<Center click={click}>
					<YinYang
						onClick={() => handleClick()}
						width={click ? 120 : 200}
						height={click ? 120 : 200}
						transition="width 1s ease, height 1s ease"
						fill="currenntColor"
					/>
					<span>
						{click
							? ""
							: "Click Above For An Introduction"}
					</span>
				</Center>

				<BottomBar>
					<ABOUT click={click} to="/about">
						<motion.h3
							initial={{
								y: 200,
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
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							About
						</motion.h3>
					</ABOUT>

					<WORK click={click} to="/work">
						<motion.h3
							initial={{
								y: 200,
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
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							Experience
						</motion.h3>
					</WORK>

					<CERTIFICATION to="/certifications">
						<motion.h3
							initial={{
								y: 200,
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
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							Certification
						</motion.h3>
					</CERTIFICATION>

					<SKILLS to="/skills">
						<motion.h3
							initial={{
								y: 200,
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
							whileHover={{ scale: 1.1 }}
							whileTap={{ scale: 0.9 }}
						>
							Skills
						</motion.h3>
					</SKILLS>
				</BottomBar>
			</Container>
			{click ? <Intro /> : null}
		</MainContainer>
	);
}

export default Main;
