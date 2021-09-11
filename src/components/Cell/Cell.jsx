import { useContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";
import {
  FIRST_PLAYER_TURN,
  GAME_SIGNS,
  SECOND_PLAYER_TURN,
} from "../../constants/constants";
import {
  board,
  counter,
  findWinner,
  getBoardCellValue,
  scores,
  scoresHandler,
  setBoardCellValue,
  signs,
} from "../../helpers/board";
import { ChangeContext } from "../Game/Game";
import { ShowContext } from "../Layout/Layout";
import "./Cell.style.css";

 function Cell({
  coordinates,
  turnToggler,
  setTurnToggler,
}) {
  const { showModalWindow } = useContext(ShowContext);
  const { change, setChange, setGameOver } = useContext(ChangeContext);
  const [cellValue, setCellValue] = useState();
  // const [changeState, setChangeState] = useState(1)

  let winnerSign = findWinner(board);

  if (winnerSign) {
    signs.push(winnerSign);
  }

  useEffect(() => {
    if (counter(board) === 9) {
      scoresHandler(signs, GAME_SIGNS, scores);
      setChange(change + 1);
      showModalWindow();
      setGameOver(true)
    }
    // eslint-disable-next-line
  }, [cellValue]);
  
  const handleCellClick = () => {
    if (getBoardCellValue(board, coordinates)) {
      return;
    }
    if (turnToggler) {
      setCellValue(GAME_SIGNS[SECOND_PLAYER_TURN]);
      setTurnToggler(FIRST_PLAYER_TURN);
    } else {
      setCellValue(GAME_SIGNS[FIRST_PLAYER_TURN]);
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

export default Cell
