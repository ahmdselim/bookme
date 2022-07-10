import React, { Fragment } from "react";
import { BsPinMap } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import trip from "../../images/trip.jpg";
import { useDispatch, useSelector } from "react-redux";

const Wishlist = () => {
  const favDrug = useSelector((state) => state.Reducer.favDrug);
  const drug = useSelector((state) => state.Reducer.drug);
  const navigate = useNavigate();

  return (
    <div className="wishlist">
      <h2>رحلتي القادمة</h2>

      <div className="row">
        {favDrug &&
          drug &&
          favDrug.map((fav, i) => (
            <div key={i} className="trip">
              <div className="imageTrip">
                {drug
                  .filter((data) => data.id === fav.data.DrugID)
                  .map((data, i) => (
                    <img key={i} src={data.data.mainImage} alt="trip" />
                  ))}
              </div>
              <div className="contentTrip">
                {drug
                  .filter((data) => data.id === fav.data.DrugID)
                  .map((data, i) => (
                    <Link key={i} to={`/hotel/${data.id}`}>
                      <h4>{data.data.nameDrug}</h4>
                    </Link>
                  ))}
                <div>
                  <BsPinMap />
                  <span>
                    {drug
                      .filter((data) => data.id === fav.data.DrugID)
                      .map((data, i) => (
                        <Fragment key={i}>
                          {data.data.countryDrug} , {data.data.cityDrug}
                        </Fragment>
                      ))}
                  </span>
                </div>
                <div className="go">
                  <button
                    onClick={() => {
                      drug
                        .filter((data) => data.id === fav.data.DrugID)
                        .map((data) => navigate(`/hotel/${data.id}`));
                    }}
                  >
                    استعرض مكان الإقامة
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Wishlist;
