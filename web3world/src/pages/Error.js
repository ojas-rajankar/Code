import React from "react";
import styled from "styled-components";
import error from "../assets/error.png";

const Img = styled.img`
  width: 100%;
  min-height: 100vh;
`;

const Error = () => {
  return (
    <a href="/">
      <Img src={error} />
    </a>
  );
};

export default Error;
