import { useState } from "react";
import {
  FIRS_PLAYER_TURN,
  GAME_SIGNS,
  SECOND_PLAYER_TURN,
} from "../../constants/constants";
import { getBoardCellValue, setBoardCellValue } from "../../helpers/board";
import "./Cell.style.css";

export default function Cell({
  coordinates,
  board,
  setBoard,
  turnToggler,
  setTurnToggler,
}) {
  const [cellValue, setCellValue] = useState();

  const handleCellClick = () => {
    setBoard(setBoardCellValue(board, coordinates, cellValue));
    if (getBoardCellValue(board, coordinates)) {
      return;
    }
    if (turnToggler) {
      setCellValue(GAME_SIGNS[SECOND_PLAYER_TURN]);
      setTurnToggler(FIRS_PLAYER_TURN);
    } else {
      setCellValue(GAME_SIGNS[FIRS_PLAYER_TURN]);
      setTurnToggler(SECOND_PLAYER_TURN);
    }
  };

  return (
    <div className="cell-container" onClick={handleCellClick}>
      {cellValue}
    </div>
  );
}
