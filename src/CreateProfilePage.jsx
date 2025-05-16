import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, addDoc, updateDoc, collection } from "firebase/firestore";
import db from "./firebase";
import "./CreateProfilePage.css";

function CreateProfilePage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    location: "",
    transport: "Uber",
    traits: ["", "", ""],
  });

  const [existingDocId, setExistingDocId] = useState(null);

  // Load existing profile if it exists
  useEffect(() => {
    const fetchSavedProfile = async () => {
      const savedId = localStorage.getItem("profileId");
      if (!savedId) return;

      try {
        const ref = doc(db, "profiles", savedId);
        const snap = await getDoc(ref);
        if (snap.exists()) {
          const data = snap.data();
          setFormData({
            name: data.name || "",
            age: data.age || "",
            gender: data.gender || "",
            location: data.location || "",
            transport: data.transport || "Uber",
            traits: data.traits || ["", "", ""],
          });
          setExistingDocId(savedId); // ✅ set for later updating
        }
      } catch (err) {
        console.error("Failed to load saved profile:", err);
      }
    };

    fetchSavedProfile();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTraitChange = (index, value) => {
    const updatedTraits = [...formData.traits];
    updatedTraits[index] = value;
    setFormData((prev) => ({ ...prev, traits: updatedTraits }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (existingDocId) {
        // ✅ Update existing profile
        const ref = doc(db, "profiles", existingDocId);
        await updateDoc(ref, formData);
        navigate(`/profile?id=${existingDocId}`);
      } else {
        // ➕ Create new profile
        const docRef = await addDoc(collection(db, "profiles"), formData);
        localStorage.setItem("profileId", docRef.id);
        navigate(`/profile?id=${docRef.id}`);
      }
    } catch (err) {
      console.error("Failed to save profile:", err);
      alert("Something went wrong while saving.");
    }
  };

  return (
    <div className="create-page">
      <div className="search-bar">
        <button className="menu-icon">☰</button>
        <input type="text" placeholder="Hinted search text" />
        <button className="search-icon">🔍</button>
      </div>

      <form className="create-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input name="age" type="number" placeholder="Age" value={formData.age} onChange={handleChange} required />
        <input name="location" placeholder="Location" value={formData.location} onChange={handleChange} required />
        <select name="gender" value={formData.gender} onChange={handleChange} required>
          <option value="">Gender</option>
          <option>Female</option>
          <option>Male</option>
          <option>Other</option>
        </select>
        <select name="transport" value={formData.transport} onChange={handleChange} required>
          <option>Uber</option>
          <option>Lyft</option>
          <option>Bus</option>
        </select>
        {formData.traits.map((t, i) => (
          <input
            key={i}
            placeholder={`Trait ${i + 1}`}
            value={t}
            onChange={(e) => handleTraitChange(i, e.target.value)}
            required
          />
        ))}
        <button type="submit">{existingDocId ? "Update Profile" : "Save Profile"}</button>
      </form>
    </div>
  );
}

export default CreateProfilePage;