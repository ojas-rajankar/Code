import React from "react";
import styled from "styled-components";

import img1 from "../assets/solidity.png";
import img2 from "../assets/soliditynxt.png";

const Main = styled.div`
  img {
    width: 100%;
  }

  iframe{
      width: 100vw;
      height: 100vh;
      padding: none;
  }
`;

const Solidity = () => {
  return (
    <Main>
      <img src={img1} />
      <iframe
        src="https://www.youtube-nocookie.com/embed/IavmWMozfTk"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <img src={img2} />
    </Main>
  );
};

export default Solidity;
