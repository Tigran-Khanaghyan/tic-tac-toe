import { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import {
  FIRS_PLAYER_TURN,
  GAME_SIGNS,
  SECOND_PLAYER_TURN,
} from "../../constants/constants";
import {
  board,
  counter,
  findWinner,
  getBoardCellValue,
  setBoardCellValue,
} from "../../helpers/board";
import { ShowContext } from "../Layout/Layout";
import "./Cell.style.css";

let signs = [];

export default function Cell({ coordinates, turnToggler, setTurnToggler }) {
  const { showModalWindow } = useContext(ShowContext);
  const [cellValue, setCellValue] = useState();

  let winnerSign = findWinner(board);

  if (winnerSign) {
    signs.push(winnerSign);
  }

  useEffect(() => {
    if (counter(board) === 9) {
      showModalWindow();
      // console.log(signs[0][0]);
    }
    // eslint-disable-next-line
  }, [cellValue]);
  const handleCellClick = () => {
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
  setBoardCellValue(board, coordinates, cellValue);

  return (
    <div className="cell-container" onClick={handleCellClick}>
      {cellValue}
    </div>
  );
}
