import React from "react";
import "./Guide.css";

function Guide() {
  return (
    <div className="guide-page">
      <h2>🧭 Travel Guide for New Bruins</h2>
      <p>Explore popular spots and safe areas around LA!</p>

      <div className="guide-section">
        <h3>🎓 UCLA Campus</h3>
        <ul>
          <li>Royce Hall</li>
          <li>Inverted Fountain</li>
          <li>Kerckhoff Coffee House</li>
        </ul>
        <img
            className="guide-image"
            src="https://s3.amazonaws.com/cms.ipressroom.com/173/files/20239/65383fe52cfac22cda2a0705_UCLA+Instagram/UCLA+Instagram_5d2ea2ad-e99a-4fa7-8b81-8c822c3d7b93-prv.jpg"
            alt="UCLA Campus"
        />
      </div>



      <div className="guide-section">
        <h3>🌇 Westwood Favorites</h3>
        <ul>
          <li>Diddy Riese</li>
          <li>Hammer Museum</li>
          <li>Fat Sal's</li>
        </ul>
      </div>

      <div className="guide-section">
        <h3>🌴 LA Tourist Spots</h3>
        <ul>
          <li>Santa Monica Pier</li>
          <li>Melrose Ave</li>
          <li>The Grove</li>
        </ul>
      </div>
    </div>
  );
}

export default Guide;
