

import React, { useState } from "react";
import "./Form.css";

function Form({ messages, isLoader }) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  let [prompt, setPrompt] = useState("");
  let [isLoading, setIsLoading] = useState(false);

  let handleInput = (evt) => {
    setPrompt(evt.target.value);
  };

  const payload = {
    contents: [
      {
        parts: [{ text: prompt }],
      },
    ],
  };

  async function getAnswer() {
    try {
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;
      let response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!response.ok) {
        throw new Error(
          `the request was bad due to some error: ${response.status}`
        );
      }
      let result = await response.json();
      const candidate = result.candidates?.[0];
      if (candidate && candidate.content?.parts?.[0]?.text) {
        return candidate.content.parts[0].text;
      } else {
        throw new Error("api na galat respone bheja hai bhai");
      }
    } catch (err) {
      console.log(err);
      throw new Error(`Error is happened ,plase try agin: ${err.message} Data`);
    }
  }

  let handleFormSubmit = async (evt) => {
    evt.preventDefault();
    setIsLoading(true);

    if (!prompt.trim()) {
      messages("System", "Please enter a message first!");
      setIsLoading(false);
      return;
    }
    isLoader(true);

    try {
      let apiAnswer = await getAnswer();
      if (apiAnswer) {
        let cleanAns = apiAnswer.replace(/\*/g, "");
        messages(prompt, cleanAns);
        setPrompt("");
      }
    } catch (error) {
      console.log(error);
      messages(prompt, error.message);
    } finally {
      setIsLoading(false);
      isLoader(false);
      setPrompt("")
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="input-container">
          <label className="input-wrapper">
            <div className="input-inner">
              <input
                placeholder="Type your message..."
                className="message-input"
                onChange={handleInput}
                value={prompt}
              />
              <div className="input-actions">
                <div className="action-buttons">
                  <button className="send-button" type="submit">
                    {isLoading ? (
                      <div className="spinner" id="loadingSpinner"></div>
                    ) : (
                      <div className="send-icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          fill="currentColor"
                          viewBox="0 0 256 256"
                        >
                          <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.42,29.84l85.62,40.55,40.55,85.62A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14L118.42,148.9l47.24-47.25a8,8,0,0,0-11.31-11.31L107.1,137.58,24,98.22l.14,0L216,40Z"></path>
                        </svg>
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </label>
        </div>
      </form>
      {/* {answer && (
        <div className="server-answer">
          <strong>API ka jawab:</strong> {answer}
        </div>
      )} */}
    </>
  );
}

export default Form;
