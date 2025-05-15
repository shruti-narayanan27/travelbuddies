import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTraitChange = (index, value) => {
    const updatedTraits = [...formData.traits];
    updatedTraits[index] = value;
    setFormData((prev) => ({ ...prev, traits: updatedTraits }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ✅ Navigate to /profile and pass form data directly
    navigate("/profile", { state: { profile: formData } });
  };

  return (
    <div className="create-page">
      <div className="search-bar">
        <button className="menu-icon">☰</button>
        <input type="text" placeholder="Hinted search text" />
        <button className="search-icon">🔍</button>
      </div>

      <form className="create-form" onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="age" type="number" placeholder="Age" onChange={handleChange} required />
        <input name="location" placeholder="Location" onChange={handleChange} required />
        <select name="gender" onChange={handleChange} required>
          <option value="">Gender</option>
          <option>Female</option>
          <option>Male</option>
          <option>Other</option>
        </select>
        <select name="transport" onChange={handleChange} required>
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
        <button type="submit">Save Profile</button>
      </form>
    </div>
  );
}

export default CreateProfilePage;
