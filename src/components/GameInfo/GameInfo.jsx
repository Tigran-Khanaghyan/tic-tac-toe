import { useState } from "react";
import { clearLocalScores, scores } from "../../helpers/board";
import Button from "../Button/Button";
import "./GameInfo.style.css";

function GameInfo({ score1 = 0, score2 = 0, change, setChange }) {
  const [state, setState] = useState(false);

  if (state) {
    localStorage.clear();
    clearLocalScores(scores);
  }

  const clearScores = () => {
    clearLocalScores(scores);
    localStorage.clear();
    setChange(!change);
    setState(!state);
  };

  return (
    <>
      <div className="title">
        <p>Players</p>
        <p>Score</p>
      </div>
      <div className="player">
        <p>Player 1</p>
        <p>{score1}</p>
      </div>
      <div className="player">
        <p>Player 2</p>
        <p>{score2}</p>
      </div>
      <Button name="Clear Scores" onClick={clearScores} />
    </>
  );
}
export default GameInfo;
