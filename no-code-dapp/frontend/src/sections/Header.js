import React from "react";
import styled from "styled-components";

const HeaderDiv = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;

  font-family: "Press Start 2P", cursive;

  padding: 0.5vh 0vw;
  user-select: none;

  a {
    text-decoration: none;
  }
`;

const Title = styled.h1`
  font-size: calc(1.8vh + 2.2vw);
  color: #c3073f;
`;

const SubTitle1 = styled.h1`
  font-size: calc(0.6vh + 0.8vw);
  color: #ffffff;
`;

const SubTitle2 = styled.h1`
  font-size: calc(0.4vh + 0.6vw);
  color: #4e4e50;
`;

const Header = () => {
  return (
    <HeaderDiv>
      <Title>NoCodeDapp</Title>
      <SubTitle1>Build Your First Dapp Without The Need To Code 🤫</SubTitle1>
      <SubTitle2>A Product From Web3 World 🌐</SubTitle2>
    </HeaderDiv>
  );
};

export default Header;
