import "./Button.style.css";

function Button({ name, onClick }) {
  return (
    <button onClick={onClick} className="button">
      {name}
    </button>
  );
}
export default Button;
