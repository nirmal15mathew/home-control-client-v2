import "./style.css"
import { useRef } from "react"

function ToggleSwitch(props) {
    const { rounded, height, width, activeColor, setState } = props 
    let styles = {}
    styles['--switch-height'] = height
    styles['--switch-width'] = width
    styles['--active-color'] = activeColor
    const checkBox = useRef(null)
    return (
        <label className="switch" style={styles}>
            <input type="checkbox" ref={checkBox} onChange={_ => {
                setState(checkBox.current.checked)
            }}/>
            <span className={rounded ? "slider round" : "slider"}></span>
        </label>
    );
}

export default ToggleSwitch;
