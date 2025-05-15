import React, { useState } from "react";
import "./Text.css";

function Text() {
  const [messages, setMessages] = useState([
    { sender: "them", text: "Hey! You still good for 8 AM?" },
    { sender: "me", text: "Yup, I’ll be there at 7:55 :)" },
    { sender: "them", text: "Awesome! I'm outside Hedrick." },
    { sender: "me", text: "Perfect! See you soon." },
    { sender: "them", text: "Let me know if you're running late." }
  ]);

  const [input, setInput] = useState("");

  const sendMessage = () => {
    const trimmed = input.trim();
    if (trimmed === "") return;
    setMessages([...messages, { sender: "me", text: trimmed }]);
    setInput("");
  };

  return (
    <div className="text-page">
      {/* Top Search Bar */}
      <div className="search-bar">
        <button className="menu-icon">☰</button>
        <input type="text" placeholder="Hinted search text" />
        <button className="search-icon">🔍</button>
      </div>

      {/* Chat Messages */}
      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>

      {/* Input Section */}
      <div className="input-bar">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Text;
