"use client";
import Head from "next/head";
import UserCard from "../components/chatUserCard/UserCard";
import styles from "./chatbox.module.css";
import { useEffect, useRef, useState } from "react";

const demoUserName = [
  {
    id: 1,
    userName: "Lokesh Khanna",
    tagMessage: "Our company needs to prepare",
  },
  {
    id: 2,
    userName: "Arjun Mehta",
    tagMessage: "Innovation drives success",
  },
  {
    id: 3,
    userName: "Sanya Gupta",
    tagMessage: "Teamwork makes the dream work",
  },
  {
    id: 4,
    userName: "Vikram Rao",
    tagMessage: "Quality over quantity",
  },
  {
    id: 5,
    userName: "Neha Sharma",
    tagMessage: "Excellence in every task",
  },
  {
    id: 6,
    userName: "Rohan Verma",
    tagMessage: "Customer satisfaction first",
  },
  {
    id: 7,
    userName: "Priya Singh",
    tagMessage: "Always learning, always growing",
  },
  {
    id: 8,
    userName: "Ankit Joshi",
    tagMessage: "Commitment to success",
  },
  {
    id: 9,
    userName: "Pooja Patel",
    tagMessage:
      "Integrity in all we do lo sdfasf sd fsjfhiwuei wie isfjiw efiw fuhjf",
  },
  {
    id: 10,
    userName: "Karan Malhotra",
    tagMessage: "Strive for greatness",
  },
];

const ChatBox = () => {
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([]);
  // const [searchText, setSearchText] = useState("");
  const [isSideBarOpen, setIsSideBarOpen] = useState(true);
  //for scrolling to the bottom of the chatbox after every message
  const messageListRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  // const handleSearchFunction = (e) => {
  //   setSearchText(e.target.value);
  // };

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
            text: "Hi there! How can I assist you today?😊    Feel free to ask me anything, and I'll do my best to help!",
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

  const toggleSideBar = () => setIsSideBarOpen((pre) => !pre);

  return (
    <>
      <Head>
        <title>Axamine - ChatBox</title>
        <meta
          name="description"
          content="Chat with Axamine's AI-integrated diagnostic system."
        />
        <meta
          name="keywords"
          content="Axamine, AI, Diagnostic, Chat, Healthcare, Technology"
        />
        <link rel="canonical" href="https://www.axamine.in/chatbox" />
      </Head>
      <div className={styles.main}>
        <section
          id="chatbox"
          className={isSideBarOpen ? styles.sideBarOpen : styles.sideBarClose}
        >
          <aside className={styles.userAsideBar}>
            {/* commented the search bar, may be get to use in the future... */}
            {/* <div className={styles.userSearchBar}>
            <img
              src="./searchIcon.png"
              alt="searchIcon"
              className={styles.searchIcon}
            />
            <input
              type="text"
              placeholder="Search here..."
              className={styles.searchBar}
              value={searchText}
              onChange={handleSearchFunction}
            />
          </div> */}
            <div className={styles.sideBarToggleBtn} onClick={toggleSideBar}>
              <img src="./sideBarCloseBtn.png" alt="sideBarImage" />
            </div>
            <div className={styles.users}>
              {demoUserName.length === 0 ? (
                <p className={styles.noUserMessage}>No user</p>
              ) : (
                demoUserName?.map((user, index) => (
                  <UserCard key={index} data={user} />
                ))
              )}
            </div>
          </aside>
          <div className={styles.chatBox}>
            <div
              className={
                isSideBarOpen
                  ? styles.sideBarToggleBtn
                  : `${styles.sideBarToggleBtn} ${styles.showSideBar}`
              }
              onClick={toggleSideBar}
            >
              <img src="./sideBarOpenBtn.png" alt="sideBarImage" />
            </div>
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
                messages?.map((message, index) => (
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
                    <div className={styles.message}>
                      {message.text}
                      <div className={styles.messageIdicator}></div>
                    </div>
                  </div>
                ))
              )}
            </div>
            <form onSubmit={handleSubmit} className={styles.inputForm}>
              <button type="button" className={styles.sendButton}>
                <img src="./chatBoxFileBtn.png" alt="sendButton" />
              </button>
              <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type your message..."
                className={styles.inputField}
                required
              />
              <button type="submit" className={styles.sendButton}>
                <img src="./sendBtn.png" alt="sendButton" />
              </button>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default ChatBox;
