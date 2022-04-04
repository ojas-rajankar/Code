import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Main = styled.div`
  width: 100vw;
  min-height: 100vh;
  user-select: none;

  a {
    text-decoration: none;
  }
`;
const Card = styled.div(
  ({ primary }) => `
  height: 45vh;
  width: 40vh;
  border: 1px solid ${primary ? "#c3073f" : "#6f2232"};
  color: ${primary ? "#c3073f" : "#6f2232"};
  border-radius: 20px;
  margin: 3vh 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
);

const CardSection = styled.div`
  max-width: 80vw;
  padding: calc(15vh + 10vw) 10vw 5vh 10vw;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const CardText = styled.h1`
  font-family: "Press Start 2P", cursive;
  font-size: calc(1.2vh + 1.2vw);
`;

const Home = () => {
  return (
    <Main>
      <CardSection>
        <Link to={"/votingdapp"}>
          <Card primary>
            <CardText>Make A Voting DApp</CardText>
          </Card>
        </Link>
        <Link to={"/socialdapp"}>
          <Card primary>
            <CardText>Make A Social DApp</CardText>
          </Card>
        </Link>
        <Link to={"/resumedapp"}>
          <Card primary>
            <CardText>Make A Resume DApp</CardText>
          </Card>
        </Link>
        <Link to={"/resumedapp"}>
          <Card primary>
            <CardText>Make A Resume DApp</CardText>
          </Card>
        </Link>
        <Link to={"/resumedapp"}>
          <Card primary>
            <CardText>Make A Resume DApp</CardText>
          </Card>
        </Link>
      </CardSection>
    </Main>
  );
};

export default Home;
