import { useContext, useState } from "react";
import {
  FIRST_PLAYER_TURN,
} from "../../constants/constants";
import { board, clearBoard } from "../../helpers/board";
import Button from "../Button/Button";
import Cell from "../Cell/Cell";
import { ChangeContext } from "../Game/Game";
import "./Board.style.css";

export default function Board() {
  const [turnToggler, setTurnToggler] = useState(FIRST_PLAYER_TURN);
  const [initialCellValue, setInitialCellValue] = useState(false);
  const { gameOver, setGameOver } = useContext(ChangeContext);

  const handleReplay = () => {
    clearBoard(board);
    setGameOver(false);
    setInitialCellValue(1);
  };

  return (
    <div className="board-container">
      {board.map((row, i) => {
        return row.map((cell, j) => {
          return (
            <Cell
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
