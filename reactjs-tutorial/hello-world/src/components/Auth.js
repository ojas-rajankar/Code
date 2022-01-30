import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	position: absolute;
	z-index: 1;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

const AuthDiv = styled.div`
	position: absolute;
	width: calc(15rem + 30vw);
	height: auto;
	padding-top: calc(1.5rem + 1vh);
	padding-bottom: calc(1.5rem + 1vh);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: calc(2rem + 5vh);
	margin-left: calc((100vw - 15rem - 30vw)/2);
	border: 0.5px solid rgba(0, 0, 0, 0.2);
	border-radius: 5px;

	background-color: white;

	form {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		font-size: calc(0.8rem + 0.5vw);
		font-family: "Open Sans", sans-serif;
		font-weight: 750;
		background-color: white;
	}

	form div {
		display: flex;
		justify-content: space-between;
	}

	input{
		width: calc(10rem + 30vw);
		height: calc(1.5rem + 2vh);
		margin: calc(0.5rem + 1vh) auto;
		text-align: center;
		font-size: calc(0.8rem + 0.5vw);
		font-family: "Open Sans", sans-serif;
		font-weight: 400;
		border: none;
		color: black;
		background-color: rgba(0, 0, 0, 0.05);
		border-radius: 5px;
		padding: 0.8rem calc(0.8rem + 0.6vw)
		cursor: pointer;
	}

	h2 {
		font-size: calc(1.2rem + 0.5vw);
		font-family: "Open Sans", sans-serif;
		font-weight: 600;
	}


	button{
		font-size: calc(0.8rem + 0.5vw);
		font-family: "Open Sans", sans-serif;
		padding: 0.5rem calc(0.8rem + 0.6vw);
		font-weight: 600;
		border: none;
		color: black;
		background-color: rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0.5rem calc(1rem + 1vw) 0rem calc(1rem + 1vw);
		transition: all 0.3s linear;
	}

	button:hover {
		color: black;
		background-color: rgba(0, 0, 0, 0.15);
	}
`;

const WelcomeDiv = styled.div`
	top: calc(1.5rem + 1vh);
	width: 80vw;
	height: auto;
	padding-top: calc(0.5rem + 1vh);
	padding-bottom: calc(0.5rem + 1vh);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: calc(2rem + 5vh);
	margin-left: 10vw;
	border-radius: 5px;
	background-color: transparent;
	font-family: "Open Sans", sans-serif;

	h2 {
		font-size: calc(1.2rem + 0.5vw);
		font-weight: 600;
	}

	button {
		font-size: calc(0.8rem + 0.5vw);
		font: sans-serif, monospace;
		padding: 0.5rem calc(0.8rem + 0.6vw);
		height: calc(2rem + 2vh);
		font-weight: 600;
		border: none;
		color: black;
		background-color: rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0.5rem calc(1rem + 1vw) 0rem
			calc(1rem + 1vw);
		transition: all 0.3s linear;
	}

	button:hover {
		color: black;
		background-color: rgba(0, 0, 0, 0.15);
	}
`;

const MainDiv = styled.div`
	width: calc(60vw + 5rem);
	height: auto;
	padding-top: calc(1.5rem + 1vh);
	padding-bottom: calc(1.5rem + 1vh);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: calc(0.5rem + 5vh);
	margin-left: calc(100vw / 2 - 60vw / 2 - 5rem / 2);
	border: 0.5px solid rgba(0, 0, 0, 0.2);
	border-radius: 6px;
	background-color: white;

	img {
		width: 60vw;
		height: calc(10vw + 10vh);
	}

	p {
		width: 60vw;
		text-align: justify;
		margin: 1rem auto;
	}

	button {
		font-size: calc(0.6rem + 0.6vw);
		font: sans-serif, monospace;
		padding: 0.5rem calc(0.8rem + 0.6vw);
		font-weight: 600;
		border: none;
		color: white;
		background: -webkit-linear-gradient(
			60deg,
			#e66465,
			#9198e5
		);
		border-radius: 5px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 0.5rem calc(1rem + 1vw) 0rem
			calc(1rem + 1vw);
		transition: all 0.3s linear;
	}

	button:hover {
		color: rgba(255, 255, 255, 0.6);
		background-color: rgba(0, 0, 0, 0.15);
	}
`;

const SuperDiv = styled.div`
	position: absolute;
	top: 0;
	width: 100vw;
	background-color: rgba(0, 0, 0, 0.02);
	font-family: "Open Sans", sans-serif;
`;

const Auth = (props) => {
	const [email, setEmail] = useState("Email ID ✉️");
	const [password, setPassword] = useState("Password 🔒");

	const signin = (event) => {
		event.preventDefault();
		props.signin(email, password);
	};

	const register = (event) => {
		event.preventDefault();
		props.register(email, password);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	const logout = (event) => {
		event.preventDefault();
		props.logout();
	};

	const getName = (emailid) => {
		emailid = String(emailid);
		const nameid = emailid.split("@")[0];
		return (
			nameid.charAt(0).toUpperCase() + nameid.slice(1)
		);
	};

	return (
		<Container>
			{!props.user ? (
				<AuthDiv>
					<form onSubmit={handleSubmit}>
						<h2>Getting Started With The Coding Corporation 🚀</h2>
						<input
							placeholder={email}
							onChange={(event) =>
								setEmail(event.target.value)
							}
							type="email"
							required
						></input>

						<input
							placeholder={password}
							onChange={(event) =>
								setPassword(
									event.target.value,
								)
							}
							type="password"
							minLength={8}
							required
						></input>
						<div>
							{" "}
							<button
								type="submit"
								onClick={signin}
							>
								Log In
							</button>
							<button
								type="submit"
								onClick={register}
							>
								Register
							</button>
						</div>
					</form>
				</AuthDiv>
			) : (
				<SuperDiv>
					{" "}
					<WelcomeDiv>
						<h2>
							Welcome,{" "}
							{!getName(props.user.email)
								? "User"
								: getName(props.user.email)}
							! ✌️
						</h2>
						<button
							type="submit"
							onClick={logout}
						>
							Log Out 🙈
						</button>
					</WelcomeDiv>
					<MainDiv>
						<p>
							<strong>
								Master Blockchain: Learn To
								Build And Deploy Apps Over
								Ethereum 🚀
							</strong>
						</p>
						<p>
							In this module you will get
							complete knowledge of what
							blockchain is and how does it
							work. Then, we will move on to
							writing some smart contracts with
							solidity and deploy them on
							ethereum!!!
						</p>
						<button>Start Learning</button>
					</MainDiv>
					<MainDiv>
						<p>
							<strong>
								Master Blockchain: Learn To
								Build And Deploy Apps Over
								Ethereum 🚀
							</strong>
						</p>
						<p>
							In this module you will get
							complete knowledge of what
							blockchain is and how does it
							work. Then, we will move on to
							writing some smart contracts with
							solidity and deploy them on
							ethereum!!!
						</p>
						<button>Start Learning</button>
					</MainDiv>
					<MainDiv>
						<p>
							<strong>
								Master Blockchain: Learn To
								Build And Deploy Apps Over
								Ethereum 🚀
							</strong>
						</p>
						<p>
							In this module you will get
							complete knowledge of what
							blockchain is and how does it
							work. Then, we will move on to
							writing some smart contracts with
							solidity and deploy them on
							ethereum!!!
						</p>
						<button>Start Learning</button>
					</MainDiv>
					<MainDiv>
						<p>
							<strong>
								Master Blockchain: Learn To
								Build And Deploy Apps Over
								Ethereum 🚀
							</strong>
						</p>
						<p>
							In this module you will get
							complete knowledge of what
							blockchain is and how does it
							work. Then, we will move on to
							writing some smart contracts with
							solidity and deploy them on
							ethereum!!!
						</p>
						<button>Start Learning</button>
					</MainDiv>
					<MainDiv>
						<p>
							<strong>
								Master Blockchain: Learn To
								Build And Deploy Apps Over
								Ethereum 🚀
							</strong>
						</p>
						<p>
							In this module you will get
							complete knowledge of what
							blockchain is and how does it
							work. Then, we will move on to
							writing some smart contracts with
							solidity and deploy them on
							ethereum!!!
						</p>
						<button>Start Learning</button>
					</MainDiv>
				</SuperDiv>
			)}
		</Container>
	);
};

export default Auth;
