// dependency
import { SocketContext } from "../App";
import { useContext, useState } from "react";

// components and styles
import "./Pages.css";
import MaterialIcon from "../components/MaterialIcon";
import AddSwitch from "../components/AddSwitch";
import AppHeader from "../components/AppHeader";
import SwitchBoard from "../components/SwitchBoard";
import ControlSwitch from "../components/ControlSwitch";

function Home() {
  // socketcontext from the parent
  let socket = useContext(SocketContext);
  let [switches, setSwitches] = useState([]); // state that holds all the switches

  // rendering list of switches
  const switchesList = switches.map((item, i) => (
    <ControlSwitch
      title={item.title}
      setState={item.setState}
      key={i}
    ></ControlSwitch>
  ));
  
  return (
    <main className="page home">
      <AppHeader>
        <h2 className="app-title">Home Control</h2>
        {socket.connected ? (
          <MaterialIcon iconName="wifi" />
        ) : (
          <MaterialIcon iconName="wifi_off" />
        )}
      </AppHeader>
      <SwitchBoard>
        {switchesList}
        <AddSwitch>
          <button
            className="add-switch"
            onClick={(_) => {
              const newSwitch = {
                title: "New Switch",
                setState: function (value) {
                  socket.emit("user:command", {
                    command: `pin${switches.length}`,
                    value: value,
                  });
                },
              };
              setSwitches([...switches, newSwitch]);
              socket.emit("user:command", {
                command: "new-pin",
                value: switches.length  
              })
            }}
          >
            Add Switch
          </button>
        </AddSwitch>
      </SwitchBoard>
    </main>
  );
}

export default Home;
