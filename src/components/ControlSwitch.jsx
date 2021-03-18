import "./SwitchBoard.css"
import ToggleSwitch from "./toggle_switch/ToggleSwitch";

function ControlSwitch(props) {
  const { title, setState } = props;
  return (
    <li className="control-switch">
      <label className="switch-title">{title}</label>
        <span></span>
        <span></span>
      <span className="switch-container">
      <ToggleSwitch
        height="1.2em"
        width="3em"
        rounded={true}
        setState={setState}
      ></ToggleSwitch>
      </span>
    </li>
  );
}

export default ControlSwitch;