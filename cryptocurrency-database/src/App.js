import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import { motion } from "framer-motion"

function App() {
	const getData = () => {
		const options = {
			method: "GET",
			url: "https://coinranking1.p.rapidapi.com/coins",
			params: {
				referenceCurrencyUuid: "yhjMzLPhuIDl",
				timePeriod: "24h",
				tiers: "1",
				orderBy: "marketCap",
				orderDirection: "desc",
				limit: "50",
				offset: "0",
			},
			headers: {
				"x-rapidapi-key":
					"ce99237786msh082e9fb626b28c4p1c36a7jsn43693defeed1",
				"x-rapidapi-host":
					"coinranking1.p.rapidapi.com",
			},
		};

		axios
			.request(options)
			.then(function (response) {
				const apiData = response.data.data.coins;
				setData(apiData);
			})
			.catch(function (error) {
				console.error(error);
			});
	};

	

	const [data, setData] = useState([""]);

	const MainDiv = styled.div`
		width: 100vw;
		height: 100vh;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #f977ce;
background-image: linear-gradient(315deg, #f977ce 0%, #c373f2 74%);
		z-index: -1;
	`;

	const Main = styled.div`
		font-weight: 600;
		z-index: 1;
		font-family: "Raleway", sans-serif;
		margin-top: 5rem;

		ul {
			list-style: none;
			display: flex;
			flex-direction: column;
			justify-content: center;
			padding: 0;
		}

		img {
			height: calc(2rem + 2vw);
			width: calc(2rem + 2vw);
		}

		.items {
			width: 80vw;
			margin: 3rem auto 0 auto;
			padding: 1rem 0;
			background-color: rgba(255, 255, 255, 0.1);
			color: white;
			border-radius: 5px;
		}

		button {
			color: white;
			font-size: calc(1rem + 0.3vw);
			border: none;
			background-color: rgba(255, 255, 255, 0.1);
			padding: 0.5rem 1rem;
			font-weight: 700;
		}

		button:hover {
			background-color: rgba(255, 255, 255, 0.5);
		}
	`;

	const Top = styled.div`
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		margin: -1rem calc(2rem + 2vw);
		font-size: calc(1.2rem + 0.8vw);
		align-items: center;
		color: ${(props) => props.color};
	`;

	const Info = styled.div`
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin: -1rem 1rem;
		font-size: calc(0.7rem + 0.5vw);
	`;

	const Link = styled.div`
		display: flex;
		flex-direction: row;
		justify-content: center;
		margin: 0.5rem 1rem 0rem 1rem;
		font-size: calc(0.7rem + 0.5vw);
		a {
			text-decoration: none;
			color: white;
		}
	`;

	const Header = styled.div`
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		background-color: rgba( 255, 255, 255, 0.1);
		height: 5rem;
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		font-size: calc(1rem + 0.3vw);
	`;

	return (
		<div className="App">
			<MainDiv />
			<Main>
				<Header>
					<p>Top 50 Crypto Currencies Today</p>
					<p>-- Ojas</p>
				</Header>
				<ul>
					{data.map((items) => (
						<motion.li
						initial={{transform:"scale(0)"}}
						animate={{scale:[0,1]}}
						transition={{type:'spring', duration:1, delay: items.rank/2}}
							className="items"
							key={items.uuid}
						>
							<Top color={items.color}>
								<p>
									Rank:{" "}
									{!items.rank
										? 0
										: items.rank}
								</p>
								<img
									src={!items.iconUrl ? "https://cdn.coinranking.com/bOabBYkcX/bitcoin_btc.svg" : items.iconUrl}
								></img>
							</Top>
							<Info>
								<p>
									Coin:{" "}
									{!items.name
										? "Name"
										: items.name}
								</p>
								<p>
									Symbol:{" "}
									{!items.symbol
										? "OMR"
										: items.symbol}
								</p>
							</Info>
							<Info>
							<p>
									Change Today:{" "}
									{!items.change
										? 0.0
										: items.change}
									%{" "}
								</p>
								<p>
									Price: ${" "}
									{!items.price
										? 1000
										:  Math.round((items.price) * 10000) / 10000}
								</p>
							</Info>
							<Link color={items.color}>
								<p>
									<a
										href={
											items.coinrankingUrl
										}
									>
										Click Here For More Information
									</a>
								</p>
							</Link>
						</motion.li>
					))}
				</ul>
				<button onClick={getData}>Refresh Data</button>
			</Main>
		</div>
	);
}

export default App;
