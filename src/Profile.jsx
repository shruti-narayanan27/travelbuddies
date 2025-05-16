import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import db from "./firebase";
import "./Profile.css";

function Profile() {
  const [searchParams] = useSearchParams();
  const profileId = searchParams.get("id");

  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      if (!profileId) return;

      try {
        const docRef = doc(db, "profiles", profileId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProfile(docSnap.data());
        } else {
          alert("Profile not found.");
        }
      } catch (err) {
        alert("Error loading profile.");
        console.error(err);
      }
      setLoading(false);
    };

    fetchProfile();
  }, [profileId]);

  if (loading) return <div className="profile-page">Loading profile...</div>;
  if (!profile) return <div className="profile-page">Profile not found.</div>;

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