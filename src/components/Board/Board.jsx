import Cell from "../Cell/Cell";
import "./Board.style.css";

export default function Board() {
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
      {createBoard(<Cell />).map((cell) => cell)}
    </div>
  );
}
