import {
  BUTTON_STYLE,
  CLICKED_BUTTON_STYLE,
  PLAYER_VS_PLAYER,
} from "../../constants/game";
import Button from "../Button/Button";


function GameMode({
  playerPlayer,
  setPlayerPlayer,
}) {
  const handlePlayerPlayerClick = () => {
    setPlayerPlayer(true);
  };

  return (
    <>
      <Button
        className={playerPlayer ? CLICKED_BUTTON_STYLE : BUTTON_STYLE}
        name={PLAYER_VS_PLAYER}
        onClick={handlePlayerPlayerClick}
      />
    </>
  );
}
export default GameMode;
