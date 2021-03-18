import BottomNavBar from "./BottomNavBar"
import TabbedMenu from "./TabbedMenu"
import TabOption from "./TabOption"
import { Switch, Route } from "react-router-dom"
import { useState } from "react"
import Home from "../pages/Home"
import Dashboard from "../pages/Dashboard"
import Settings from "../pages/Settings"


function AppContainer(props){
    const [activeTab, setTab] = useState(0)
    let tabs = [
        <TabOption icon="home" link="/"/>,
        <TabOption icon="dashboard" link="/dashboard"/>,
        <TabOption icon="settings" link="/settings"/>
    ]
    return (
        <>
            <Switch>
                <Route path="/" exact>
                    <Home></Home>
                </Route>
                <Route path="/dashboard">
                    <Dashboard></Dashboard>
                </Route>
                <Route path="/settings">
                    <Settings></Settings>
                </Route>
            </Switch>
            <BottomNavBar>
                <TabbedMenu menuItems={tabs} activeTab={activeTab} setTab={setTab}/>
            </BottomNavBar>
        </>
    )
}

export default AppContainer;