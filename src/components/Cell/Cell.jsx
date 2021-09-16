import { useContext, useState } from "react";
import { useEffect } from "react";
import {
  FIRST_PLAYER_TURN,
  GAME_SIGNS,
  SECOND_PLAYER_TURN,
} from "../../constants/game";
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
import { setScores } from "../../services/localStorage";
import { ChangeContext } from "../Game/Game";
import { ShowContext } from "../Layout/Layout";
import "./Cell.style.css";

function Cell({
  coordinates,
  turnToggler,
  setTurnToggler,
  initialCellValue,
  gameOver,
  replayClicked,
  setReplayClicked,
}) {
  const { showModalWindow } = useContext(ShowContext);
  const { change, setChange, setGameOver } = useContext(ChangeContext);
  const [cellValue, setCellValue] = useState();

  let winnerSign = findWinner(board);

  if (winnerSign) {
    signs.push(winnerSign);
  }

  useEffect(() => {
    if (counter(board) === 9) {
      scoresHandler(signs, GAME_SIGNS, scores);
      setScores("Info", scores);
      setChange(change + 1);
      showModalWindow();
      setGameOver(true);
    }
    // eslint-disable-next-line
  }, [cellValue]);
 
  useEffect(() => {
    signs.length = 0;
    setTurnToggler(!turnToggler);
    setReplayClicked(false);
    setCellValue(initialCellValue);
    // eslint-disable-next-line
  }, [replayClicked]);

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
      {gameOver && replayClicked ? initialCellValue : cellValue}
    </div>
  );
}

export default Cell;
