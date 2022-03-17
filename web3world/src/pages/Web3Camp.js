import React from 'react'
import styled from 'styled-components'

import img1 from "../assets/Web3Camp/10.png"
import img2 from "../assets/Web3Camp/11.png"
import img3 from "../assets/Web3Camp/12.png"
import img4 from "../assets/Web3Camp/13.png"

const Main = styled.div`
    img {
        width: 100%;
    }
`

const Web3Camp = () => {
  return (
    <Main>
        <img src={img1}></img>
        <img src={img2}></img>
        <img src={img3}></img>
        <img src={img4}></img>
    </Main>
  )
}

export default Web3Camp