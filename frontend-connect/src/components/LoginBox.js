import React from "react";
import styled from "styled-components";
import backgroundvideo from "./assets/bg1.mp4"

const Main = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	width: 100vw;
	height: 100vh;
  background: black;
  color: white;
  background-size: contain;
  font-family: 'IBM Plex Sans Thai Looped', sans-serif;
  
  video {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
  }

  form {

    position: absolute;
    top: 45vh;
    padding-left: 5vw;
    max-width: 850px;
    right: 5vw;
    text-align: right;

    h1 {
      font-size: calc(1rem + 1.5vh + 1.5vw);
      margin-bottom: 3vh;
      margin-left: 10vh;
    }

    h3 {
      font-size: calc(0.8rem + 0.5vh + 0.5vw);
      margin-left: 3vh;
    }

    button {
      font-size: calc(0.8rem + 0.5vh + 0.5vw);
      margin-top: 5vh;
      padding: 1vh 1.5vh;
      font-weight: 600;
      color: white;
      background: linear-gradient(to right, #8e2de2, #4a00e0);
      border: none;
      border-radius: 5px;
      transition: all linear 0.3s;
      cursor: pointer;
    }

    button:hover {
      margin-top: 4.5vh;
      padding: 1.5vh 2vh;
    }
  }
`;

const LoginBox = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    props.connectWallet()
  }

	return (
		<Main>
      <video autoPlay loop muted>
        <source src={backgroundvideo} type="video/mp4"/>
      </video>
			<form onSubmit={e => handleSubmit(e)}>
        <h1>Welcome To The Web3 World</h1>
        <h3>A Fun And Interactive Way To Master Blockchain, Earn Amazing NFTs And Crypto Tokens When You Complete Modules 🤯</h3>
				<button>{props.warning}</button>
			</form>
		</Main>
	);
};

export default LoginBox;
