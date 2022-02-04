import React from 'react';
import styled from "styled-components";

const Main = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background: black;
`

const Background = () => {
  return (
      <Main />
  );
};

export default Background;
