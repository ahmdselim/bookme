import React, { Fragment, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [startDate, setStartDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const [dataList, setDataList] = useState([]);
  const [error, setError] = useState([]);
  const [countryL, setCountryL] = useState("");
  const [destination, setDestination] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (destination === "") {
      setError("من فضلك ادخل وجهتك");
    } else if (countryL === "") {
      setError("من فضلك اختار دولتك");
    } else {
      setError("");
      navigate(`/search/${destination}/${countryL}`);
    }
  };

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((res) => {
        return res.json();
      })
      .then((data) => setDataList(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="header">
      <div className="row">
        <h1>ابحث عن إقامتك التالية</h1>
        <p>استكشف العروض على الفنادق والبيوت وغيرها الكثير ...</p>
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
            <select onChange={(e) => setCountryL(e.target.value)}>
              <option>اختار دولتك</option>
              {dataList.length !== 0
                ? dataList.data.map((data, i) => (
                    <Fragment key={i}>
                      <option value={data.country}>{data.country}</option>
                    </Fragment>
                  ))
                : null}
            </select>
          </div>
          <div>
            <button type="button" onClick={() => handleSearch()}>
              بحث
            </button>
          </div>
        </form>
      </div>
      {error.length !== 0 ? (
        <strong
          style={{
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {error}
        </strong>
      ) : null}
    </div>
  );
};

export default Header;
