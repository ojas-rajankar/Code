import React from 'react'
import styled from 'styled-components'
import saveImg from "../assets/save.png";
import deleteImg from "../assets/delete.png";
import closeImg from "../assets/close.png";
import { QRCode } from "react-qrcode-logo";

const Modal = styled.div`
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);

  .closeImg {
    cursor: pointer;
  }
`;
const Form = styled.form`
  margin-top: 12vh;
  display: flex;
  flex-direction: column;
  width: 70vw;
  height: 70vh;
  margin-left: 15vw;
  background-color: white;
  color: black;

  h1 {
    font-size: 4vh;
    margin-bottom: 0;
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

const Input = styled.input`
  width: 20vw;
  height: 5vh;
  padding: 0.5vh;
  text-align: center;
  box-sizing: content-box;
  border-width: 5px;
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
  color: black;
  font-size: 2.5vh;
  font-family: "Fredoka", sans-serif;
  transition: all 0.3s linear;
  cursor: pointer;
`;

const Button = styled.button`
  width: auto;
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
  margin: 0 3vh;

  img {
    height: 2.5vh;
    margin-bottom: -0.5vh;
  }
`;
const ConfirmModal = (props) => {

    function download() {
        var canvas = document.getElementById("react-qrcode-logo");
        var url = canvas.toDataURL("image/png");
        var link = document.createElement("a");
        link.download = "qrcode.png";
        link.href = url;
        link.click();
      }

  return (
    <Modal>
    <Form>
      <h1>
        {props.title}
      </h1>
      <img
        className="closeImg"
        src={closeImg}
        onClick={e => props.createLinkClosed(e)}
      ></img>
      <div id="dataDisplay">
        <div id="textInputs">
          <Input
            type={"text"}
            placeholder="Link Name"
            required
            disabled={props.disabled}
          ></Input>
          <Input
            type={"url"}
            placeholder="Link URL"
            required
            disabled={props.disabled}
          ></Input>
          <Input
            type={"url"}
            placeholder="Destination URL"
            required
            onChange={(e) => props.handleDestinationChange(e)}
          ></Input>
        </div>
        <div id="qrCode">
          <QRCode
            value={props.destinationURL}
            logoImage={`data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYiIGhlaWdodD0iMzYiIHZpZXdCb3g9IjAgMCAzNiAzNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC45OTY1ODIiIHk9IjAuOTYwOTM4IiB3aWR0aD0iMzQuMTg5MSIgaGVpZ2h0PSIzNC4xODkxIiBmaWxsPSIjMDcwNDBDIi8+CjxnIGNsaXAtcGF0aD0idXJsKCNjbGlwMF82MF8yMTY3KSI+CjxwYXRoIGQ9Ik0yNS4wNzYgMTguMTAxNEMyNS4wNzYgMTYuODI1MiAyNS4wOTQgMTUuNTQ3OSAyNS4wNTkgMTQuMjcxOEMyNS4wNTIyIDE0LjA0MzEgMjQuODc4IDEzLjcyNDEgMjQuNjg1OCAxMy42MDg2QzIxLjkxNSAxMS45NTA1IDE5LjEzMDYgMTAuMzE0MiAxNi4zMzcyIDguNjkzODRDMTYuMTY5OCA4LjU5NjY0IDE1Ljg1NjYgOC41OTMyMSAxNS42OTAzIDguNjg4MTJDMTQuMzA5NCA5LjQ2Nzk4IDEyLjk0MSAxMC4yNzA3IDExLjU4NzMgMTEuMDk4NkMxMS40MDYzIDExLjIwOTUgMTEuMjI0MyAxMS40OTc3IDExLjIyNDMgMTEuNzA1OEMxMS4yMDM5IDE1LjkzNTYgMTEuMjAzOSAyMC4xNjU0IDExLjIyNDMgMjQuMzk1MkMxMS4yMjU0IDI0LjYwNTYgMTEuMzkxNiAyNC45MDA2IDExLjU3MDMgMjUuMDEwNEMxMi45MjI5IDI1LjgzOTQgMTQuMzAyNyAyNi42MjI3IDE1LjY2MDkgMjcuNDQyNkMxNS45MzEyIDI3LjYwNjEgMTYuMTE3OCAyNy41ODIxIDE2LjM3NDUgMjcuNDNDMTkuMTM1MSAyNS43OTE0IDIxLjkwMDMgMjQuMTYwNyAyNC42NzMzIDIyLjU0MTZDMjQuOTc1MyAyMi4zNjU1IDI1LjA5MDcgMjIuMTY2NSAyNS4wODUgMjEuODE3N0MyNS4wNjU4IDIwLjU3ODIgMjUuMDc2IDE5LjMzOTggMjUuMDc2IDE4LjEwMTRaTTIyLjY1NDYgMjAuNTM5M0MyMi42NTI0IDIwLjcwNzQgMjIuNTIyMyAyMC45NDY0IDIyLjM4MDkgMjEuMDMxQzIwLjM1NDMgMjIuMjQ1NCAxOC4zMTg2IDIzLjQ0NDkgMTYuMjczOSAyNC42Mjg0QzE2LjEzMzYgMjQuNzA5NiAxNS44NzI0IDI0LjY5OTMgMTUuNzI0MiAyNC42MjA0QzE1LjEzOTYgMjQuMzEyOCAxNC41ODc3IDIzLjk0MTIgMTQuMDA0MSAyMy42MzI1QzEzLjY4OTcgMjMuNDY1NSAxMy42MDE1IDIzLjI0OTQgMTMuNjAzNyAyMi45MDYzQzEzLjYxOTYgMjEuMjg2IDEzLjYxMDUgMTkuNjY0NSAxMy42MTA1IDE4LjA0NDJDMTMuNjExNyAxOC4wNDQyIDEzLjYxMTcgMTguMDQ0MiAxMy42MTI4IDE4LjA0NDJDMTMuNjEyOCAxNi40MjM5IDEzLjU5ODEgMTQuODAyNCAxMy42Mjk4IDEzLjE4MjFDMTMuNjM0MyAxMi45NTU2IDEzLjgxMyAxMi42NTYgMTQuMDAxOCAxMi41MjM0QzE0LjU0MzUgMTIuMTQ2IDE1LjEyMjYgMTEuODE5IDE1LjcwOTUgMTEuNTE2QzE1Ljg3MTMgMTEuNDMyNSAxNi4xNTUxIDExLjQyNzkgMTYuMzEwMSAxMS41MTcxQzE4LjM0MTIgMTIuNjg1OCAyMC4zNjIyIDEzLjg3MjcgMjIuMzc0MSAxNS4wNzU3QzIyLjUxNjYgMTUuMTYwMyAyMi42NTAxIDE1LjM5NTkgMjIuNjUyNCAxNS41NjI4QzIyLjY3MzggMTcuMjIyIDIyLjY3NSAxOC44ODEyIDIyLjY1NDYgMjAuNTM5M1oiIGZpbGw9IndoaXRlIi8+CjxwYXRoIGQ9Ik0xOC40NDU1IDE1LjU2NEMxOS4wNTE2IDE1LjkyMDcgMTkuNTcxOSAxNi4yMTY5IDIwLjA3OTcgMTYuNTM0OEMyMC4xNzM1IDE2LjU5MzEgMjAuMjY1MSAxNi43Mzk1IDIwLjI2NzQgMTYuODQ3QzIwLjI4MzIgMTcuNjQ2MyAyMC4yODMyIDE4LjQ0NjcgMjAuMjY5NyAxOS4yNDcyQzIwLjI2NzQgMTkuMzU5MiAyMC4xOTI4IDE5LjUxNyAyMC4xMDM0IDE5LjU3MzFDMTkuNTgyMSAxOS45MDAxIDE5LjA0NiAyMC4yMDMxIDE4LjQ0NDMgMjAuNTU2NUMxOC40NDU1IDE4Ljg2NTIgMTguNDQ1NSAxNy4yNzQ2IDE4LjQ0NTUgMTUuNTY0WiIgZmlsbD0id2hpdGUiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF82MF8yMTY3Ij4KPHJlY3Qgd2lkdGg9IjEzLjg3NTQiIGhlaWdodD0iMTguOTM0IiBmaWxsPSJ3aGl0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMjA4NSA4LjYyMDEyKSIvPgo8L2NsaXBQYXRoPgo8L2RlZnM+Cjwvc3ZnPgo=`}
            size="300"
            logoHeight={80}
            logoWidth={80}
          ></QRCode>
        </div>
      </div>
      <div>
        <Button type="submit">
          Save Changes <img src={saveImg} />
        </Button>
        <Button onClick={e => props.removeLinkClicked(e)} type="reset" >
          Remove Link <img src={deleteImg} />
        </Button>
        <Button onClick={download} type="button">Download QRCode</Button>
      </div>
    </Form>
  </Modal>
  )
}

export default ConfirmModal