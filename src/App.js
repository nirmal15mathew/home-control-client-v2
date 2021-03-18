//import logo from './logo.svg';
import AppContainer from "./components/AppContainer"
import { BrowserRouter } from "react-router-dom"

import { io } from "socket.io-client";
import { createContext } from "react"
import './App.css';

const socket = io('http://localhost:8000')
const SocketContext = createContext(socket)
console.log(socket)

function App() {
  return (
    <div className="App">
      <SocketContext.Provider value={socket}>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
      </SocketContext.Provider>
    </div>
  );
}

export default App;
export {
  SocketContext
};
