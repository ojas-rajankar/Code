import "./App.css";
import { useState } from "react";
import styled from "styled-components";

import searchImg from "./assets/search.png";
import linkImg from "./assets/link.png";
import editImg from "./assets/edit.png";
import viewImg from "./assets/view.png";
import downloadImg from "./assets/download.png";

import ConfirmModal from "./components/ConfirmModal";
import ViewEditModal from "./components/ViewEditModal";
import Header from "./components/Header";

const Main = styled.div`
  position: absolute;
  width: 100vw;
  min-height: 100vh;
  top: 0;
  right: 0;
  background-color: black;
  color: white;

  h1 {
    width: 100%;
    font-family: "Fredoka", sans-serif;
  }

  span {
    background-image: linear-gradient(90deg, #faa94d, #f27038);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
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



const LinksDisplay = styled.div`
  width: 80vw;
  background-color: white;
  margin-top: 5vh;

  margin-left: 10vw;
  border-radius: 30px;

  p {
    width: 16vw;
    padding: 0.5vh 0;
    text-align: center;
    font-weight: 500;
    box-sizing: content-box;
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(90deg, #faa94d, #f27038);
    border-image-slice: 1;
    padding: 1vh 0;
  }

  #linkSearch {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 5vh;
    margin-bottom: 3vh;
  }

  .searchImg {
    box-sizing: content-box;
    border-width: 3px;
    border-style: solid;
    border-image: linear-gradient(90deg, #faa94d, #f27038);
    border-image-slice: 1;
    padding: 1vh;
    height: 2vh;
    cursor: pointer;
    margin-bottom: -2vh;
    border-left: none;
  }

  .buttonImg {
    padding: 1vh;
    height: 2vh;
    cursor: pointer;
    border: none;
    margin-top: -0.5vh;
  }

  input {
    width: 65%;
    margin-top: 2vh;
    border-width: 3px;
    height: 3vh;
    margin-left: 3vh;
  }

  button {
    display: flex;
    flex-direction: row;
    box-sizing: content-box;
    border-width: 3px;
    border-style: solid;
    border-image: linear-gradient(90deg, #faa94d, #f27038);
    border-image-slice: 1;
    height: 3vh;
    cursor: pointer;
    background: none;
    margin-bottom: -2vh;
    font-weight: 400;
  }

  input:focus {
    outline: none;
  }

  .listHeader {
    display: flex;
    color: black;
    width: 90%;
    margin: 0 5%;
    font-size: 2.5vh;
    font-family: "Fredoka", sans-serif;
    overflow-x: hidden;
  }

  .listDetails {
    display: flex;
    color: rgba(0, 0, 0, 0.6);
    width: 90%;
    margin: -4vh 5%;
    font-size: 2vh;
    font-family: "Fredoka", sans-serif;
    text-wrap: wrap;
    overflow-x: hidden;
  }

  .linkName {
    width: 20%;
    overflow-x: hidden;
  }
  .linkURL {
    width: 25%;
    overflow-x: hidden;
  }
  .destinationURL {
    width: 40%;
    overflow-x: hidden;
  }
  .edit {
    width: 15%;
    cursor: pointer;
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .edit img {
    width: 20px;
  }
`;

function App() {
  const [linksArray, setLinksArray] = useState([]);
  const [nameSearched, setNameSearched] = useState("");
  const [linkName, setLinkName] = useState("");
  const [linkURL, setLinkURL] = useState("");
  const [destinationURL, setDestinationURL] = useState("www.dehidden.com");
  const handleSearchValueChange = (e) => {
    setNameSearched(e.target.value);
  };
  const [linkNameFound, setLinkNameFound] = useState(false);
  const [editClicked, setEditClicked] = useState(false);
  const [createClicked, setCreateClicked] = useState(false);
  const [removeClicked, setRemoveClicked] = useState(false);

  const search = () => {
    for (let i = 0; i < linksArray.length; i++) {
      if (linksArray[i] === nameSearched) {
        setLinkName("");
        setLinkURL("");
        setDestinationURL("");
        setLinkNameFound(true);
      }
    }
    if (linkNameFound === false) {
      alert("Link With Name '" + nameSearched + "' Not Found!");
    }
  };

  const handleDestinationChange = (e) => {
    setDestinationURL(e.target.value);
  };

  const linkEditClicked = () => {
    setEditClicked(true);
  };

  const linkEditClosed = () => {
    setEditClicked(false);
  };

  const createLinkClicked = () => {
    setCreateClicked(true);
  };

  const createLinkClosed = () => {
    setCreateClicked(false);
  };

  const removeLinkClicked = () => {
    setRemoveClicked(true);
    setEditClicked(false);
  }

  function download() {
    var canvas = document.getElementById("react-qrcode-logo");
    var url = canvas.toDataURL("image/png");
    var link = document.createElement("a");
    link.download = "qrcode.png";
    link.href = url;
    link.click();
  }

  return (
    <div className="App">
      <Main>
        <Header/>

        <LinksDisplay>
          <div id="linkSearch">
            <Input
              type={"search"}
              placeholder="Search By Link Name"
              onChange={(e) => handleSearchValueChange(e)}
            ></Input>
            <img className="searchImg" onClick={search} src={searchImg}></img>
            <Button onClick={createLinkClicked}>
              Add Link <img className="buttonImg" src={linkImg}></img>
            </Button>
          </div>
          <div className="listHeader">
            <p className="linkName">Link Name</p>
            <p className="linkURL">Link URL</p>
            <p className="destinationURL">Destination URL</p>
            <p className="edit">View/Edit</p>
          </div>
          <div className="listDetails">
            <p className="linkName">Demo</p>
            <p className="linkURL">demo.dehidden.com</p>
            <p className="destinationURL">https://www.dehidden.com</p>
            <p className="edit">
              <img src={editImg} alt="edit" onClick={linkEditClicked}></img>
              <img src={viewImg} alt="view" onClick={linkEditClicked}></img>
              <img src={downloadImg} alt="download" onClick={download}></img>
            </p>
          </div>
        </LinksDisplay>

        {editClicked ? (
          <ViewEditModal
            title="View/Edit Your Link"
            createLinkClosed={linkEditClosed}
            linkName={linkName}
            linkURL={linkURL}
            handleDestinationChange={handleDestinationChange}
            destinationURL={destinationURL}
            removeLinkClicked={removeLinkClicked}
            disabled={true}
          />
        ) : createClicked ? (
          <ViewEditModal
            title="Create New Link"
            createLinkClosed={createLinkClosed}
            linkName={linkName}
            linkURL={linkURL}
            handleDestinationChange={handleDestinationChange}
            destinationURL={destinationURL}
            disabled={false}
          />
        ) : removeClicked ? (
          <ConfirmModal warning={"Do You Want To Remove The Link?"} />
        ) : ""}
      </Main>
    </div>
  );
}

export default App;
