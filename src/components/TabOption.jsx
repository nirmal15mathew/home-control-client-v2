import { Link } from "react-router-dom"
import MaterialIcon from "./MaterialIcon"

function TabOption(props){
    const { icon, link } = props
    return (
        <Link to={link}>
            <MaterialIcon iconName={icon}/>
        </Link>
    )
}

export default TabOption;