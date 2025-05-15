import React from "react";
import { useLocation } from "react-router-dom";
import "./Profile.css";

function Profile() {
  const location = useLocation();

  // Get profile data passed from CreateProfilePage.jsx
  const profile = location.state?.profile || {
    name: "N/A",
    age: "N/A",
    gender: "N/A",
    location: "N/A",
    transport: "N/A",
    traits: [],
  };

  return (
    <div className="profile-page">
      <div className="search-bar">
        <button className="menu-icon">☰</button>
        <input type="text" placeholder="Hinted search text" />
        <button className="search-icon">🔍</button>
      </div>

      <div className="profile-card">
        <button className="back-arrow">←</button>
        <div className="profile-info">
          <div className="avatar" />
          <div>
            <p><strong>{profile.name}, {profile.age}</strong></p>
            <p>{profile.gender}</p>
            <p>{profile.transport}</p>
            <p>{profile.location}</p>
            <p>⭐⭐⭐⭐⭐</p>
          </div>
        </div>

        <div className="tags">
          {(profile.traits?.length > 0 ? profile.traits : ["N/A"]).map((trait, i) => (
            <span key={i}>{trait || "N/A"}</span>
          ))}
        </div>

        <div className="profile-buttons">
          <button>Add to Group</button>
          <button>Chat</button>
        </div>
      </div>
    </div>
  );
}

export default Profile;
