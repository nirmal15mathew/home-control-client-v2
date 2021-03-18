import "./SwitchBoard.css"
function SwitchBoard(props) {
    return (
        <ul className="switch-board">
            { props.children }
        </ul>
    )
}

export default SwitchBoard;