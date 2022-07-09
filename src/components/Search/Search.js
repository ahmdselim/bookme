import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import img3 from "../../images/3.jpg";
import { Link, useNavigate } from "react-router-dom";

const Search = () => {
  const drug = useSelector((state) => state.Reducer.drug);
  const navigate = useNavigate();
  const [destination, setDestination] = useState("");

  const { data } = useParams();
  const hotel =
    drug &&
    drug.filter(
      (hotelData) =>
        hotelData.data.nameDrug
          .toLocaleLowerCase()
          .includes(data.toLocaleLowerCase()) ||
        hotelData.data.countryDrug
          .toLocaleLowerCase()
          .includes(data.toLocaleLowerCase())
    );

  const [startDate, setStartDate] = useState(new Date());
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
            <button type="button">بحث</button>
          </form>
        </div>
        <div className="resultBar">
          {destination === ""
            ? hotel &&
              hotel.map((hotel, i) => (
                <div key={i} className="infoRow">
                  <div className="drugPhoto">
                    <div className="overlay"></div>
                    <img src={img3} alt="Drug Photo" />
                  </div>

                  <div className="drugInfo">
                    <Link to={`/hotel/${hotel.id}`}>{hotel.data.nameDrug}</Link>
                    <p>
                      يقع هذا الفندق في الغردقة وعلى بعد 10 دقائق بالسيارة من
                      مطار الغردقة الدولي، كما يبعد Albatros Aqua Park مسافة 600
                      متر من الشاطئ، ويحتوي على مسبح كبير مع منزلقات مائية ومسبح
                      مدفأ وحوض استحمام ساخن،...
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
                      .includes(destination.toLocaleLowerCase())
                )
                .map((hotel, i) => (
                  <div key={i} className="infoRow">
                    <div className="drugPhoto">
                      <div className="overlay"></div>
                      <img src={img3} alt="Drug Photo" />
                    </div>

                    <div className="drugInfo">
                      <Link to={`/hotel/${hotel.id}`}>
                        {hotel.data.nameDrug}
                      </Link>
                      <p>
                        يقع هذا الفندق في الغردقة وعلى بعد 10 دقائق بالسيارة من
                        مطار الغردقة الدولي، كما يبعد Albatros Aqua Park مسافة
                        600 متر من الشاطئ، ويحتوي على مسبح كبير مع منزلقات مائية
                        ومسبح مدفأ وحوض استحمام ساخن،...
                      </p>
                    </div>
                  </div>
                ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
