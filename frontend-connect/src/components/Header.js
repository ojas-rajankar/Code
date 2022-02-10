import React from 'react'

import styled from 'styled-components';

const Main = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  color: white;
  z-index: 10;
  display: flex;
  justify-content: right;
  
  img {
    padding-top: 1vh;
    padding-right: 1vw;
  }
`;


const Header = () => {
  return (
    <Main>
        <img src={""} alt="Logo" />
        <img src={""} alt="Logo" />
    </Main>
  )
}

export default Header