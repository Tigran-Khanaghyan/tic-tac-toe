import { BUTTON_STYLE, CLOSE } from "../../constants/game";
import Button from "../Button/Button";
import "./ModalWindow.style.css";

function ModalWindow({ child, show, closeModalWindow }) {
  const handleClick = () => {
    closeModalWindow();
  };

  return (
    <div className={show ? " display-block" : "display-none"}>
      <div className="modal">
        {child}
        <Button name={CLOSE} onClick={handleClick} className={BUTTON_STYLE} />
      </div>
    </div>
  );
}

export default ModalWindow;
