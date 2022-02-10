import React from "react";
import styled from "styled-components";
import cloud from "./assets/cloud.jpg";

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
	border-top: 5px solid #8877ff;

    #div1 {
        width: 100vw;
        height: 100vh;

        img {
            width: 100vw;
            height: 100vh;
        }
    }

    #div2 {
        position: absolute;
        top: 100vh;
        width: 100vw;
        height: 100vh;
    }

	iframe {
		width: 80vw;
		height: 60vh;
		object-fit: cover;
		z-index: -1;
	}

	h2 {
		color: white;
		font-size: calc(3vw + 4vh);
		margin-bottom: calc(2vw + 2vh);
		font-weight: 600;
	}
`;

const Section2 = () => {
	return (
		<Main>
            <div id="div1">
                <img src={cloud} alt="" />
            </div>
            <div id="div2">
            <h2>BETA PRESALE IS LIVE</h2>
			<iframe
				src="https://www.youtube.com/embed/gCYcHz2k5x0?rel=0&amp;autoplay=1&mute=1"
				title="YouTube video player"
				frameborder="0"
				mute="1"
				allow="accelerometer; gyroscope; picture-in-picture"
				allowfullscreen
			></iframe>
            </div>
		</Main>
	);
};

export default Section2;
