import React, { useState } from "react";
import { scores } from "../../helpers/board";
import GameContent from "../GameContent/GameContent";
import GameMode from "../GameMode/GameMode";
import GameInfo from "../GameInfo/GameInfo";
import Layout from "../Layout/Layout";

export const ChangeContext = React.createContext();

export default function Game() {
  const [change, setChange] = useState(1);
  const [gameOver, setGameOver] = useState(false);

  return (
    <ChangeContext.Provider value={{ change, setChange, gameOver, setGameOver }}>
      <Layout
        child={<GameContent />}
        left={<GameMode />}
        right={<GameInfo score1={scores.score1} score2={scores.score2} />}
      />
    </ChangeContext.Provider>
  );
}
