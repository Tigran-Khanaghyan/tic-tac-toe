import React, { useEffect, useState } from "react";
import { getScores } from "../../services/localStorage";
import { scores } from "../../helpers/board";
import GameContent from "../GameContent/GameContent";
import GameMode from "../GameMode/GameMode";
import GameInfo from "../GameInfo/GameInfo";
import Layout from "../Layout/Layout";

export const ChangeContext = React.createContext();

function Game() {
  const [change, setChange] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [newScores, setNewScores] = useState();

  useEffect(() => {
    let loadedScores = getScores("Info");
    if (loadedScores) {
      setNewScores(loadedScores);
    } else setNewScores(scores);
    // eslint-disable-next-line
  }, [change, scores]);

  return (
    <ChangeContext.Provider
      value={{ change, setChange, gameOver, setGameOver }}
    >
      <Layout
        gameContent={<GameContent />}
        gameMode={<GameMode />}
        gameInfo={
          <GameInfo
            change={change}
            setChange={setChange}
            score1={newScores ? newScores.score1 : scores.score1}
            score2={newScores ? newScores.score2 : scores.score2}
          />
        }
      />
    </ChangeContext.Provider>
  );
}
export default Game;
