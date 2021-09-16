import { useEffect, useState } from "react";
import { BUTTON_STYLE } from "../../constants/game";
import { clearLocalScores, scores } from "../../helpers/board";
import { getScores, setScores } from "../../services/localStorage";
import Button from "../Button/Button";
import "./GameInfo.style.css";

function GameInfo({ score1 = 0, score2 = 0, change, setChange }) {
  const [state, setState] = useState(false);

  const clearScores = () => {
    clearLocalScores(scores);
    localStorage.clear();
    setChange(!change);
    setState(!state);
  };
  useEffect(() => {
    let isScores = getScores("Info");
    if (!isScores) {
      clearLocalScores(scores);
      setScores("Info", { score1: 0, score2: 0 });
    }
  }, [state]);

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
      <Button
        name="Clear Scores"
        onClick={clearScores}
        className={BUTTON_STYLE}
      />
    </>
  );
}
export default GameInfo;
