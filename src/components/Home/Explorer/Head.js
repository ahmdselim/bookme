import React from "react";
import img1 from "../../../images/1.jpg";
import img2 from "../../../images/2.jpg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Head = () => {
  const drug = useSelector((state) => state.Reducer.drug);

  return (
    <div className="ExplorerHead">
      <ul>
        {drug &&
          drug.map((data, i) => (
            <li key={i}>
              <div className="overlay"></div>
              <img src={img1} alt="Explorer" />
              <div className="data">
                <img
                  className="imageCountry"
                  src={`https://countryflagsapi.com/png/${data.data.countryDrug}`}
                />
                <Link to={`/hotel/${data.id}`}>
                  <h3>{data.data.cityDrug}</h3>
                </Link>

                <br />
                <span>897 عقار</span>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Head;
