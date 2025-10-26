// App.js
import React, { useState } from "react";
import Home from "./Home";
import ChatApp from "./ChatInterFace/ChatPage";
import "./ChatBot.css";

function App() {
  let [HomeChat, setHomeChat] = useState(false);

  function toggleHomeChat() {
    setHomeChat(true)
    console.log("ho gaya click");

  }
  return <div className="app">{HomeChat ? <ChatApp /> : <Home toggleHomeChat = {toggleHomeChat}/>}</div>;

  
}

export default App;

