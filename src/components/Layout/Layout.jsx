import "./Layout.style.css";

export default function Layout(props) {
  return (
    <div className="layout-container">
      <div className="layout">
        <div className='child-content'>{props.child}</div>
        <div className="info">
          <div className="mode-container">{props.left}</div>
          <div className="gameInfo">{props.right}</div>
        </div>
      </div>
    </div>
  );
}
