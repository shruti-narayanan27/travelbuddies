import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Profile from "./Profile";
import Text from "./Text";
import Uber from "./Uber";
import Guide from "./Guide";
import CreateProfilePage from "./CreateProfilePage";
import Header from "./Header";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        {/* ✅ Top Header Bar */}
        <Header />

        {/* ✅ Main Page Content */}
        <div className="square-layout">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/text" element={<Text />} />
            <Route path="/uber" element={<Uber />} />
            <Route path="/create" element={<CreateProfilePage />} />
            <Route path="/guide" element={<Guide />} />
          </Routes>
        </div>

        {/* ✅ Bottom Navigation */}
        <div className="bottom-nav">
          <Link to="/">🏠</Link>
          <Link to="/guide">🗺️</Link> 
          <Link to="/text">💬</Link>
          <Link to="/profile">🐻</Link>
          <Link to="/create">📝</Link> 
        </div>
      </div>
    </Router>
  );
}

export default App;