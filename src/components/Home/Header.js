import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [startDate, setStartDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");

  return (
    <div className="header">
      <div className="row">
        <h1>ابحث عن إقامتك التالية</h1>
        <p>استكشف العروض على الفنادق والبيوت وغيرها الكثير...</p>
      </div>
      <div className="row">
        <form onSubmit={() => navigate(`/search/${destination}`)}>
          <div>
            <input
              type="text"
              placeholder="ماهي وجهتك ؟ "
              onChange={(e) => setDestination(e.target.value)}
            />
          </div>
          <div>
            <input
              type="date"
              defaultValue={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              min={new Date().toISOString().slice(0, 10)}
            />
          </div>
          <div>
            <button
              type="button"
              onClick={() => navigate(`/search/${destination}`)}
            >
              بحث
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;
