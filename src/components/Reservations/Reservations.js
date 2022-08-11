import React, { Fragment } from "react";
import { BsPinMap } from "react-icons/bs";
import trip from "../../images/trip.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { deleteBook, getBookings } from "../../redux/actions/actionCreator";

const Reservations = () => {
  const booking = useSelector((state) => state.Reducer.booking);
  const drug = useSelector((state) => state.Reducer.drug);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const deleteBooking = (id) => {
    deleteBook(id);
    getBookings(dispatch);
  };
  return (
    <div className="wishlist">
      <h2>حجوزاتي</h2>
      <div className="row">
        {booking &&
          drug &&
          booking
            .filter((data) => data.data.userID === user.uid)
            .map((data) => (
              <div className="trip" key={data.id}>
                <div className="imageTrip">
                  {drug &&
                    drug
                      .filter((dataD) => dataD.id === data.data.drugID)
                      .map((data, i) => (
                        <img key={i} src={data.data.mainImage} alt="trip" />
                      ))}
                </div>
                <div className="contentTrip">
                  {drug &&
                    drug
                      .filter((dataD) => dataD.id === data.data.drugID)
                      .map((data, i) => (
                        <Link key={i} to={`/hotel/${data.id}`}>
                          <h4>{data.data.nameDrug}</h4>
                        </Link>
                      ))}
                  <div>
                    <BsPinMap />
                    <span>
                      {drug &&
                        drug
                          .filter((dataD) => dataD.id === data.data.drugID)
                          .map((dataD, i) => (
                            <Fragment key={i}>
                              {dataD.data.countryDrug} , {dataD.data.cityDrug}
                            </Fragment>
                          ))}
                    </span>
                  </div>
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <span>حتنتهي زيارتك يوم </span>
                    {data.data.from}
                  </div>
                  <div className="go">
                    <button
                      onClick={() => navigate(`/hotel/${data.data.drugID}`)}
                    >
                      استعرض مكان الإقامة
                    </button>
                    <button onClick={() => deleteBooking(data.id)}>
                      الغاء الحجز
                    </button>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Reservations;
