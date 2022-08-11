import React, { Fragment, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BsPinMap } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import SideBar from "./Book/SideBar";
import Content from "./Book/Content";
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
  const [book, setBook] = useState(false);
  const [days, setDays] = useState("");
  const [gusts, setGusts] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [errorBook, setErrorBook] = useState([]);
  const [countryL, setCountryL] = useState("");
  const [errorSearch, setErrorSearch] = useState([]);
  const [dataList, setDataList] = useState([]);

  const addToFavorite = (userID, DrugID) => {
    addDrugToFavorites(userID, DrugID, dispatch);
    getFavoriteDrugs(dispatch);
  };

  const deleteFavoriteDrug = (favDrugID) => {
    deleteFavDrug(favDrugID);
    getFavoriteDrugs(dispatch);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (destination === "") {
      setErrorSearch("من فضلك ادخل وجهتك");
    } else if (countryL === "") {
      setErrorSearch("من فضلك اختار دولتك");
    } else {
      setErrorSearch("");
      navigate(`/search/${destination}/${countryL}`);
    }
  };

  const showBook = () => {
    return (
      <div className="hotelBook">
        <SideBar
          setBook={setBook}
          book={book}
          drug={drug}
          id={id}
          days={days}
          gusts={gusts}
          from={from}
          to={to}
        />
        <Content
          drug={drug}
          id={id}
          from={from}
          to={to}
          setTo={setTo}
          setFrom={setFrom}
          setBook={setBook}
          book={book}
          setErrorBook={setErrorBook}
        />
      </div>
    );
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
    <>
      {!book ? (
        <div className="hotel">
          <div className="row">
            <div className="hotelSearch">
              <h4>بحث</h4>
              <form onSubmit={handleSearch}>
                <label>الوجهة / اسم مكان الإقامة:</label>
                <input
                  type="text"
                  placeholder="ماهي وجهتك ؟ "
                  onChange={(e) => setDestination(e.target.value)}
                />
                <label>تاريخ الوصول</label>
                <input
                  type="date"
                  placeholder="تاريخ تسجيل الوصول"
                  onChange={(e) => setStartDate(e.target.value)}
                  min={new Date().toISOString().slice(0, 10)}
                />
                <label>تاريخ المغادرة</label>
                <input
                  type="date"
                  placeholder="تاريخ تسجيل المغادرة"
                  onChange={(e) => setStartDate(e.target.value)}
                  min={new Date().toISOString().slice(0, 10)}
                />
                <label>اختار دولتك</label>
                <select onChange={(e) => setCountryL(e.target.value)}>
                  <option> اختار دولتك</option>
                  {dataList.length !== 0
                    ? dataList.data.map((data, i) => (
                        <Fragment key={i}>
                          <option value={data.country}>{data.country}</option>
                        </Fragment>
                      ))
                    : null}
                </select>
                <button onClick={handleSearch}>بحث</button>

                {errorSearch.length !== 0 ? (
                  <strong
                    style={{
                      color: "#000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {errorSearch}
                  </strong>
                ) : null}
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
                              ? " شقة "
                              : data.data.drug === "house"
                              ? " بيت "
                              : data.data.drug === "hotel"
                              ? " فندق "
                              : data.data.drug === "castle"
                              ? " قصر "
                              : data.data.drug === "relaxation"
                              ? " استراحة "
                              : data.data.drug === "chalet"
                              ? " شالية "
                              : data.data.drug === "camp"
                              ? " مخيم "
                              : " كارفان "}
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
                                              (drug) =>
                                                drug.data.DrugID === data.id
                                            )
                                            .map((data) => data.id)
                                      )
                                    }
                                  />
                                </button>
                              ) : (
                                <button>
                                  <FaRegHeart
                                    onClick={() =>
                                      addToFavorite(user.uid, data.id)
                                    }
                                  />
                                </button>
                              )}
                            </>
                          ) : null}
                          <button
                            className="book"
                            onClick={() => window.location.replace("#book")}
                          >
                            احجز الآن
                          </button>
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
                        {data.data.images.map((image, i) => (
                          <div key={i} className="gallery-container w-3 h-2">
                            <div className="gallery-item">
                              <div className="image">
                                <img src={image} alt="nature" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      <PopularAmenities data={data} />
                      {errorBook.length > 0 ? (
                        <div className="errorBook">
                          <div>
                            <AiOutlineClose
                              onClick={() => setErrorBook(!errorBook)}
                            />
                            <span>{errorBook}</span>
                          </div>
                          <button onClick={() => navigate("/myReservations")}>
                            اذهب الي حجوزاتك
                          </button>
                        </div>
                      ) : null}
                      <Book
                        data={data}
                        setBook={setBook}
                        book={book}
                        days={days}
                        setDays={setDays}
                        gusts={gusts}
                        setGusts={setGusts}
                        setFrom={setFrom}
                        setTo={setTo}
                        to={to}
                        from={from}
                      />
                    </div>
                  );
                } else {
                  // return <p>gg</p>;
                }
              })}
          </div>
        </div>
      ) : (
        showBook()
      )}
    </>
  );
};

export default Hotel;
