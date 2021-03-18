import "./BottomNavBar.css"

function BottomNavBar(props){
    return (
        <nav className="bottom-navbar">
            { props.children }
        </nav>
    )
}

export default BottomNavBar;