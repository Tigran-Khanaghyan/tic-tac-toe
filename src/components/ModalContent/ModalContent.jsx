import { GAME_SIGNS } from "../../constants/constants";
import { signs } from "../../helpers/board";

export default function ModalContent() {
  let winnerMessage = "Draw";

  if (signs.length) {
    if (signs[0][0] === GAME_SIGNS[0]) {
      winnerMessage = "Player 1 Win!";
    } else {
      winnerMessage = "Player 2 Win!";
    }
  }

  return (
    <div>
      <p>{winnerMessage}</p>
    </div>
  );
}
