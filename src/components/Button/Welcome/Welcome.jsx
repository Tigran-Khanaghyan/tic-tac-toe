import "./Welcome.style.css";
import Button from "../Button/Button";

export default function Welcome() {
  return (
    <div className="welcome-container">
      <div className="welcome">
        <p>
          Welcome to <span>Tic Tac Toe</span> Game
        </p>
        <Button name="Play" />
      </div>
    </div>
  );
}
