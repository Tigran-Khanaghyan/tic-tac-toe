import { useState } from "react";
import Cell from "../Cell/Cell";
import "./Board.style.css";

export default function Board() {
  const [firstPlayerTurn, setFirstPlayerTurn] = useState(true);
  const createBoard = (component) => {
    let board = [];
    for (let i = 0; i < 3; ++i) {
      let row = [];
      for (let j = 0; j < 3; ++j) {
        row.push(component);
      }
      board.push(row);
    }
    return board;
  };

  return (
    <div className="board-container">
      {createBoard(
        <Cell
          firstPlayerTurn={firstPlayerTurn}
          setFirstPlayerTurn={setFirstPlayerTurn}
        />
      ).map((row) => {
        return row.map((cell) => cell)
      })}
    </div>
  );
}
