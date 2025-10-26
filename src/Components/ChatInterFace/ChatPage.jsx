// components/ChatInterface.js
import React, { useState, useRef, useEffect } from "react";

// import React, { useState } from "react";
import "./ChatPage.css";
import AiMsg from "./AiMsg";
import UserMsg from "./UserMsg";
import Form from "./Form";
import Header from "../Header/Header";
import { v4 as uuidv4 } from "uuid";
import LoaderAnimation from "./LoaderAnimation";
console.log(uuidv4());

const ChatInterface = () => {
  let [ansQuest, setAnsQuest] = useState([
    {
      Userquestion: "Hey there! How are you today?",
      AI_Answer:
        "Hi! I'm your friendly chatbot. Ask me anything — I can help you with coding, general info, or just a quick chat!",
      id: uuidv4(),
    },
  ]);

  let [loader, setIsLoader] = useState(false);

  // For Scroll 
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [ansQuest]);

  function messages(prompt, answer,id) {
    setAnsQuest((prevStuff) => {
      // console.log(prevStuff);

      return [...prevStuff, { Userquestion: prompt, AI_Answer: answer , id: uuidv4() }];
    });
    // console.log(ansQuest);
  }
  const StartNewChart = () => {
    console.log("ya li jiya nae chat khol gai!");
    setAnsQuest([
      {
        Userquestion: "Hey there! How are you today?",
        AI_Answer:
          "Hi! I'm your friendly chatbot. Ask me anything — I can help you with coding, general info, or just a quick chat!",
        id: uuidv4(),
      },
    ]);
  };
  let isLoader = (isLoading) => {
    setIsLoader(isLoading);
  };
  return (
    <>
      <Header newChat={StartNewChart} />
      <div className="chat-interface">
        <div className="layout-content-container">
          <h2 className="welcome-title">Welcome to SmartTalk</h2>
          <p className="welcome-description">
            "Start exploring with our AI-powered SmartTalk chatbot. Ask
            questions, get instant answers, and enjoy personalized assistance
            for anything you need — from learning to planning to daily help."
          </p>
        
          {ansQuest.map((item) => {
            return (
              <div key={item.id}>
                <UserMsg userMsg={item} />
                <AiMsg aiMsg={item} />
              </div>
            );
          })}
          {loader && <LoaderAnimation />}


          <div ref={messagesEndRef} />
        </div>
        <Form messages={messages} isLoader={isLoader} />
      </div>
    </>
  );
};

export default ChatInterface;
