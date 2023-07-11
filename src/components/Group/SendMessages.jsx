import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../../firebase";

const SendMessages = ({ scroll }) => {
  const [input, setInput] = useState("");

  const sendMessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("Please enter a valid message");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
  };

  return (
    <form
      onSubmit={sendMessage}
      className="h-14 w-full max-w-[728px] flex text-xl absolute bottom-0"
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full text-xl p-3 bg-gray-900 text-white outline-none border-none rounded-xl"
        type="text"
        placeholder="Message"
      />
      <button
        className="w-[15%] h-12 bg-green-500 absolute right-1 top-1 rounded-xl"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default SendMessages;
