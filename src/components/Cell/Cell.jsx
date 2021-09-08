import { useState } from "react";
import "./Cell.style.css";

export default function Cell({ firstPlayerTurn, setFirstPlayerTurn }) {
  const [value, setValue] = useState(null);

  const onClick = () => {
    if (value) {
      return;
    }
    if (firstPlayerTurn) {
      setValue("X");
      setFirstPlayerTurn(false);
    } else {
      setValue("O");
      setFirstPlayerTurn(true);
    }
  };
  return (
    <div className="cell-container" onClick={onClick}>
      {value}
    </div>
  );
}
