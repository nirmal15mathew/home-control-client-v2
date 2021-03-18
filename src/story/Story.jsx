import "./Story.css";
import { useState, useContext, useEffect, useRef } from "react";
import { SocketContext } from "../App";
import LoadingIndicator from "./LoadingIndicator";

function Story() {
  let [connectionState, setConnection] = useState(false);
  const messageInputRef = useRef(null);
  const socketContext = useContext(SocketContext);
  useEffect(() => {
    setConnection(socketContext.connected);
    console.log("updated");
  }, [socketContext]);
  return (
    <>
      <h1>Story Mode</h1>
      {connectionState ? <h3>Connected</h3> : <LoadingIndicator />}
      <input placeholder="Message" ref={messageInputRef} className="input"></input>
      <button
        className="button primary"
        onClick={(_) => {
          socketContext.emit("test", {
            message: messageInputRef.current.value,
          });
          console.log(messageInputRef.current.value);
          messageInputRef.current.value = "";
        }}
      >
        Send
      </button>
    </>
  );
}

export default Story;
