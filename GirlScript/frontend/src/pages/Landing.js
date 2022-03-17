import React from 'react'
import styled from "styled-components"

import Web3CampGlobal from "../assets/Web3CampGlobal.png"

const Main = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: black;
    overflow: hidden;

    #main {
        display: flex-wrap;
    }
    
    #text{
        height: 40vh;
        width: 100px;
    }

    #image{
        height: 40vh;
        width: 600px;
    }
`

const Landing = () => {
  return (
    <Main>
        <div id='main'>
            <div id='text' ></div>
            <div id='image'><img src={Web3CampGlobal}></img></div>
        </div>
    </Main>
  )
}

export default Landing