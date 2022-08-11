import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { BsPinMap } from "react-icons/bs";
import EditDrug from "./EditDrug";
import {
  deleteTrip,
  getBookings,
  deleteDrug,
  getDrugs,
} from "../../redux/actions/actionCreator";
import { useNavigate } from "react-router-dom";
const MyDrug = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [drugOpen, setDrug] = useState(false);
  const [drugSelected, setDrugSelected] = useState([]);
  const drug = useSelector((state) => state.Reducer.drug);
  const booking = useSelector((state) => state.Reducer.booking);
  const users = useSelector((state) => state.Reducer.users);
  const [user, loading] = useAuthState(auth);
  const deleteTravel = (id) => {
    deleteTrip(id, dispatch);
    getBookings(dispatch);
  };
  const deleteDrugs = (id) => {
    deleteDrug(id);
    getDrugs(dispatch);
  };

  const editDrugs = (selected) => {
    setDrug(!drugOpen);
    setDrugSelected(selected);
  };

  return (
    <>
      {drugOpen ? (
        <EditDrug drugSelected={drugSelected} />
      ) : (
        <div className="wishlist">
          <h2>عقاراتي</h2>
          <div className="row">
            {drug &&
              drug
                .filter((data) => data.data.userID === user.uid)
                .map((data, i) => (
                  <div className="trip" key={i}>
                    <div className="imageTrip">
                      <img src={data.data.mainImage} alt="trip" />
                    </div>
                    <div className="contentTrip">
                      <Link to={`/hotel/${data.id}`}>
                        <h4>{data.data.nameDrug}</h4>
                      </Link>
                      <div>
                        <BsPinMap />
                        <span>
                          {data.data.countryDrug} , {data.data.cityDrug}
                        </span>
                      </div>

                      {booking &&
                        booking
                          .filter((dataB) => dataB.data.drugID === data.id)
                          .map((dataB, i) => (
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-start",
                                flexDirection: "column",
                              }}
                              key={i}
                            >
                              {
                                <>
                                  <span>
                                    لقد حجز
                                    {` ${users
                                      .filter(
                                        (us) =>
                                          us.data.uid === dataB.data.userID
                                      )
                                      .map((userT) => userT.data.name)} `}
                                    <br />
                                    <span>
                                      {users
                                        .filter(
                                          (us) =>
                                            us.data.uid === dataB.data.userID
                                        )
                                        .map((userT) => (
                                          <>
                                            البريد الالكتروني :
                                            {userT.data.email}
                                          </>
                                        ))}
                                    </span>
                                    <br />
                                    <span>رقم الهاتف : {dataB.data.phone}</span>
                                  </span>
                                  <br />

                                  <span>{` من ${dataB.data.from} `}</span>
                                  <span>{` الي ${dataB.data.to} `}</span>
                                  {new Date().toISOString() > dataB.data.to ? (
                                    <button
                                      style={{ width: "25%", margin: "5px" }}
                                      onClick={() => deleteTravel(dataB.id)}
                                    >
                                      حذف
                                    </button>
                                  ) : null}
                                  {new Date().toISOString() > dataB.data.to ? (
                                    <span>انتهي الحجز</span>
                                  ) : (
                                    <span>الحجز جاري </span>
                                  )}
                                </>
                              }
                            </div>
                          ))}
                      <div className="go">
                        <button onClick={() => navigate(`/hotel/${data.id}`)}>
                          استعرض مكان الإقامة
                        </button>
                        <button onClick={() => editDrugs(data)}>
                          تعديل العقار
                        </button>
                        <button onClick={() => deleteDrugs(data.id)}>
                          حذف العقار
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      )}
    </>
  );
};

export default MyDrug;
