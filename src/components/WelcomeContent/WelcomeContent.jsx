import { useHistory } from "react-router";
import { PLAY } from "../../constants/game";
import { routes } from "../../constants/routes";
import Button from "../Button/Button";
import "./WelcomeContent.style.css";

function WelcomeContent() {
  let history = useHistory();

  const handlePlay = () => {
    history.push(routes.game().path);
  };

  return (
    <>
      <p>
        Welcome to <span>Tic Tac Toe</span> Game
      </p>
      <Button name={PLAY} onClick={handlePlay} />
    </>
  );
}
export default WelcomeContent;
