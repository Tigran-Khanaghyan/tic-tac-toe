import { useState } from "react";
import {
  FIRS_PLAYER_TURN,
  GAME_SIGNS,
  SECOND_PLAYER_TURN,
} from "../../constants/constants";
import {
  board,
  findWinner,
  getBoardCellValue,
  setBoardCellValue,
} from "../../helpers/board";
import "./Cell.style.css";

let signs = [];

export default function Cell({
  coordinates,
  turnToggler,
  setTurnToggler,
  counter,
  setCounter,
}) {
  const [cellValue, setCellValue] = useState();
  setBoardCellValue(board, coordinates, cellValue);

  let winnerSign = findWinner(board);

  if (winnerSign) {
    signs.push(winnerSign);
  }
  if (counter === 9) {
    console.log(signs[0][0]);
  }
  
  const handleCellClick = () => {
    if (getBoardCellValue(board, coordinates)) {
      return;
    }
    setCounter(counter + 1);
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
