import React, { useState } from 'react';
import './Text.css';

const demoMessages = {
  "Emily Leong": [
    { from: "them", text: "Hey! You still good for 8 AM?" },
   /* { from: "you", text: "Yup, I’ll be there at 7:55 :)" },
    { from: "them", text: "Awesome! I'm outside Hedrick." },
    { from: "you", text: "Perfect! See you soon." },*/
  ],
  "Kourtney Kardashian": [
    { from: "them", text: "Do you want to carpool to LAX today?" },
  ],
  "Daniel Kim": [
    { from: "them", text: "I'm going to Santa Monica in 20, want a ride?" },
  ],
};

const people = ["Emily Leong", "Kourtney Kardashian", "Daniel Kim"];

export default function Text() {
  const [selectedPerson, setSelectedPerson] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handlePersonClick = (person) => {
    setSelectedPerson(person);
    setMessages(demoMessages[person] || []);
    setInput("");
  };

  const handleInputKeyPress = (e) => {
    if (e.key === 'Enter' && input.trim() !== "") {
      setMessages(prev => [...prev, { from: "you", text: input }]);
      setInput("");
    }
  };

  return (
    <div className="text-page">
      <h2 className="text-header">💬 Message your travel buddies</h2>
      <div className="text-container">
        <div className="sidebar">
          {people.map((person, index) => (
            <div
              key={index}
              className={`person ${selectedPerson === person ? 'active' : ''}`}
              onClick={() => handlePersonClick(person)}
            >
              {person}
            </div>
          ))}
        </div>
        <div className="chat">
          {selectedPerson ? (
            <>
              <div className="chat-box">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`message ${msg.from === "you" ? "you" : "them"}`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
              <input
                className="chat-input"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={handleInputKeyPress}
              />
            </>
          ) : (
            <div className="placeholder">Select a person to start messaging</div>
          )}
        </div>
      </div>
    </div>
  );
}
