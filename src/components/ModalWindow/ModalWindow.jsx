import Button from "../Button/Button";
import "./ModalWindow.style.css";

export default function ModalWindow({ child, show, closeModalWindow }) {
  const handleClick = () => {
    closeModalWindow();
  };

  return (
    <div className={show ? " display-block" : "display-none"}>
      <div className="modal">
        {child}
        <Button name="Close" onClick={handleClick} />
      </div>
    </div>
  );
}
