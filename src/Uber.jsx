import React from "react";
import "./Uber.css";

const profiles = [
  { name: "Emily Leong, 20", gender: "Female", service: "Uber", stars: 5, rating: 5.0 },
  { name: "Kourtney Kardashian", gender: "Female", service: "Uber", stars: 3, rating: 3.2 },
  { name: "Daniel Kim, 19", gender: "Male", service: "Lyft", stars: 1, rating: 1.2 },
  { name: "Kimi Chin", gender: "Female", service: "Uber", stars: 3, rating: 3.2 },
  // add more profiles as needed
];

function getRatingClass(rating) {
  if (rating >= 4) return "green";
  if (rating >= 2) return "yellow";
  return "red";
}

function Uber() {
  return (
    <div className="results-page">
      <div className="search-bar">
        <button className="menu-icon">☰</button>
        <input type="text" placeholder="Hinted search text" />
        <button className="search-icon">🔍</button>
      </div>

      <div className="location-header">San Francisco, CA</div>

      <div className="results-list">
        {profiles.map((profile, i) => (
          <div className="profile-card" key={i}>
            <div className="avatar" />
            <div className="profile-info">
              <p><strong>{profile.name}</strong></p>
              <p>{profile.gender}</p>
              <p>{profile.service}</p>
              <p className="stars">{"⭐".repeat(profile.stars)}</p>
            </div>
            <div className={`rating ${getRatingClass(profile.rating)}`}>{profile.rating}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Uber;
