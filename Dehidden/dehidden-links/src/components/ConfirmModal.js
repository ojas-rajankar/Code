import React from 'react'
import styled from 'styled-components'

const Modal = styled.div`
  z-index: 10;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  .closeImg {
    cursor: pointer;
  }
`

const Form = styled.form`
  margin-top: 30vh;
  display: flex;
  flex-direction: column;
  width: 40vw;
  height: 30vh;
  margin-left: 30vw;
  background-color: white;
  color: black;
  border-radius: 15px;

  h1 {
      margin-top: 8vh;
    font-size: 3.5vh;
  }

  .closeImg {
    height: 5vh;
    position: absolute;
    right: 16vw;
    top: 14vh;
  }

  input:focus {
    outline: none;
  }

  #dataDisplay {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin: 5vh 0;
    height: 40vh;
  }

  #textInputs {
    display: flex;
    flex-direction: column;
    height: 40vh;
    justify-content: space-around;
  }

  #qrCode {
    display: flex;
    flex-direction: column;
    height: 40vh;
    justify-content: space-evenly;
  }

  .disabled {
    cursor: not-allowed;
  }

  label {
    width: 20vw;
    height: auto;
    padding: 1vh;
    text-align: center;
    box-sizing: content-box;
    border-width: 2px;
    border-style: solid;
    border-image: linear-gradient(
      90deg,
      #ee7c65,
      #f6c39d 18%,
      #ead899 36%,
      #87d5ff 57%,
      #9281f5 76%,
      #ff85a9
    );
    border-image-slice: 1;
    background-color: black;
    color: white;
    font-size: 2.5vh;
    font-family: "Fredoka", sans-serif;
    cursor: pointer;
  }

  #qrCodeInput {
    visibility: hidden;
    height: 0;
  }
`;

const Button = styled.button`
  width: 20%;
  height: 5vh;
  padding: 0.5vh 1vw;
  text-align: center;
  box-sizing: content-box;
  border-radius: 2.5vh;
  border: none;
  background: linear-gradient(
    90deg,
    #ee7c65,
    #f6c39d 20%,
    #ead899 40%,
    #87d5ff 60%,
    #9281f5 80%,
    #ff85a9
  );
  font-size: 2.5vh;
  font-weight: 600;
  font-family: "Fredoka", sans-serif;
  transition: all 0.3s linear;
  cursor: pointer;
  margin: 0 5vh;
  img {
    height: 2.5vh;
    margin-bottom: -0.5vh;
  }
`;


const ConfirmModal = (props) => {
  return (
    <Modal>
        <Form>
            <h1>{props.warning}</h1>
            <br />
            <div>
            <Button>Yes</Button>
            <Button>No</Button>
            </div>
            </Form>
    </Modal>
  )
}

export default ConfirmModal