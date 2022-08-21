import React, { useState, useEffect, useRef, useContext } from "react";
import "./App.css";
import { io } from "socket.io-client";
import { ContextApi } from "./components/Context";

function App(props) {
   const {  name} =
   useContext(ContextApi);
   const [feedback] = useState("");
   const socket = useRef();
   let getId = (id) => document.getElementById(id);

   useEffect(() => {
      socket.current = io("http://localhost:9013");
      socket.current.on("chat", function(data) {
      let output = getId("output")
   output.innerHTML +=
      "<p><strong>" + name + ": </strong> " + data.message + "</p>";
      // "<p><strong>" + data.handle + ": </strong> " + data.message + "</p>";
});

   }, []);
   
   const HandleSend = () => {
      let message = getId("message"),
         // handle = getId("handle");
         handle = name.value
      socket.current.emit(
         "chat",
         {
               "message": message.value,
               // "handle": handle.value,
               "handle": name.value,
            }
      );
   };
   return (
      <div className="App">
         <div id="mario-chat">
            <h2 className="h2" >Bizning Chat</h2>
            <div id="chat-window">
               <div id="output">
               </div>
               <div id="feedback">{feedback}</div>
            </div>
            {/* <input className="input" id="handle" type="text" placeholder="Handle" /> */}
            <input className="input" id="message" type="text" placeholder="Message" />
            <button className="button" type="button" id="send" onClick={HandleSend}>
               Jo'natish
            </button>
         </div>
      </div>
   );
}

export default App;
