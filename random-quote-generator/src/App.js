import axios from "axios";
import { useState } from "react";
import "./App.css";
import styled from "styled-components";

function App() {

	const fetchQuote = () => {
		const options = {
			method: "POST",
			url: "https://motivational-quotes1.p.rapidapi.com/motivation",
			headers: {
				"content-type": "application/json",
				"x-rapidapi-key":
					"ce99237786msh082e9fb626b28c4p1c36a7jsn43693defeed1",
				"x-rapidapi-host":
					"motivational-quotes1.p.rapidapi.com",
			},
			data: { key1: "value"},
		};

		axios
			.request(options)
			.then(function (response) {
				setQuote(response.data);
			})
			.catch(function (error) {
				console.error(error);
			});
	};

	const Main = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100vh;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("https://www.freecodecamp.org/news/content/images/size/w2000/2021/06/w-qjCHPZbeXCQ-unsplash.jpg");
  `;

  const Quote = styled.div`
    max-width: 60%;
    width: auto;
    border: 0.5px solid white;
    height: auto;
    padding: 2rem 1rem;
    color: white;
    font-weight: 600;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 10px;

    h1{
      font-size: calc(1rem + 1vw);
    }

    button {
      width: auto;
      height: auto;
      font-weight: 800;
      border: 0.1px solid white;
      background-color: rgba(0,0,0,0);
      color: white;
      font-size: calc(1rem + 0.2vw);
      padding: 5px 18px;
      transition: all 0.5s 0s ease;
      margin-top: 0.5rem;
    }


    button:hover {
      background-color: white;
      color: rgba(0,0,0, 1);
    }
  `

	const [quote, setQuote] = useState(
		"Click Below To Get Random Quote",
	);

	return (
		<div className="App">
			<Main>
        <Quote>
          <h1>{quote}</h1>
          <button onClick={fetchQuote}>Get Quote</button>
        </Quote>
      </Main>
		</div>
	);
}

export default App;
