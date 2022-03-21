import React from "react";

import styled from "styled-components";

import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import img5 from "../assets/5.png";
import img6 from "../assets/6.png";

const Img = styled.img`
  width: 100%;
  max-height: 100%;
`;

const Landing = () => {
  return (
    <div>
      <Img src={img1} />
      <a href="setup">
        <Img src={img2} />
      </a>
      <a href="solidity">
        <Img src={img3} />
      </a>
      <a href="commingsoon">
        <Img src={img4} />
      </a>
      <a href="commingsoon">
        <Img src={img5} />
      </a>
      <a href="commingsoon">
        <Img src={img6} />
      </a>
    </div>
  );
};

export default Landing;
