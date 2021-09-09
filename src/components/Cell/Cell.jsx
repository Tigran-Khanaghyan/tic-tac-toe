import { useState } from "react";
import { setBoardValue } from "../../helpers/board";
import "./Cell.style.css";

export default function Cell({
  value,
  coordinates,
  board,
  setBoard,
}) {
  const [cellValue, setCellValue] = useState();

  const handleCellClick = () => {
    if (!value) {
      return;
    }
    setCellValue("X");
    setBoard(setBoardValue(board, coordinates, "X"));
  };

  return (
    <div className="cell-container" onClick={handleCellClick}>
      {cellValue}
    </div>
  );
}
