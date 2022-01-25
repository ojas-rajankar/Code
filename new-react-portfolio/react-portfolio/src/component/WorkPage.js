import React, { useEffect, useRef } from "react";
import styled, {

	ThemeProvider,
} from "styled-components";
import { darkTheme } from "./Themes";
import { Work } from "../data/WorkData"
import { motion } from "framer-motion";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import BigTitle from "../subComponents/BigTitlte";
import Card from "../subComponents/Card";
import { YinYang } from "./AllSvgs";

const Box = styled.div`
	background-color: ${(props) => props.theme.body};
	height: 400vh;
	position: relative;
    display: flex;
    align-items: center;
`;

const Main = styled(motion.ul)`
position: fixed;
top: 20rem;
left: calc(10rem + 15vw);
height: 40vh;
display: flex;

color: ${(props) => props.theme.text};
`
const Rotate = styled.span`
display: block;
position: fixed;
right: 1rem;
bottom: 1rem;
width: 80px;
height: 80px;
z-index: 1;
`

const container = {
	hidden: {opacity:0},
	show: {
		opacity:1,
		trnsition:{
			staggerChildren:0.5,
			duration: 0.5,
		}
	}
}

const WorkPage = () => {

    const ref = useRef(null);
    const yinyang = useRef(null);

    useEffect(() => {
        let element = ref.current;

        const rotate = () => {
            element.style.transform =`translateX(${-window.pageYOffset}px)`
            yinyang.current.style.transform =`rotate(${window.pageYOffset}deg)`
        }

        window.addEventListener("scroll", rotate);

		return () =>
			window.removeEventListener(
				"scroll",
				rotate,
			);
    }, [])

	return (
		<ThemeProvider theme={darkTheme}>
			<Box>
				<LogoComponent theme="dark" />
				<SocialIcons theme="dark" />
				<PowerButton />
                <Main ref={ref} variants={container} initial='hidden' animate='show'>
                    {Work.map( d => <Card key={d.id} data={d}/>)}
                </Main>

                <Rotate ref={yinyang}>
                    <YinYang width={80} height={80} fill={darkTheme.text} />
                </Rotate>

				<BigTitle
					text="Experience"
					top="10%"
					left="5%"
				/>
			</Box>
		</ThemeProvider>
	);
};

export default WorkPage;
