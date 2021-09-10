import React from "react";
import { useState } from "react";
import ModalWindow from "../ModalWindow/ModalWindow";
import "./Layout.style.css";

export const ShowContext = React.createContext();

export default function Layout(props) {
  const [show, setShow] = useState(false);

  const showModalWindow = () => {
    setShow(true)
  }

  const closeModalWindow = () => {
    setShow(false);
  };

  return (
    <div className="layout-container">
      <div className="layout">
        <ShowContext.Provider value={showModalWindow}>
          <ModalWindow show={show} closeModalWindow={closeModalWindow} />
        <div className="child-content">{props.child}</div>
        </ShowContext.Provider>
        <div className="info">
          <div className="mode-container">{props.left}</div>
          <div className="gameInfo">{props.right}</div>
        </div>
      </div>
    </div>
  );
}
