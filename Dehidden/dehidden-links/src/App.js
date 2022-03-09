import "./App.css";
import { useState } from "react";
import styled from "styled-components";
import searchImg from "./assets/search.png";
import saveImg from "./assets/save.png";
import deleteImg from "./assets/delete.png";
import closeImg from "./assets/close.png";
import linkImg from "./assets/link.png";
import { QRCode } from "react-qrcode-logo";

const Main = styled.div`
	position: absolute;
	width: 100vw;
	min-height: 100vh;
	top: 0;
	right: 0;
	background-color: black;
	color: white;

	h1 {
		width: 100%;
		font-family: "Fredoka", sans-serif;
	}

	span {
		background-image: linear-gradient(
			90deg,
			#faa94d,
			#f27038
		);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}
`;

const Header = styled.div`
	width: 100vw;
	min-height: 10vh;
	top: 0;
	right: 0;

	svg {
		padding-top: 2rem;
	}
`;

const Form = styled.form`
	margin-top: 12vh;
	display: flex;
	flex-direction: column;
	width: 70vw;
	height: 70vh;
	margin-left: 15vw;
	background-color: white;
	color: black;

	h1 {
		font-size: 4vh;
		margin-bottom: 0;
	}

	.closeImg {
		height: 5vh;
		position: absolute;
		right: 16vw;
		top: 14vh;
	}

	input:focus {
		outline: none;
	}

	#dataDisplay {
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
		margin: 5vh 0;
		height: 40vh;
	}

	#textInputs {
		display: flex;
		flex-direction: column;
		height: 40vh;
		justify-content: space-around;
	}

	#qrCode {
		display: flex;
		flex-direction: column;
		height: 40vh;
		justify-content: space-evenly;
	}

	.disabled {
		cursor: not-allowed;
	}

	label {
		width: 20vw;
		height: auto;
		padding: 1vh;
		text-align: center;
		box-sizing: content-box;
		border-width: 2px;
		border-style: solid;
		border-image: linear-gradient(
			90deg,
			#ee7c65,
			#f6c39d 18%,
			#ead899 36%,
			#87d5ff 57%,
			#9281f5 76%,
			#ff85a9
		);
		border-image-slice: 1;
		background-color: black;
		color: white;
		font-size: 2.5vh;
		font-family: "Fredoka", sans-serif;
		cursor: pointer;
	}

	#qrCodeInput {
		visibility: hidden;
		height: 0;
	}
`;

const Input = styled.input`
	width: 20vw;
	height: 5vh;
	padding: 0.5vh;
	text-align: center;
	box-sizing: content-box;
	border-width: 5px;
	border-style: solid;
	border-image: linear-gradient(
		90deg,
		#ee7c65,
		#f6c39d 18%,
		#ead899 36%,
		#87d5ff 57%,
		#9281f5 76%,
		#ff85a9
	);
	border-image-slice: 1;
	color: black;
	font-size: 2.5vh;
	font-family: "Fredoka", sans-serif;
	transition: all 0.3s linear;
	cursor: pointer;
`;

const Button = styled.button`
	width: auto;
	height: 5vh;
	padding: 0.5vh 1vw;
	text-align: center;
	box-sizing: content-box;
	border-radius: 2.5vh;
	border: none;
	background: linear-gradient(
		90deg,
		#ee7c65,
		#f6c39d 20%,
		#ead899 40%,
		#87d5ff 60%,
		#9281f5 80%,
		#ff85a9
	);
	font-size: 2.5vh;
	font-weight: 600;
	font-family: "Fredoka", sans-serif;
	transition: all 0.3s linear;
	cursor: pointer;
	margin: 0 5vh;

	img {
		height: 2.5vh;
		margin-bottom: -0.5vh;
	}
`;

const LinksDisplay = styled.div`
	width: 80vw;
	background-color: white;
	margin-top: 5vh;

	margin-left: 10vw;
	border-radius: 30px;

	p {
		width: 16vw;
		padding: 0.5vh 0;
		text-align: center;
		font-weight: 500;
		box-sizing: content-box;
		border-width: 1px;
		border-style: solid;
		border-image: linear-gradient(
			90deg,
			#faa94d,
			#f27038
		);
		border-image-slice: 1;
		padding: 1vh 0;
	}

	#linkSearch {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 5vh;
		margin-bottom: 3vh;
	}

	.searchImg {
		box-sizing: content-box;
		border-width: 3px;
		border-style: solid;
		border-image: linear-gradient(
			90deg,
			#ee7c65,
			#f6c39d 18%,
			#ead899 36%,
			#87d5ff 57%,
			#9281f5 76%,
			#ff85a9
		);
		border-image-slice: 1;
		padding: 1vh;
		height: 2vh;
		cursor: pointer;
		margin-bottom: -2vh;
		border-left: none;
	}

	.buttonImg {
		padding: 1vh;
		height: 2vh;
		cursor: pointer;
		border: none;
		margin-top: -0.5vh;
	}

	input {
		width: 65%;
		margin-top: 2vh;
		border-width: 3px;
		height: 3vh;
	}

	button {
		display: flex;
		flex-direction: row;
		box-sizing: content-box;
		border-width: 3px;
		border-style: solid;
		border-image: linear-gradient(
			90deg,
			#ee7c65,
			#f6c39d 18%,
			#ead899 36%,
			#87d5ff 57%,
			#9281f5 76%,
			#ff85a9
		);
		border-image-slice: 1;
		height: 3vh;
		cursor: pointer;
		background: none;
		margin-bottom: -2vh;
		font-weight: 400;
	}

	input:focus {
		outline: none;
	}

	.listHeader {
		display: flex;
		color: black;
		width: 90%;
		margin: 0 5%;
		font-size: 2.5vh;
		font-family: "Fredoka", sans-serif;
	}

	.listDetails {
		display: flex;
		color: rgba(0, 0, 0, 0.6);
		width: 90%;
		margin: -4vh 5%;
		font-size: 2vh;
		font-family: "Fredoka", sans-serif;
	}

	.linkName {
		width: 20%;
	}
	.linkURL {
		width: 25%;
	}
	.destinationURL {
		width: 40%;
	}
	.qrCode {
		width: 10%;
		cursor: pointer;
	}
	.edit {
		width: 5%;
		cursor: pointer;
	}
`;

const Modal = styled.div`
	z-index: 3;
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
`;

function App() {
	const [linksArray, setLinksArray] = useState([]);
	const [nameSearched, setNameSearched] = useState("");
	const [linkName, setLinkName] = useState("");
	const [linkURL, setLinkURL] = useState("");
	const [destinationURL, setDestinationURL] = useState(
		"www.dehidden.com",
	);

	const handleSearchValueChange = (e) => {
		setNameSearched(e.target.value);
	};
	const [linkNameFound, setLinkNameFound] =
		useState(false);
	const [editClicked, setEditClicked] = useState(false);

	const search = () => {
		for (let i = 0; i < linksArray.length; i++) {
			if (linksArray[i] === nameSearched) {
				setLinkName("");
				setLinkURL("");
				setDestinationURL("");
				setLinkNameFound(true);
			}
		}
		if (linkNameFound === false) {
			alert(
				"Link With Name '" +
					nameSearched +
					"' Not Found!",
			);
		}
	};

	const handleDestinationChange = (e) => {
		setDestinationURL(e.target.value);
	};

	const linkEditClicked = () => {
		setEditClicked(true);
	};

	const linkEditClosed = () => {
		setEditClicked(false);
	};

	return (
		<div className="App">
			<Main>
				<Header>
					<svg
						width="241"
						height="59"
						viewBox="0 0 241 59"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0)">
							<path
								d="M42.9766 29.5453C42.9766 25.5687 43.0327 21.5886 42.924 17.612C42.903 16.8994 42.3632 15.9052 41.7674 15.5454C33.1808 10.3787 24.552 5.27969 15.8952 0.230589C15.3765 -0.0722855 14.4057 -0.0829752 13.8905 0.212773C9.61119 2.6429 5.37042 5.14429 1.17521 7.72407C0.614451 8.0697 0.050183 8.96764 0.050183 9.61614C-0.0129028 22.7965 -0.0129028 35.9769 0.050183 49.1573C0.0536878 49.813 0.568889 50.7323 1.12264 51.0744C5.31434 53.6577 9.59016 56.0985 13.7994 58.6533C14.637 59.1629 15.2153 59.0881 16.0109 58.6142C24.566 53.508 33.1352 48.4269 41.7289 43.3813C42.6647 42.8326 43.0221 42.2126 43.0046 41.1258C42.945 37.2633 42.9766 33.4043 42.9766 29.5453ZM35.4729 37.1421C35.4659 37.6659 35.0628 38.4106 34.6247 38.6743C28.3442 42.4585 22.0356 46.1963 15.699 49.8842C15.2644 50.1372 14.4548 50.1052 13.9957 49.8593C12.1837 48.9008 10.4734 47.7427 8.6649 46.7807C7.69058 46.2604 7.41721 45.587 7.42422 44.518C7.47328 39.4689 7.44524 34.4162 7.44524 29.3671C7.44875 29.3671 7.44875 29.3671 7.45225 29.3671C7.45225 24.318 7.40669 19.2654 7.50482 14.2163C7.51884 13.5108 8.0726 12.5772 8.65789 12.1639C10.3367 10.988 12.1311 9.9689 13.9501 9.02465C14.4513 8.76453 15.331 8.75028 15.8111 9.02821C22.1057 12.6698 28.3687 16.3685 34.6037 20.117C35.0453 20.3807 35.4589 21.1147 35.4659 21.6349C35.5325 26.8052 35.536 31.9754 35.4729 37.1421Z"
								fill="white"
							/>
							<path
								d="M22.4305 21.6357C24.3091 22.7475 25.9213 23.6703 27.4949 24.6609C27.7858 24.8427 28.0697 25.2987 28.0767 25.6337C28.1258 28.1244 28.1258 30.6187 28.0837 33.1129C28.0767 33.4621 27.8454 33.9538 27.5685 34.1284C25.9528 35.1475 24.2915 36.0918 22.427 37.1928C22.4305 31.9228 22.4305 26.9663 22.4305 21.6357Z"
								fill="white"
							/>
						</g>
						<path
							d="M84.6378 16.543C86.4024 16.543 88.0431 16.8834 89.6219 17.5334C91.2007 18.1834 92.5318 19.112 93.6772 20.2882C94.8226 21.4644 95.7513 22.8263 96.4014 24.3739C97.0515 25.9215 97.3921 27.593 97.3921 29.3573C97.3921 31.1525 97.0515 32.793 96.4014 34.3406C95.7513 35.8882 94.8226 37.2501 93.6772 38.4263C92.5318 39.6025 91.1697 40.5001 89.6219 41.1811C88.074 41.862 86.4024 42.1715 84.6378 42.1715H75.0103V16.543H84.6378ZM84.6378 37.9001C85.8142 37.9001 86.8977 37.6834 87.9502 37.2192C89.0027 36.7549 89.8695 36.1668 90.6435 35.393C91.4174 34.6192 92.0365 33.7215 92.4699 32.6692C92.9033 31.6477 93.151 30.5334 93.151 29.3573C93.151 28.1811 92.9343 27.0668 92.4699 26.0454C92.0365 24.993 91.4174 24.0954 90.6435 23.3525C89.8695 22.6096 88.9718 21.9596 87.9502 21.5263C86.9286 21.093 85.7832 20.8453 84.6378 20.8453H79.2823V37.9311L84.6378 37.9001Z"
							fill="white"
						/>
						<path
							d="M105.41 34.7111C105.75 35.7635 106.369 36.5992 107.236 37.2802C108.103 37.9611 109.125 38.2707 110.301 38.2707C111.075 38.2707 111.787 38.1159 112.437 37.8064C113.087 37.4968 113.644 37.0945 114.14 36.5683L117.7 38.9516C116.833 40.0659 115.749 40.9326 114.48 41.5826C113.211 42.2326 111.818 42.5421 110.301 42.5421C109.001 42.5421 107.793 42.2945 106.648 41.7992C105.503 41.304 104.481 40.623 103.645 39.7873C102.809 38.9516 102.128 37.9302 101.633 36.7849C101.138 35.6397 100.859 34.4016 100.859 33.1016C100.859 31.8016 101.107 30.5945 101.602 29.4492C102.097 28.304 102.778 27.2826 103.614 26.4468C104.45 25.6111 105.472 24.9302 106.617 24.4349C107.763 23.9397 109.001 23.6611 110.301 23.6611C111.601 23.6611 112.839 23.9088 113.985 24.404C115.13 24.8992 116.121 25.5802 116.988 26.4159C117.854 27.2826 118.505 28.273 119 29.4183C119.495 30.5635 119.743 31.8016 119.743 33.0707C119.743 33.3492 119.743 33.5968 119.712 33.8754C119.681 34.123 119.65 34.4016 119.588 34.6802H105.41V34.7111ZM115.13 31.3373C114.79 30.3468 114.171 29.5421 113.304 28.8921C112.437 28.2421 111.415 27.9326 110.301 27.9326C109.187 27.9326 108.196 28.2421 107.298 28.8921C106.431 29.5111 105.781 30.3468 105.41 31.3373H115.13Z"
							fill="white"
						/>
						<path
							d="M136.088 31.8334C136.088 31.2763 135.995 30.7811 135.778 30.3168C135.562 29.8525 135.283 29.4192 134.943 29.0787C134.602 28.7073 134.169 28.4287 133.704 28.243C133.24 28.0573 132.714 27.9334 132.156 27.9334C131.599 27.9334 131.104 28.0263 130.64 28.243C130.175 28.4287 129.773 28.7073 129.401 29.0787C129.061 29.4501 128.782 29.8525 128.565 30.3168C128.349 30.7811 128.256 31.3073 128.256 31.8334V42.1715H123.984V16.543H128.256V24.9311C129.308 24.0954 130.609 23.662 132.156 23.662C133.302 23.662 134.354 23.8787 135.345 24.312C136.336 24.7453 137.202 25.3334 137.945 26.0763C138.688 26.8192 139.277 27.6858 139.71 28.6763C140.143 29.6668 140.36 30.7192 140.36 31.8334V42.1715H136.088V31.8334Z"
							fill="white"
						/>
						<path
							d="M149.554 16.543V20.8144H145.282V16.543H149.554ZM145.344 24.0025H149.585L149.554 42.1715H145.282L145.344 24.0025Z"
							fill="white"
						/>
						<path
							d="M163.392 42.543C162.092 42.543 160.885 42.2954 159.739 41.8001C158.594 41.3049 157.572 40.6239 156.736 39.7882C155.9 38.9525 155.219 37.9311 154.724 36.7858C154.229 35.6406 153.95 34.4025 153.95 33.1025C153.95 31.8025 154.198 30.5644 154.693 29.4192C155.188 28.2739 155.87 27.2834 156.705 26.4168C157.541 25.5501 158.563 24.9001 159.708 24.4049C160.854 23.9096 162.092 23.662 163.361 23.662C164.445 23.662 165.435 23.8477 166.271 24.1882C167.138 24.5287 167.881 25.0239 168.531 25.643V16.543H172.803V42.1715H168.531V40.562C167.881 41.1811 167.138 41.6763 166.271 42.0168C165.435 42.3573 164.476 42.543 163.392 42.543ZM163.392 27.9334C162.68 27.9334 161.999 28.0573 161.38 28.3358C160.761 28.6144 160.203 28.9858 159.739 29.4192C159.275 29.8834 158.903 30.4096 158.656 31.0596C158.408 31.7096 158.253 32.3596 158.253 33.0715C158.253 33.7525 158.377 34.4334 158.656 35.0525C158.934 35.6715 159.306 36.2287 159.739 36.693C160.203 37.1573 160.73 37.5287 161.38 37.8073C161.999 38.0858 162.68 38.2096 163.392 38.2096C164.104 38.2096 164.785 38.0858 165.404 37.8073C166.023 37.5287 166.581 37.1573 167.045 36.693C167.509 36.2287 167.881 35.7334 168.128 35.0834C168.407 34.4644 168.531 33.7834 168.531 33.1025C168.531 32.3906 168.407 31.7096 168.128 31.0906C167.85 30.4715 167.478 29.9144 167.045 29.4501C166.612 28.9858 166.054 28.6144 165.404 28.3668C164.754 28.1192 164.104 27.9334 163.392 27.9334Z"
							fill="white"
						/>
						<path
							d="M186.672 42.543C185.372 42.543 184.164 42.2954 183.019 41.8001C181.873 41.3049 180.852 40.6239 180.016 39.7882C179.18 38.9525 178.499 37.9311 178.004 36.7858C177.509 35.6406 177.261 34.4025 177.261 33.1334C177.261 31.8334 177.509 30.5954 178.004 29.4501C178.499 28.3049 179.18 27.3144 180.016 26.4477C180.852 25.5811 181.873 24.9311 183.019 24.4358C184.164 23.9406 185.403 23.693 186.672 23.693C187.755 23.693 188.746 23.8787 189.582 24.2192C190.448 24.5596 191.191 25.0549 191.842 25.6739V16.543H196.114V42.1715H191.842V40.562C191.191 41.1811 190.448 41.6763 189.582 42.0168C188.746 42.3573 187.755 42.543 186.672 42.543ZM186.672 27.9334C185.96 27.9334 185.279 28.0573 184.66 28.3358C184.04 28.6144 183.483 28.9858 183.019 29.4192C182.554 29.8834 182.183 30.4096 181.935 31.0596C181.688 31.7096 181.502 32.3906 181.502 33.1025C181.502 33.7834 181.626 34.4644 181.904 35.0834C182.183 35.7025 182.554 36.2596 182.988 36.7239C183.452 37.1882 183.979 37.5596 184.629 37.8382C185.248 38.1168 185.929 38.2406 186.641 38.2406C187.353 38.2406 188.034 38.1168 188.653 37.8382C189.272 37.5596 189.829 37.1882 190.294 36.7239C190.758 36.2596 191.13 35.7025 191.377 35.0834C191.656 34.4644 191.78 33.7834 191.78 33.1025C191.78 32.3906 191.656 31.7096 191.377 31.0906C191.099 30.4715 190.727 29.9144 190.294 29.4501C189.86 28.9858 189.303 28.6144 188.653 28.3668C188.003 28.1192 187.384 27.9334 186.672 27.9334Z"
							fill="white"
						/>
						<path
							d="M205.06 34.7111C205.401 35.7635 206.02 36.5992 206.887 37.2802C207.753 37.9611 208.775 38.2707 209.951 38.2707C210.725 38.2707 211.437 38.1159 212.087 37.8064C212.737 37.4968 213.295 37.0945 213.79 36.5683L217.35 38.9516C216.483 40.0659 215.4 40.9326 214.131 41.5826C212.861 42.2326 211.468 42.5421 209.982 42.5421C208.682 42.5421 207.475 42.2945 206.329 41.7992C205.184 41.304 204.162 40.623 203.327 39.7873C202.491 38.9516 201.81 37.9302 201.314 36.7849C200.819 35.6397 200.571 34.4016 200.571 33.1326C200.571 31.8326 200.819 30.6254 201.314 29.4802C201.81 28.3349 202.491 27.3135 203.327 26.4778C204.162 25.6421 205.184 24.9611 206.329 24.4659C207.475 23.9707 208.682 23.6611 209.982 23.6611C211.282 23.6611 212.521 23.9088 213.666 24.404C214.812 24.8992 215.802 25.5802 216.669 26.4159C217.536 27.2826 218.186 28.273 218.681 29.4183C219.176 30.5635 219.424 31.8016 219.424 33.0707C219.424 33.3492 219.424 33.5968 219.393 33.8754C219.362 34.123 219.331 34.4016 219.269 34.6802H205.06V34.7111ZM214.812 31.3373C214.471 30.3468 213.852 29.5421 212.985 28.8921C212.118 28.2421 211.097 27.9326 209.982 27.9326C208.868 27.9326 207.877 28.2421 206.979 28.8921C206.113 29.5111 205.463 30.3468 205.091 31.3373H214.812Z"
							fill="white"
						/>
						<path
							d="M235.738 31.8338C235.738 31.2767 235.645 30.7815 235.429 30.3172C235.212 29.8529 234.933 29.4196 234.593 29.0791C234.252 28.7076 233.819 28.4291 233.355 28.2434C232.89 28.0576 232.364 27.9338 231.807 27.9338C231.25 27.9338 230.754 28.0267 230.29 28.2434C229.826 28.4291 229.423 28.7076 229.052 29.0791C228.711 29.4505 228.432 29.8529 228.216 30.3172C227.999 30.7815 227.906 31.3076 227.906 31.8338V42.1719H223.634V24.0029H227.906V25.4267C228.402 24.8695 228.99 24.4672 229.64 24.1576C230.29 23.8481 231.033 23.6934 231.807 23.6934C232.952 23.6934 234.005 23.91 234.995 24.3434C235.986 24.7767 236.853 25.3648 237.596 26.1076C238.339 26.8505 238.927 27.7172 239.36 28.7076C239.794 29.6981 240.01 30.7505 240.01 31.8648V42.2029H235.738V31.8338Z"
							fill="white"
						/>
						<defs>
							<clipPath id="clip0">
								<rect
									width="43"
									height="59"
									fill="white"
								/>
							</clipPath>
						</defs>
					</svg>
					<h1>
						Manage <span>Any Link</span> With
						Ease
					</h1>
				</Header>

				<LinksDisplay>
					<div id="linkSearch">
						<Input
							type={"search"}
							placeholder="Search By Link Name"
							onChange={(e) =>
								handleSearchValueChange(e)
							}
						></Input>
						<img
						className="searchImg"
							onClick={search}
							src={searchImg}
						></img>
						<Button>Add Link <img className="buttonImg"
							src={linkImg}
						></img></Button>
					</div>
					<div className="listHeader">
						<p className="linkName">
							Link Name
						</p>
						<p className="linkURL">Link URL</p>
						<p className="destinationURL">
							Destination URL
						</p>
						<p className="qrCode">QR Code</p>
						<p className="edit">Edit</p>
					</div>
					<div className="listDetails">
						<p className="linkName">Demo</p>
						<p className="linkURL">
							demo.dehidden.com
						</p>
						<p className="destinationURL">
							https://www.dehidden.com
						</p>
						<p onClick={linkEditClicked} className="qrCode">View</p>
						<p
							onClick={linkEditClicked}
							className="edit"
						>
							Click
						</p>
					</div>
					<div className="listDetails">
						<p className="linkName">Demo</p>
						<p className="linkURL">
							demo.dehidden.com
						</p>
						<p className="destinationURL">
							https://www.dehidden.com
						</p>
						<p onClick={linkEditClicked} className="qrCode">View</p>
						<p
							onClick={linkEditClicked}
							className="edit"
						>
							Click
						</p>
					</div>
					<div className="listDetails">
						<p className="linkName">Demo</p>
						<p className="linkURL">
							demo.dehidden.com
						</p>
						<p className="destinationURL">
							https://www.dehidden.com
						</p>
						<p onClick={linkEditClicked} className="qrCode">View</p>
						<p
							onClick={linkEditClicked}
							className="edit"
						>
							Click
						</p>
					</div>
					<div className="listDetails">
						<p className="linkName">Demo</p>
						<p className="linkURL">
							demo.dehidden.com
						</p>
						<p className="destinationURL">
							https://www.dehidden.com
						</p>
						<p onClick={linkEditClicked} className="qrCode">View</p>
						<p
							onClick={linkEditClicked}
							className="edit"
						>
							Click
						</p>
					</div>
					<div className="listDetails">
						<p className="linkName">Demo</p>
						<p className="linkURL">
							demo.dehidden.com
						</p>
						<p className="destinationURL">
							https://www.dehidden.com
						</p>
						<p onClick={linkEditClicked} className="qrCode">View</p>
						<p
							onClick={linkEditClicked}
							className="edit"
						>
							Click
						</p>
					</div>
					<div className="listDetails">
						<p className="linkName">Demo</p>
						<p className="linkURL">
							demo.dehidden.com
						</p>
						<p className="destinationURL">
							https://www.dehidden.com
						</p>
						<p onClick={linkEditClicked} className="qrCode">View</p>
						<p
							onClick={linkEditClicked}
							className="edit"
						>
							Click
						</p>
					</div>
					<div className="listDetails">
						<p className="linkName">Demo</p>
						<p className="linkURL">
							demo.dehidden.com
						</p>
						<p className="destinationURL">
							https://www.dehidden.com
						</p>
						<p onClick={linkEditClicked} className="qrCode">View</p>
						<p
							onClick={linkEditClicked}
							className="edit"
						>
							Click
						</p>
					</div>
					<div className="listDetails">
						<p className="linkName">Demo</p>
						<p className="linkURL">
							demo.dehidden.com
						</p>
						<p className="destinationURL">
							https://www.dehidden.com
						</p>
						<p onClick={linkEditClicked} className="qrCode">View</p>
						<p
							onClick={linkEditClicked}
							className="edit"
						>
							Click
						</p>
					</div>
					<div className="listDetails">
						<p className="linkName">Demo</p>
						<p className="linkURL">
							demo.dehidden.com
						</p>
						<p className="destinationURL">
							https://www.dehidden.com
						</p>
						<p onClick={linkEditClicked} className="qrCode">View</p>
						<p
							onClick={linkEditClicked}
							className="edit"
						>
							Click
						</p>
					</div>
					<div className="listDetails">
						<p className="linkName">Demo</p>
						<p className="linkURL">
							demo.dehidden.com
						</p>
						<p className="destinationURL">
							https://www.dehidden.com
						</p>
						<p onClick={linkEditClicked} className="qrCode">View</p>
						<p
							onClick={linkEditClicked}
							className="edit"
						>
							Click
						</p>
					</div>
				</LinksDisplay>

				{editClicked ? (
					<Modal>
						<Form>
							<h1>
								Modify <span>Your</span>{" "}
								Link
							</h1>
							<img
								className="closeImg"
								src={closeImg}
								onClick={linkEditClosed}
							></img>
							<div id="dataDisplay">
								<div id="textInputs">
									<Input
										className="disabled"
										type={"text"}
										placeholder="Link Name"
										value={linkName}
										disabled
									></Input>
									<Input
										className="disabled"
										type={"url"}
										placeholder="Link URL"
										value={linkURL}
										disabled
									></Input>
									<Input
										type={"url"}
										placeholder="Destination URL"
										required
										onChange={(e) =>
											handleDestinationChange(
												e,
											)
										}
									></Input>
								</div>
								<div id="qrCode">
									<QRCode
										value={
											destinationURL
										}
										logoImage={`data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC45OTY1ODIiIHk9IjAuOTYwOTM4IiB3aWR0aD0iMzQuMTg5MSIgaGVpZ2h0PSIzNC4xODkxIiBmaWxsPSIjMDcwNDBDIi8+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF82MF8yMTY3KSI+CjxwYXRoIGQ9Ik0yNS4wNzYgMTguMTAxNEMyNS4wNzYgMTYuODI1MiAyNS4wOTQgMTUuNTQ3OSAyNS4wNTkgMTQuMjcxOEMyNS4wNTIyIDE0LjA0MzEgMjQuODc4IDEzLjcyNDEgMjQuNjg1OCAxMy42MDg2QzIxLjkxNSAxMS45NTA1IDE5LjEzMDYgMTAuMzE0MiAxNi4zMzcyIDguNjkzODRDMTYuMTY5OCA4LjU5NjY0IDE1Ljg1NjYgOC41OTMyMSAxNS42OTAzIDguNjg4MTJDMTQuMzA5NCA5LjQ2Nzk4IDEyLjk0MSAxMC4yNzA3IDExLjU4NzMgMTEuMDk4NkMxMS40MDYzIDExLjIwOTUgMTEuMjI0MyAxMS40OTc3IDExLjIyNDMgMTEuNzA1OEMxMS4yMDM5IDE1LjkzNTYgMTEuMjAzOSAyMC4xNjU0IDExLjIyNDMgMjQuMzk1MkMxMS4yMjU0IDI0LjYwNTYgMTEuMzkxNiAyNC45MDA2IDExLjU3MDMgMjUuMDEwNEMxMi45MjI5IDI1LjgzOTQgMTQuMzAyNyAyNi42MjI3IDE1LjY2MDkgMjcuNDQyNkMxNS45MzEyIDI3LjYwNjEgMTYuMTE3OCAyNy41ODIxIDE2LjM3NDUgMjcuNDNDMTkuMTM1MSAyNS43OTE0IDIxLjkwMDMgMjQuMTYwNyAyNC42NzMzIDIyLjU0MTZDMjQuOTc1MyAyMi4zNjU1IDI1LjA5MDcgMjIuMTY2NSAyNS4wODUgMjEuODE3N0MyNS4wNjU4IDIwLjU3ODIgMjUuMDc2IDE5LjMzOTggMjUuMDc2IDE4LjEwMTRaTTIyLjY1NDYgMjAuNTM5M0MyMi42NTI0IDIwLjcwNzQgMjIuNTIyMyAyMC45NDY0IDIyLjM4MDkgMjEuMDMxQzIwLjM1NDMgMjIuMjQ1NCAxOC4zMTg2IDIzLjQ0NDkgMTYuMjczOSAyNC42Mjg0QzE2LjEzMzYgMjQuNzA5NiAxNS44NzI0IDI0LjY5OTMgMTUuNzI0MiAyNC42MjA0QzE1LjEzOTYgMjQuMzEyOCAxNC41ODc3IDIzLjk0MTIgMTQuMDA0MSAyMy42MzI1QzEzLjY4OTcgMjMuNDY1NSAxMy42MDE1IDIzLjI0OTQgMTMuNjAzNyAyMi45MDYzQzEzLjYxOTYgMjEuMjg2IDEzLjYxMDUgMTkuNjY0NSAxMy42MTA1IDE4LjA0NDJDMTMuNjExNyAxOC4wNDQyIDEzLjYxMTcgMTguMDQ0MiAxMy42MTI4IDE4LjA0NDJDMTMuNjEyOCAxNi40MjM5IDEzLjU5ODEgMTQuODAyNCAxMy42Mjk4IDEzLjE4MjFDMTMuNjM0MyAxMi45NTU2IDEzLjgxMyAxMi42NTYgMTQuMDAxOCAxMi41MjM0QzE0LjU0MzUgMTIuMTQ2IDE1LjEyMjYgMTEuODE5IDE1LjcwOTUgMTEuNTE2QzE1Ljg3MTMgMTEuNDMyNSAxNi4xNTUxIDExLjQyNzkgMTYuMzEwMSAxMS41MTcxQzE4LjM0MTIgMTIuNjg1OCAyMC4zNjIyIDEzLjg3MjcgMjIuMzc0MSAxNS4wNzU3QzIyLjUxNjYgMTUuMTYwMyAyMi42NTAxIDE1LjM5NTkgMjIuNjUyNCAxNS41NjI4QzIyLjY3MzggMTcuMjIyIDIyLjY3NSAxOC44ODEyIDIyLjY1NDYgMjAuNTM5M1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOC40NDU1IDE1LjU2NEMxOS4wNTE2IDE1LjkyMDcgMTkuNTcxOSAxNi4yMTY5IDIwLjA3OTcgMTYuNTM0OEMyMC4xNzM1IDE2LjU5MzEgMjAuMjY1MSAxNi43Mzk1IDIwLjI2NzQgMTYuODQ3QzIwLjI4MzIgMTcuNjQ2MyAyMC4yODMyIDE4LjQ0NjcgMjAuMjY5NyAxOS4yNDcyQzIwLjI2NzQgMTkuMzU5MiAyMC4xOTI4IDE5LjUxNyAyMC4xMDM0IDE5LjU3MzFDMTkuNTgyMSAxOS45MDAxIDE5LjA0NiAyMC4yMDMxIDE4LjQ0NDMgMjAuNTU2NUMxOC40NDU1IDE4Ljg2NTIgMTguNDQ1NSAxNy4yNzQ2IDE4LjQ0NTUgMTUuNTY0WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF82MF8yMTY3Ij4KPHJlY3Qgd2lkdGg9IjEzLjg3NTQiIGhlaWdodD0iMTguOTM0IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMjA4NSA4LjYyMDEyKSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=`}
										size="300"
										logoHeight={80}
										logoWidth={80}
										qrStyle={"dots"}
									></QRCode>
								</div>
							</div>
							<div>
								<Button type="submit">
									Save Changes{" "}
									<img src={saveImg} />
								</Button>
								<Button>
									Remove Link{" "}
									<img src={deleteImg} />
								</Button>
							</div>
						</Form>
					</Modal>
				) : (
					""
				)}
			</Main>
		</div>
	);
}

export default App;
