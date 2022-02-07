import React from "react";
import styled from "styled-components";
import ItemList from "./ItemList";

const MainDiv = styled.div`
	background-color: rgba(0, 0, 0, 0.035);
	position: absolute;
	top: 0;
	bottom: 0;
	right: 0;
	left: 0;
	font: black;
	padding-top: 8rem;

	ul {
		list-style: none;
		padding: 0;
	}

	li {
		font-size: calc(0.5rem + 0.5vw);
		font-weight: 600;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	input {
		height: 2rem;
		cursor: pointer;
		width: 2rem;
	}

	lable {
		font: 2rem;
		margin: 0 1rem;
	}

	svg {
		color: grey;
		height: 2rem;
		width: 2rem;
	}

	svg:hover {
		color: red;
	}
`;

const Button = styled.button`
	margin: 0 auto;
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

	img {
		height: 1.6rem;
		margin-right: 0.3rem;
	}

	&:hover {
		background-color: rgba(0, 0, 0, 0.15);
	}
`;

const Content = styled.p`
	font-size: calc(0.8rem + 0.5vw);
	font: sans-serif, monospace;
	font-weight: 600;
`;

const Main = ({
	handleAdd,
	handleDelete,
	handleCheck,
	handleNameChange,
	name,
	items,
	greetings,
}) => {
	return (
		<MainDiv>
			<Button onClick={handleNameChange}>
				Change Name
			</Button>
			<Content>
				{greetings} {name}!
			</Content>
			<main>
				{!items.length ? (
					<ul>
						<li>List Is Empty</li>
					</ul>
				) : (
					<ItemList
						handleDelete={handleDelete}
						handleCheck={handleCheck}
						items={items}
					/>
				)}
				<ul>
					<li>
						<Button onClick={handleAdd}>
							Add
						</Button>
					</li>
				</ul>
			</main>
		</MainDiv>
	);
};

export default Main;
