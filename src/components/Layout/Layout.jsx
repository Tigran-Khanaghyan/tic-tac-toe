import React from "react";
import { useState } from "react";
import ModalContent from "../ModalContent/ModalContent";
import ModalWindow from "../ModalWindow/ModalWindow";
import "./Layout.style.css";

export const ShowContext = React.createContext();

function Layout(props) {
  const [show, setShow] = useState();

  const showModalWindow = () => {
    setShow(true);
  };

  const closeModalWindow = () => {
    setShow(false);
  };

  return (
    <div className="layout-container">
      <div className="layout">
        <ModalWindow
          child={<ModalContent />}
          show={show}
          closeModalWindow={closeModalWindow}
        />
        <ShowContext.Provider value={{ showModalWindow }}>
          <div className="child-content">{props.child}</div>
        </ShowContext.Provider>
        <div className="info">
          <div className="mode-container">{props.gameMode}</div>
          <div className="gameInfo">{props.gameInfo}</div>
        </div>
      </div>
    </div>
  );
}
export default Layout;
