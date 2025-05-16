
import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-container">
      <div className="search-bar">
        <button className="menu-icon">☰</button>
        <input type="text" placeholder="Hinted search text" />
        <button className="search-icon">🔍</button>
      </div>

      <div className="calendar-box">
        <div className="calendar-header">May 2025</div>

        <div className="calendar-days">
          <div>SUN</div><div>MON</div><div>TUE</div><div>WED</div><div>THU</div><div>FRI</div><div>SAT</div>
        </div>

        <div className="calendar-dates">
  {[...Array(4)].map((_, i) => (
    <div key={`empty-${i}`} className="date"></div> // Empty cells for Sun–Wed
  ))}

  {Array.from({ length: 31 }, (_, i) => {
    const day = i + 1;
    const className =
      day === 17
        ? "highlight-blue"
        : day === 26
        ? "highlight-circle"
        : "";
    return (
      <div key={day} className={`date ${className}`}>
        {day}
      </div>
    );
  })}
</div>


        <div className="time-picker">
          <input type="time" value="08:00" readOnly />
        </div>
      </div>

      <div className="transport-buttons">
        <button onClick={() => navigate("/uber")}>UBER</button>
        <button onClick={() => navigate("/uber")}>LYFT</button>
        <button onClick={() => navigate("/uber")}>BUS</button>
      </div>
    </div>
  );
}

export default Home;





