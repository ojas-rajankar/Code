import React from "react";
import styled from "styled-components";

const MainContainer = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	widht: 100vw;
	height: 100vh;
	background-color: black;
	color: white;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	button {
		background-image: linear-gradient(
			to right,
			#fc5c7d,
			#6a82fb
		);
        font-weight: 500;
	}

	button:hover {
		background-image: linear-gradient(
			to left,
			#fc5c7d,
			#6a82fb
		);
        font-weight: 800;
	}

	input:focus {
		outline: none;
	}

	div {
		display: flex;
		width: 480px;
		align-items: center;
		height: 3rem;
		background-color: white;
	}

	div p {
		align-items: center;
		width: 80px;
		background-color: white;
		color: black;
		font-family: "IBM Plex Sans Thai Looped", sans-serif;
		font-weight: 500;
		cursor: pointer;
		font-size: 1.4rem;
	}

    form {
        display: flex;
        flex-direction: column;
    }
`;

const Button = styled.button`
	margin-top: 7vh;
	height: 3rem;
	width: 480px;
	border-radius: 10px;
	color: white;
	font-family: "IBM Plex Sans Thai Looped", sans-serif;
	border: none;
	cursor: pointer;
	font-size: 1.3rem;
`;

const DomainInput = styled.input`
	height: 3rem;
	width: 400px;
	color: black;
	font-family: "IBM Plex Sans Thai Looped", sans-serif;
	font-weight: 500;
	border: none;
	transition: all 1s linear;
	cursor: pointer;
	padding: 0px 0px 0px 20px;
	font-size: 1.4rem;
`;

const InfoInput = styled.input`
	margin-top: 7vh;
	height: 3rem;
	width: 460px;
	color: black;
	font-family: "IBM Plex Sans Thai Looped", sans-serif;
	font-weight: 500;
	border: none;
	transition: all 1s linear;
	cursor: pointer;
	padding: 0px 0px 0px 20px;
	font-size: 1.4rem;
`;

const Main = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const domain = props.domain;
		const description = props.description;
		props.mint(domain, description);
	};

	const handleDomainChange = (e) => {
		const value = e.target.value;
		props.setDomain(value);
		console.log(value);
	};

	const handleDescriptionChange = (e) => {
		const value = e.target.value;
		props.setDescription(value);
		console.log(value);
	};

	return (
		<div>
			{!props.connected ? (
				<MainContainer>
					<iframe
						src="https://giphy.com/embed/QNFhOolVeCzPQ2Mx85"
						width="480"
						height="270"
						frameBorder="0"
					></iframe>
					<Button onClick={props.connectWallet}>
						{props.buttonText}
					</Button>
				</MainContainer>
			) : (
				<MainContainer>
					<form onSubmit={handleSubmit}>
						<div>
							<DomainInput
								placeholder={"Domain"}
								type={"text"}
								onChange={(e) =>
									handleDomainChange(e)
								}
								required
							/>
							<p>.dev</p>
						</div>
						<InfoInput
							placeholder={"Description..."}
							type={"text"}
							onChange={(e) =>
								handleDescriptionChange(e)
							}
							required
						/>
						<Button
							onClick={props.connectWallet}
						>
							{props.buttonText}
						</Button>
					</form>
				</MainContainer>
			)}
		</div>
	);
};

export default Main;
