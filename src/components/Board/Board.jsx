import { useState } from "react";
import { FIRS_PLAYER_TURN } from "../../constants/constants";
import { createBoard } from "../../helpers/board";
import Cell from "../Cell/Cell";
import "./Board.style.css";

export default function Board() {
  const [board, setBoard] = useState(createBoard());
  const [turnToggler, setTurnToggler] = useState(FIRS_PLAYER_TURN);

  return (
    <div className="board-container">
      {board.map((row, i) => {
        return row.map((cell, j) => {
          return (
            <Cell
              board={board}
              setBoard={setBoard}
              key={`${i}&${j}`}
              coordinates={[i, j]}
              turnToggler={turnToggler}
              setTurnToggler={setTurnToggler}
            />
          );
        });
      })}
    </div>
  );
}
