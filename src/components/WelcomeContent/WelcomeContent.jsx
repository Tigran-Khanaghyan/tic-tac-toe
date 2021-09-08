import Button from "../Button/Button";
import './WelcomeContent.style.css'

export default function WelcomeContent() {
  return (
    <>
      <p>
        Welcome to <span>Tic Tac Toe</span> Game
      </p>
      <Button name="Play" />
    </>
  );
}
