function MaterialIcon(props){
    const { iconName } = props
    return (
        <i className="material-icons">
            { iconName }
        </i>
    )
}

export default MaterialIcon;