"use client";
import styles from "./chatbox.module.css";
import { useEffect, useRef, useState } from "react";

const ChatBox = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  //for scrolling to the bottom of the chatbox after every message
  const messageListRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, sender: "user" }]);
      setInputValue("");
      // Here, you can add logic to send the message to the backend and receive the response
      // For now, we'll simulate a response from the backend
      setTimeout(() => {
        setMessages([
          ...messages,
          { text: inputValue, sender: "user" },
          {
            text: "This is a simulated response from the backend.",
            sender: "chatbot",
          },
        ]);
      }, 1000);
    }
  };

  const scrollToBottom = () => {
    const messageList = messageListRef.current;
    if (messageList) {
      messageList.scrollTop = messageList.scrollHeight;
    }
  };

  return (
    <div className={styles.main}>
      <section id="chatbox">
        <div className={styles.chatBox}>
          <div className={styles.messageList} ref={messageListRef}>
            {messages.length === 0 ? (
              <div className={styles.emptyChat}>
                <img
                  src="./empty-chat.png"
                  alt="Empty Chat"
                  className={styles.emptyChatImage}
                />
                <p className={styles.emptyChatText}>No messages yet</p>
              </div>
            ) : (
              messages.map((message, index) => (
                <div
                  key={index}
                  className={`${styles.messageContainer} ${
                    message.sender === "user"
                      ? styles.userMessage
                      : styles.chatbotMessage
                  }`}
                >
                  <img
                    src={
                      message.sender === "user"
                        ? "./userIcon.png"
                        : "./chatbot.png"
                    }
                    alt={`${message.sender} Icon`}
                    className={styles.messageIcon}
                  />
                  <div className={styles.message}>{message.text}</div>
                </div>
              ))
            )}
          </div>
          <form onSubmit={handleSubmit} className={styles.inputForm}>
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className={styles.inputField}
              required
            />
            <button
              type="submit"
              className={`${styles.sendButton} buttonWithGradient`}
            >
              Send
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ChatBox;
