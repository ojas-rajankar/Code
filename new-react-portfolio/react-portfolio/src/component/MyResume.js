import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import resume from "../assets/Images/Ojas Rajankar Resume.png";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";

const Resume = styled(motion.img)`
	width: auto;
	border: 1px solid ${(props) => props.theme.text};
`;
const Box = styled(motion.div)`
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
	padding-top: 10rem;
	position: absolute;
	top: 0;
    background-color: ${props => props.theme.body}
`;

const MyResume = () => {
	return (
		<Box>
			<LogoComponent />
			<PowerButton />
			<SocialIcons />
			<Resume
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
				src={resume}
				width="100%"
			></Resume>
		</Box>
	);
};

export default MyResume;
