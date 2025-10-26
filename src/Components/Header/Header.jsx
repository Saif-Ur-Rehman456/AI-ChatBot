// components/Header.js
import React from "react";
import "./Header.css";
import Button from "../Button/Button";
const Header = ({ newChat, toggleHomeChat }) => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-icon">
          <svg
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <h2 className="logo-text">SmartTalk</h2>
      </div>
      <div className="header-right">
        <Button newChat={newChat} toggleHomeChat={toggleHomeChat} />
      </div>
    </header>
  );
};

export default Header;
