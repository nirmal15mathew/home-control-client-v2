function TabbedMenu(props){
    const { menuItems, activeTab, setTab } = props
    let menuItemsElement = menuItems.map((item, i) => (
        <li className={ activeTab === i ? "menu-item active" : "menu-item"} key={i} onClick={_ => {
            setTab(i)
        }}>
            { item }
        </li>
    ))
    return (
        <menu className="tabbed-menu">
            <ul className="menu-list">
                { menuItemsElement }
            </ul>
        </menu>
    )
}

export default TabbedMenu;