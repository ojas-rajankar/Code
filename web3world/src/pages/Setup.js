import React from "react";
import styled from "styled-components";

import img1 from "../assets/setup.png";
import img2 from "../assets/setupnext.png";

const Main = styled.div`
  img {
    width: 100%;
  }

  iframe {
    width: 100vw;
    height: 100vh;
    padding: none;
  }
`;

const Setup = () => {
  return (
    <Main>
      <img src={img1} />
      <iframe
        src="https://www.youtube-nocookie.com/embed/ARcJsbgjv04"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <img src={img2} />
    </Main>
  );
};

export default Setup;
