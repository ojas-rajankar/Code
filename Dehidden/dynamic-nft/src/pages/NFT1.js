import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

import styled from "styled-components";

const NFT1 = () => {
  const Card = styled.div`
    background-color: black;
    width: 100vw;
    height: 100vh;

    video {
      width: 100vw;
      height: 100vh;
      object-fit: fill;
    }
  `;

  const [flipped, setFlipped] = useState(false);

  const handleFlip = (e) => {
    e.preventDefault();
    if (flipped === true) {
      setFlipped(false);
    } else {
      setFlipped(true);
    }
  };

  return (
    <div>
      <ReactCardFlip
        isFlipped={flipped}
        flipDirection="vertical"
        flipSpeedFrontToBack={1}
        flipSpeedBackToFront={1}
      >
        <Card onClick={(e) => handleFlip(e)}>
          <video src={video1} autoPlay loop />
        </Card>

        <Card onClick={(e) => handleFlip(e)}>
          <video src={video2} autoPlay loop />
        </Card>
      </ReactCardFlip>
    </div>
  );
};

export default NFT1;
