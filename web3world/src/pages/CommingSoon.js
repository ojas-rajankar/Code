import React from "react";
import styled from "styled-components";
import launch from "../assets/launch.png";

const Img = styled.img`
  width: 100%;
  min-height: 100vh;
`;

const CommingSoon = () => {
  return (
    <a href="/">
      <Img src={launch} />
    </a>
  );
};

export default CommingSoon;
