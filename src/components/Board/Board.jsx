import { useContext, useState } from "react";
import { BUTTON_STYLE, REPLAY } from "../../constants/game";
import { board, clearBoard } from "../../helpers/board";
import Button from "../Button/Button";
import Cell from "../Cell/Cell";
import { ChangeContext } from "../Game/Game";


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
        return row.map((_, j) => {
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
      {gameOver ? (
        <Button name={REPLAY} className={BUTTON_STYLE} onClick={handleReplay} />
      ) : null}
    </div>
  );
}

export default Board;
