import { useContext, useState } from "react";
import { FIRST_PLAYER_TURN } from "../../constants/constants";
import { board, clearBoard } from "../../helpers/board";
import Button from "../Button/Button";
import Cell from "../Cell/Cell";
import { ChangeContext } from "../Game/Game";
import "./Board.style.css";

function Board() {
  const [turnToggler, setTurnToggler] = useState(false);
  const [initialCellValue, setInitialCellValue] = useState(false);
  const [replayClicked, setReplayClicked] = useState();
  const { gameOver, setGameOver } = useContext(ChangeContext);

  const handleReplay = () => {
    clearBoard(board);
    setGameOver(true);
    setReplayClicked(true);
    setInitialCellValue(null);
  };

  return (
    <div className="board-container">
      {board.map((row, i) => {
        return row.map((cell, j) => {
          return (
            <Cell
            setReplayClicked={setReplayClicked}
              replayClicked={replayClicked}
              gameOver={gameOver}
              initialCellValue={initialCellValue}
              key={`${i}&${j}`}
              coordinates={[i, j]}
              turnToggler={turnToggler}
              setTurnToggler={setTurnToggler}
            />
          );
        });
      })}
      {gameOver ? <Button name="Replay" onClick={handleReplay} /> : null}
    </div>
  );
}

export default Board;
