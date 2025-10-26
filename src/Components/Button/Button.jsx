import React from "react";
import "./Buttton.css";
function Button({ newChat, toggleHomeChat }) {
  const handleStartChat = (evt) => {
    if (newChat) {
      newChat();
      return;
    }
    if (toggleHomeChat) {
      toggleHomeChat();
      return;
    }
  };
  return (
    <button className="btn" onClick={handleStartChat}>
      Start Chat
    </button>
  );
}

export default Button;
