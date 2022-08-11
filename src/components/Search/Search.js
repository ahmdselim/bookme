import React, { useState, useEffect, Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import img3 from "../../images/3.jpg";
import { Link, useNavigate } from "react-router-dom";

const Search = () => {
  const drug = useSelector((state) => state.Reducer.drug);
  const [dataList, setDataList] = useState([]);
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [countryL, setCountry] = useState("");

  const { data } = useParams();
  const { country } = useParams();

  const hotel =
    drug &&
    drug.filter(
      (hotelData) =>
        hotelData.data.nameDrug
          .toLocaleLowerCase()
          .includes(data.toLocaleLowerCase()) ||
        hotelData.data.countryDrug
          .toLocaleLowerCase()
          .includes(data.toLocaleLowerCase()) ||
        hotelData.data.countryDrug
          .toLocaleLowerCase()
          .includes(country.toLocaleLowerCase()) ||
        hotelData.data.cityDrug
          .toLocaleLowerCase()
          .includes(data.toLocaleLowerCase())
    );

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((res) => {
        return res.json();
      })
      .then((data) => setDataList(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="search">
      <div className="row">
        <div className="searchBar">
          <h4>بحث</h4>
          <form>
            <label>الوجهة / اسم مكان الإقامة:</label>
            <input
              type="text"
              placeholder="ماهي وجهتك ؟ "
              onChange={(e) => setDestination(e.target.value)}
            />
            <label>تاريخ الوصول</label>
            <input
              type="date"
              // minDate={new Date()}
              placeholder="تاريخ تسجيل الوصول"
              onChange={(e) => setStartDate(e.target.value)}
              min={new Date().toISOString().slice(0, 10)}
            />
            <label>تاريخ المغادرة</label>
            <input
              type="date"
              // minDate={new Date()}
              placeholder="تاريخ تسجيل المغادرة"
              onChange={(e) => setStartDate(e.target.value)}
              min={new Date().toISOString().slice(0, 10)}
            />
            <label>اختار دولتك</label>
            <select onChange={(e) => setCountry(e.target.value)}>
              <option>اختار دولتك</option>
              {dataList.length !== 0
                ? dataList.data.map((data, i) => (
                    <Fragment key={i}>
                      <option value={data.country}>{data.country}</option>
                    </Fragment>
                  ))
                : null}
            </select>
            <button type="button">بحث</button>
          </form>
        </div>
        <div className="resultBar">
          {data !== "" || country !== ""
            ? destination === ""
              ? hotel &&
                hotel.map((hotel, i) => (
                  <div key={i} className="infoRow">
                    <div className="drugPhoto">
                      <div className="overlay"></div>
                      <img src={hotel.data.mainImage} alt="Drug Photo" />
                    </div>

                    <div className="drugInfo">
                      <Link to={`/hotel/${hotel.id}`}>
                        {hotel.data.nameDrug}
                      </Link>
                      <p>
                        يقع {hotel.data.nameDrug} في {hotel.data.countryDrug} ,
                        {hotel.data.cityDrug} ،
                        {hotel.data.head ? <span> يوفر تراس </span> : null}
                        {hotel.data.gardenView ? (
                          <span> يوفر شرفة </span>
                        ) : null}
                        {hotel.data.balcony ? <span> يوفر بلكونة </span> : null}
                        {hotel.data.view ? <span> يوفر اطلالة </span> : null}
                        وهو مكان إقامة يضم
                        {hotel.data.smallBar ? <span> بار صغير </span> : null}
                        {hotel.data.pool ? <span> مسبح </span> : null}
                        {hotel.data.sauna ? <span> ساونا </span> : null}
                        {hotel.data.flatTv ? (
                          <span> تليفزيون مسطح </span>
                        ) : null}
                      </p>

                      <p>
                        تتميز جميع أماكن الإقامة في {hotel.data.nameDrug}
                        {hotel.data.conditioning ? <span> تكييف </span> : null}
                        {hotel.data.heating ? <span> تدفئة </span> : null}
                        {hotel.data.wifi ? <span> وايفاي </span> : null}
                        {hotel.data.carCharge ? (
                          <span> محطة شحن السيارات الكهربائية </span>
                        ) : null}
                      </p>
                    </div>
                  </div>
                ))
              : drug &&
                drug
                  .filter(
                    (data) =>
                      data.data.nameDrug
                        .toLocaleLowerCase()
                        .includes(destination.toLocaleLowerCase()) ||
                      data.data.countryDrug
                        .toLocaleLowerCase()
                        .includes(destination.toLocaleLowerCase()) ||
                      data.data.countryDrug
                        .toLocaleLowerCase()
                        .includes(countryL.toLocaleLowerCase()) ||
                      data.data.cityDrug
                        .toLocaleLowerCase()
                        .includes(destination.toLocaleLowerCase())
                  )
                  .map((hotel, i) => (
                    <div key={i} className="infoRow">
                      <div className="drugPhoto">
                        <div className="overlay"></div>
                        <img src={hotel.data.mainImage} alt="Drug Photo" />
                      </div>

                      <div className="drugInfo">
                        <Link to={`/hotel/${hotel.id}`}>
                          {hotel.data.nameDrug}
                        </Link>
                        <p>
                          يقع {hotel.data.nameDrug} في {hotel.data.countryDrug}{" "}
                          ,{hotel.data.cityDrug} ،
                          {hotel.data.head ? <span> يوفر تراس </span> : null}
                          {hotel.data.gardenView ? (
                            <span> يوفر شرفة </span>
                          ) : null}
                          {hotel.data.balcony ? (
                            <span> يوفر بلكونة </span>
                          ) : null}
                          {hotel.data.view ? <span> يوفر اطلالة </span> : null}
                          وهو مكان إقامة يضم
                          {hotel.data.smallBar ? <span> بار صغير </span> : null}
                          {hotel.data.pool ? <span> مسبح </span> : null}
                          {hotel.data.sauna ? <span> ساونا </span> : null}
                          {hotel.data.flatTv ? (
                            <span> تليفزيون مسطح </span>
                          ) : null}
                        </p>

                        <p>
                          تتميز جميع أماكن الإقامة في {hotel.data.nameDrug}
                          {hotel.data.conditioning ? (
                            <span> تكييف </span>
                          ) : null}
                          {hotel.data.heating ? <span> تدفئة </span> : null}
                          {hotel.data.wifi ? <span> وايفاي </span> : null}
                          {hotel.data.carCharge ? (
                            <span> محطة شحن السيارات الكهربائية </span>
                          ) : null}
                        </p>
                      </div>
                    </div>
                  ))
            : "ds"}
        </div>
      </div>
    </div>
  );
};

export default Search;
