import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BsHeart, BsPinMap, BsLightning } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AiOutlineWifi } from "react-icons/ai";
import { GiTheater } from "react-icons/gi";
import { MdOutlineAir } from "react-icons/md";
import balcony from "../../images/bacony.ico";
import gear from "../../images/gear.ico";
import garden from "../../images/garden.ico";
import view from "../../images/view.ico";
import heating from "../../images/heating.ico";
import airConditioner from "../../images/airConditioner.ico";
import wifi from "../../images/wifi.ico";
import carCharge from "../../images/charge.ico";

import {
  addDrugToFavorites,
  getFavoriteDrugs,
  deleteFavDrug,
} from "../../redux/actions/actionCreator";
import { auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
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

                  <div className="drugDesc">
                    <h3>
                      {`اشعر وكأنك نجم واستمتع بالمعاملة والخدمات الراقية في
                      ${data.data.nameDrug}`}
                    </h3>

                    <div className="items">
                      {data.data.conditioning ? (
                        <div>
                          <MdOutlineAir />
                          <span> تكييف </span>
                        </div>
                      ) : null}
                      {data.data.heating ? (
                        <div>
                          <GiTheater />
                          <span> تدفئة </span>
                        </div>
                      ) : null}
                      {data.data.wifi ? (
                        <div>
                          <AiOutlineWifi />
                          <span> وايفاي </span>
                        </div>
                      ) : null}
                      {data.data.carCharge ? (
                        <div>
                          <BsLightning />
                          <span> محطة شحن السيارات الكهربائية </span>
                        </div>
                      ) : null}
                    </div>

                    <p>
                      يقع {data.data.nameDrug} في {data.data.countryDrug} ,
                      {data.data.cityDrug} ،
                      {data.data.head ? <span> يوفر تراس </span> : null}
                      {data.data.gardenView ? <span> يوفر شرفة </span> : null}
                      {data.data.balcony ? <span> يوفر بلكونة </span> : null}
                      {data.data.view ? <span> يوفر اطلالة </span> : null}
                      وهو مكان إقامة يضم
                      {data.data.smallBar ? <span> بار صغير </span> : null}
                      {data.data.pool ? <span> مسبح </span> : null}
                      {data.data.sauna ? <span> ساونا </span> : null}
                      {data.data.flatTv ? <span> تليفزيون مسطح </span> : null}
                    </p>

                    <p>
                      تتميز جميع أماكن الإقامة في {data.data.nameDrug}
                      {data.data.conditioning ? <span> تكييف </span> : null}
                      {data.data.heating ? <span> تدفئة </span> : null}
                      {data.data.wifi ? <span> وايفاي </span> : null}
                      {data.data.carCharge ? (
                        <span> محطة شحن السيارات الكهربائية </span>
                      ) : null}
                    </p>

                    <h4>أكثر المرافق رواجًا</h4>

                    <div className="items">
                      {data.data.conditioning ? (
                        <div>
                          <img src={airConditioner} />
                          <span> تكييف </span>
                        </div>
                      ) : null}
                      {data.data.heating ? (
                        <div>
                          <img src={heating} />
                          <span> تدفئة </span>
                        </div>
                      ) : null}
                      {data.data.wifi ? (
                        <div>
                          <img src={wifi} />
                          <span> وايفاي </span>
                        </div>
                      ) : null}
                      {data.data.carCharge ? (
                        <div>
                          <img src={carCharge} />
                          <span> محطة شحن السيارات الكهربائية </span>
                        </div>
                      ) : null}
                      {data.data.head ? (
                        <div>
                          <img src={gear} />
                          <span> يوفر تراس </span>
                        </div>
                      ) : null}
                      {data.data.gardenView ? (
                        <div>
                          <img src={garden} />
                          <span> يوفر شرفة </span>
                        </div>
                      ) : null}
                      {data.data.balcony ? (
                        <div>
                          <img src={balcony} />
                          <span> يوفر بلكونة </span>
                        </div>
                      ) : null}
                      {data.data.view ? (
                        <div>
                          <img src={view} />
                          <span> يوفر اطلالة </span>
                        </div>
                      ) : null}
                    </div>
                  </div>
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
