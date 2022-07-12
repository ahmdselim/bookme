import React from "react";
import { BsPinMap } from "react-icons/bs";
import { Link } from "react-router-dom";
import trip from "../../images/trip.jpg";
import { useDispatch, useSelector } from "react-redux";

const Reservations = () => {


  return (
    <div className="wishlist">
      <h2>رحلتي القادمة</h2>
      <div className="row">
        <div className="trip">
          <div className="imageTrip">
            <img src={trip} alt="trip" />
          </div>
          <div className="contentTrip">
            <Link to="/">
              <h4>Pyramids Eyes Hotel</h4>
            </Link>
            <div>
              <BsPinMap />
              <span>القاهرة, مصر</span>
            </div>
            <div className="go">
              <button>استعرض مكان الإقامة</button>
            </div>
          </div>
        </div>

        <div className="trip">
          <div className="imageTrip">
            <img src={trip} alt="trip" />
          </div>
          <div className="contentTrip">
            <Link to="/">
              <h4>Pyramids Eyes Hotel</h4>
            </Link>
            <div>
              <BsPinMap />
              <span>القاهرة, مصر</span>
            </div>
            <div className="go">
              <button>استعرض مكان الإقامة</button>
            </div>
          </div>
        </div>
        <div className="trip">
          <div className="imageTrip">
            <img src={trip} alt="trip" />
          </div>
          <div className="contentTrip">
            <Link to="/">
              <h4>Pyramids Eyes Hotel</h4>
            </Link>
            <div>
              <BsPinMap />
              <span>القاهرة, مصر</span>
            </div>
            <div className="go">
              <button>استعرض مكان الإقامة</button>
            </div>
          </div>
        </div>
        <div className="trip">
          <div className="imageTrip">
            <img src={trip} alt="trip" />
          </div>
          <div className="contentTrip">
            <Link to="/">
              <h4>Pyramids Eyes Hotel</h4>
            </Link>
            <div>
              <BsPinMap />
              <span>القاهرة, مصر</span>
            </div>
            <div className="go">
              <button>استعرض مكان الإقامة</button>
            </div>
          </div>
        </div>
        <div className="trip">
          <div className="imageTrip">
            <img src={trip} alt="trip" />
          </div>
          <div className="contentTrip">
            <Link to="/">
              <h4>Pyramids Eyes Hotel</h4>
            </Link>
            <div>
              <BsPinMap />
              <span>القاهرة, مصر</span>
            </div>
            <div className="go">
              <button>استعرض مكان الإقامة</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
