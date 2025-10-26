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
      Userquestion:
        "  I'm thinking of a trip to Paris. I'd like to see the Eiffel Tower,visit some museums, and maybe take a cooking class.",
      AI_Answer:
        //  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos mollitia, dolore consequatur earum aliquid explicabo totam optio saepe, accusantium laborum error quam sequi quia dolorem, quaerat provident. Repellat saepe a aperiam est beatae provident error corporis soluta tempora vel recusandae possimus similique nemo hic amet quos tenetur earum, tempore fugit quasi enim? Exercitationem ad neque autem molestiae deleniti repellendus, recusandae debitis provident, sed error odio dolor sunt tempora optio dolorem? Obcaecati aperiam repudiandae voluptatem deserunt at voluptatibus laboriosam iste ea pariatur laudantium mollitia enim consequuntur aut, culpa ad dolorem qui ab fuga placeat delectus tenetur porro asperiores. Consequatur, quae harum!"
        " Hi there! Ready to plan your next adventure? Tell me where you'd like to go and what you're interested in doing.",
        id: uuidv4(),
    },
  ]);

  let [loader, setIsLoader] = useState(false);

  // Scroll ke liye naya code
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
        Userquestion:
          "  I'm thinking of a trip to Paris. I'd like to see the Eiffel Tower,visit some museums, and maybe take a cooking class.",
        AI_Answer:
          " Hi there! Ready to plan your next adventure? Tell me where you'd like to go and what you're interested in doing.",
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
          {/* <div className="chatMesages">
            <AiMsg userMsg={ansQuest} />
            <UserMsg aiMsg={ansQuest} />
          </div> */}
          {ansQuest.map((item) => {
            return (
              <div key={item.id}>
                <UserMsg userMsg={item} />
                <AiMsg aiMsg={item} />
              </div>
            );
          })}
          {loader && <LoaderAnimation />}

          {/* <LoaderAnimation/> */}

          <div ref={messagesEndRef} />
        </div>
        <Form messages={messages} isLoader={isLoader} />
      </div>
    </>
  );
};

export default ChatInterface;
