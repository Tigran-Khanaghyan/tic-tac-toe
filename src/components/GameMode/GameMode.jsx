import {
  BUTTON_STYLE,
  CLICKED_BUTTON_STYLE,
  COMPUTER_VS_COMPUTER,
  PLAYER_VS_COMPUTER,
  PLAYER_VS_PLAYER,
} from "../../constants/game";
import Button from "../Button/Button";
import "./GameMode.style.css";

function GameMode({
  playerPlayer,
  setPlayerPlayer,
  playerComputer,
  setPlayerComputer,
  computerComputer,
  setComputerComputer,
}) {
  const handlePlayerPlayerClick = () => {
    setPlayerPlayer(true);
    setPlayerComputer(false);
    setComputerComputer(false);
  };
  const handlePlayerComputerClick = () => {
    setPlayerComputer(true);
    setPlayerPlayer(false);
    setComputerComputer(false);
  };
  const handleComputerComputerClick = () => {
    setComputerComputer(true);
    setPlayerPlayer(false);
    setPlayerComputer(false);
  };

  return (
    <>
      <Button
        className={playerPlayer ? CLICKED_BUTTON_STYLE : BUTTON_STYLE}
        name={PLAYER_VS_PLAYER}
        onClick={handlePlayerPlayerClick}
      />
      <Button
        className={playerComputer ? CLICKED_BUTTON_STYLE : BUTTON_STYLE}
        name={PLAYER_VS_COMPUTER}
        onClick={handlePlayerComputerClick}
      />
      <Button
        className={computerComputer ? CLICKED_BUTTON_STYLE : BUTTON_STYLE}
        name={COMPUTER_VS_COMPUTER}
        onClick={handleComputerComputerClick}
      />
    </>
  );
}
export default GameMode;
