import "./GameInfo.style.css";

 function GameInfo({ score1 = 0, score2 = 0 }) {
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
    </>
  );
}
export default GameInfo