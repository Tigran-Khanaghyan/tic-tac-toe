import './Layout.style.css'

export default function Layout(props) {
  return (
    <div className="layout-container">
      <div className="layout">{props.child}</div>
    </div>
  );
}
