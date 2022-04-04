import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  position: absolute;
  bottom: 0;
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

const Footer = () => {
  return (
    <FooterDiv>
      <a href="https://twitter.com/world_web3">
        <SubTitle1>Follow Us On Twitter</SubTitle1>
      </a>
    </FooterDiv>
  );
};

export default Footer;
