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
border: 0.5px solid rgba(0, 0, 0, 0.05);
border-radius: 5px;

background-color: white;

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: calc(0.8rem + 0.5vw);
	font: sans-serif, monospace;
    font-weight: 750;
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
	font: sans-serif, monospace;
    font-weight: 600;
	border: none;
    color: black;
	background-color: rgba(0, 0, 0, 0.05);
	border-radius: 5px;
    padding: 0.8rem calc(0.8rem + 0.6vw)
    cursor: pointer;
}

h2 {
    font-size: calc(1.2rem + 0.5vw);
	font: sans-serif, monospace;
	font-weight: 600;
}

input:focus {
    border: none;
}

button{

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
    margin: 0.5rem calc(1rem + 1vw) 0rem calc(1rem + 1vw);
}

button:hover {
    color: black;
    background-color: rgba(0, 0, 0, 0.15);
}
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

	return (
		<Container>
			{!props.user ? (
				<AuthDiv>
					<form onSubmit={handleSubmit}>
						<h2>Getting Started With TCC 🚀</h2>
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
				<AuthDiv>
                    <h2>👨🏻 user logged-in ✅ with: {props.user.email} ✌️</h2>
                    <button
								type="submit"
								onClick={logout}
							>
								Log Out 🙈
							</button>
                </AuthDiv>
			)}
		</Container>
	);
};

export default Auth;
