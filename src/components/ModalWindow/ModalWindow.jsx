import Button from "../Button/Button";
import "./ModalWindow.style.css";

export default function ModalWindow({ child, show, closeModalWindow }) {
  return (
    <div className={show ? " display-block" : "display-none"}>
      <div className="modal">
        {child}
        <Button name="Close" onClick={closeModalWindow} />
      </div>
    </div>
  );
}
