import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BsPinMap } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import {
  addDrugToFavorites,
  getFavoriteDrugs,
  deleteFavDrug,
} from "../../redux/actions/actionCreator";
import { auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import PopularAmenities from "./PopularAmenities";
import Book from "./Book";
const Hotel = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [clicked, setClicked] = useState("");
  const drug = useSelector((state) => state.Reducer.drug);
  const favDrug = useSelector((state) => state.Reducer.favDrug);
  const { id } = useParams();
  const [startDate, setStartDate] = useState(new Date());
  const dispatch = useDispatch();
  const [user] = useAuthState(auth);

  const addToFavorite = (userID, DrugID) => {
    addDrugToFavorites(userID, DrugID, dispatch);
    getFavoriteDrugs(dispatch);
  };

  const deleteFavoriteDrug = (favDrugID) => {
    deleteFavDrug(favDrugID);
    getFavoriteDrugs(dispatch);
  };

  return (
    <div className="hotel">
      <div className="row">
        <div className="hotelSearch">
          <h4>بحث</h4>
          <form onSubmit={() => navigate(`/search/${destination}`)}>
            <label>الوجهة / اسم مكان الإقامة:</label>
            <input
              type="text"
              placeholder="ماهي وجهتك ؟ "
              onChange={(e) => setDestination(e.target.value)}
            />
            <label>تاريخ الوصول</label>
            <input
              type="date"
              minDate={new Date()}
              placeholder="تاريخ تسجيل الوصول"
              onChange={(date: Date) => setStartDate(date)}
              min={new Date().toISOString().slice(0, 10)}
            />
            <label>تاريخ المغادرة</label>
            <input
              type="date"
              minDate={new Date()}
              placeholder="تاريخ تسجيل المغادرة"
              onChange={(date: Date) => setStartDate(date)}
              min={new Date().toISOString().slice(0, 10)}
            />
            <button onClick={() => navigate(`/search/${destination}`)}>
              بحث
            </button>
          </form>
        </div>

        {drug &&
          drug.map((data, i) => {
            if (data.id === id) {
              return (
                <div key={i} className="hotelContent">
                  <div className="row">
                    <div>
                      <span>
                        {data.data.drug === "apartment"
                          ? "شقة"
                          : data.data.drug === "house"
                          ? "بيت"
                          : data.data.drug === "hotel"
                          ? "فندق"
                          : data.data.drug === "castle"
                          ? "قصر"
                          : "منتجع"}
                      </span>
                      <h3>{data.data.nameDrug}</h3>
                    </div>

                    <div>
                      {user && user ? (
                        <>
                          {favDrug &&
                          user &&
                          favDrug
                            .filter((data) => data.data.userID === user.uid)
                            .filter((drug) => drug.data.DrugID === data.id)
                            .length > 0 ? (
                            <button>
                              <FaHeart
                                onClick={() =>
                                  deleteFavoriteDrug(
                                    favDrug &&
                                      user &&
                                      favDrug
                                        .filter(
                                          (data) =>
                                            data.data.userID === user.uid
                                        )
                                        .filter(
                                          (drug) => drug.data.DrugID === data.id
                                        )
                                        .map((data) => data.id)
                                  )
                                }
                              />
                            </button>
                          ) : (
                            <button>
                              <FaRegHeart
                                onClick={() => addToFavorite(user.uid, data.id)}
                              />
                            </button>
                          )}
                        </>
                      ) : null}
                      <button className="book">احجز الآن</button>
                    </div>
                  </div>

                  <div className="row address">
                    <BsPinMap />
                    <span>
                      {data.data.countryDrug}, {data.data.cityDrug},
                      {data.data.streetDrug}
                    </span>
                  </div>

                  <div className="gridContainer">
                    <div className="gallery-container w-3 h-2">
                      <div className="gallery-item">
                        <div className="image">
                          <img
                            src="https://source.unsplash.com/1600x900/?nature"
                            alt="nature"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="gallery-container w-3 h-3">
                      <div className="gallery-item">
                        <div className="image">
                          <img
                            src="https://source.unsplash.com/1600x900/?people"
                            alt="people"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="gallery-container h-2">
                      <div className="gallery-item">
                        <div className="image">
                          <img
                            src="https://source.unsplash.com/1600x900/?sport"
                            alt="sport"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="gallery-container w-2">
                      <div className="gallery-item">
                        <div className="image">
                          <img
                            src="https://source.unsplash.com/1600x900/?fitness"
                            alt="fitness"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="gallery-container w-4 h-1">
                      <div className="gallery-item">
                        <div className="image">
                          <img
                            src="https://source.unsplash.com/1600x900/?food"
                            alt="food"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="gallery-container">
                      <div className="gallery-item">
                        <div className="image">
                          <img
                            src="https://source.unsplash.com/1600x900/?travel"
                            alt="travel"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="gallery-container h-2">
                      <div className="gallery-item">
                        <div className="image">
                          <img
                            src="https://source.unsplash.com/1600x900/?art"
                            alt="art"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="gallery-container">
                      <div className="gallery-item">
                        <div className="image">
                          <img
                            src="https://source.unsplash.com/1600x900/?cars"
                            alt="cars"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <PopularAmenities data={data} />
                  <Book data={data} />
                </div>
              );
            } else {
              // return <p>gg</p>;
            }
          })}
      </div>
    </div>
  );
};

export default Hotel;
