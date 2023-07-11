import { query, collection, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import React, { useState, useEffect, useRef } from "react";
import Message from "./Message";
import SendMessages from "./SendMessages";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const messageEl = useRef(null);

  useEffect(() => {
    if (messageEl) {
      messageEl.current.addEventListener("DOMNodeInserted", (event) => {
        const { currentTarget: target } = event;
        target.scroll({ top: target.scrollHeight, behavior: "smooth" });
      });
    }
  }, []);

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div
        ref={messageEl}
        className="flex flex-col p-[10px] relative overflow-auto mb-[50px]"
      >
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </div>
      {/* Send Message Compoenent */}
      <SendMessages />
    </>
  );
};

export default Chat;
