import React, { Fragment } from "react";

const ChooseDrug = ({
  drug,
  setDrug,
  setPriceApartment,
  countryDrug,
  setNumGuest,
  setNumBathroom,
  setAreaApartment,
  setNameDrug,
  setCountryDrug,
  dataList,
  setCityDrug,
  setStreetDrug,
  setPostalDrug,
  setHouse,
  setPlace,
  setNumHouses,
  place,
  setPrivateRoom,
  house,
  privateRoom,
  setNumPrivateRoom,
  setHotel,
  setHotelNum,
  hotel,
  hotelNum,
  setNumOfHotels,
  setApartment,
  setMultiApartment,
  apartment,
}) => {
  // Start info functions
  const showInfo = () => {
    return (
      <>
        <label>سعر الشقة الواحدة للفرد</label>
        <input
          type="number"
          onChange={(e) => setPriceApartment(e.target.value)}
        />
        {` $ `}
        <br />
        <br />
        <label>كم عدد الضيوف الذين يمكنهم الاقامة ؟</label>
        <br />
        <input type="number" onChange={(e) => setNumGuest(e.target.value)} />
        <br />
        <label>كم عدد الحمامات المتوفرة ؟ </label>
        <br />
        <input type="number" onChange={(e) => setNumBathroom(e.target.value)} />
        <br />
        <label>ماهي مساحة هذه الشقة ؟ </label>
        <br />
        <input
          type="number"
          onChange={(e) => setAreaApartment(e.target.value)}
        />
        {` متر مربع `}
        <br /> <br />
        <label>اسم مكان الإقامة : </label>
        <input type="text" onChange={(e) => setNameDrug(e.target.value)} />
        <h5>أين يقع المكان الذي ترغب بإدراجه؟</h5>
        <label>الدولة / الإقليم</label>
        <select onChange={(e) => setCountryDrug(e.target.value)}>
          <option>اختار دولتك</option>
          {dataList &&
            dataList.data.map((data, i) => (
              <Fragment key={i}>
                <option value={data.country}>{data.country}</option>
              </Fragment>
            ))}
        </select>
        <br />
        <label>المدينة</label> <br />
        <select onChange={(e) => setCityDrug(e.target.value)}>
          <option>اختار مدينتك</option>
          {countryDrug ? (
            dataList &&
            dataList.data
              .filter((data) => data.country === countryDrug)
              .map((city) =>
                city.cities.map((c, i) => (
                  <option key={i} value={c}>
                    {c}
                  </option>
                ))
              )
          ) : (
            <option>الرجاء اختيار دولتك لتظهر مدنك</option>
          )}
        </select>
        <br />
        <label>اسم الشارع ورقم البيت</label>
        <input type="text" onChange={(e) => setStreetDrug(e.target.value)} />
        <br />
        <label>الرمز البريدي</label> <br />
        <input type="text" onChange={(e) => setPostalDrug(e.target.value)} />
      </>
    );
  };
  // End info functions

  const showApartment = () => {
    if (drug === "apartment") {
      return (
        <>
          <select onChange={(e) => setApartment(e.target.value)}>
            <option>عدد الشقق</option>
            <option value="oneApartment">شقة واحدة</option>
            <option value="multipleApartment">عدة شقق</option>
          </select>

          {apartment === "multipleApartment" ? (
            <>
              <br />
              <label>عدد الشقق : </label>
              <br />
              <input
                type="number"
                onChange={(e) => setMultiApartment(e.target.value)}
              />
              <br />
              <br />
            </>
          ) : null}
          {showInfo()}
        </>
      );
    }
  };

  // Start house functions
  const showHouse = () => {
    return (
      <>
        <select onChange={(e) => setHouse(e.target.value)}>
          <option value="">ما الذي يمكن للضيوف حجزه؟</option>
          <option value="allPlace">المكان بالكامل</option>
          <option value="privetRoom">غرفة خاصة</option>
        </select>
        {house === "allPlace" ? (
          <>
            <select onChange={(e) => setPlace(e.target.value)}>
              <option value="">
                أي من أنواع أماكن الإقامة المذكورة في القائمة أدناه مشابهة لمكان
                الإقامة الخاص بك؟
              </option>
              <option value="شقة">شقة</option>
              <option value="بيت عطلات">بيت عطلات</option>
              <option value="فيلا">فيلا</option>
              <option value="شقة فندقية">شقة فندقية</option>
              <option value="شالية">شالية</option>
              <option value="منتزه عطلات">منتزه عطلات</option>
            </select>
            {place && place ? (
              <select onChange={(e) => setNumHouses(e.target.value)}>
                <option value="">كم عدد {place} التي تدرجها</option>
                <option>{place} واحدة</option>
                <option> عدة {place} </option>
              </select>
            ) : null}
          </>
        ) : house === "privetRoom" ? (
          <>
            <select onChange={(e) => setPrivateRoom(e.target.value)}>
              <option value="">
                أي من أنواع أماكن الإقامة المذكورة في القائمة أدناه مشابهة لمكان
                الإقامة الخاص بك؟
              </option>
              <option value="بيت ضيافة">بيت ضيافة</option>
              <option value="مبيت وافطار">مبيت وافطار</option>
              <option value="اقامه منازل">اقامه منازل</option>
              <option value="بيت ريفي">بيت ريفي</option>
              <option value="شقة فندقية">شقة فندقية</option>
              <option value="اقامة في مزرعة">اقامة في مزرعة</option>
              <option value="كوخ">كوخ</option>
            </select>
            {privateRoom && privateRoom ? (
              <select onChange={(e) => setNumPrivateRoom(e.target.value)}>
                <option value="">كم عدد {privateRoom} التي تدرجها</option>
                <option>{privateRoom} واحدة</option>
                <option> عدة {privateRoom} </option>
              </select>
            ) : null}
          </>
        ) : null}
        {showInfo()}
      </>
    );
  };
  // End house functions

  // Start hotel functions
  const showHotel = () => {
    return (
      <>
        <select onChange={(e) => setHotel(e.target.value)}>
          <option value="">
            أي من أنواع أماكن الإقامة المذكورة في القائمة أدناه مشابهة لمكان
            الإقامة الخاص بك؟
          </option>
          <option value="فندق">فندق</option>
          <option value="بيت ضيافة">بيت ضيافة</option>
          <option value="مبيت وإفطار">مبيت وإفطار</option>
          <option value="إقامة منازل">إقامة منازل</option>
          <option value="بيت شباب">بيت شباب</option>
          <option value="شقة فندقية">شقة فندقية</option>
          <option value="فندق كبسولة">فندق كبسولة</option>
          <option value="بيت ريفي">بيت ريفي</option>
          <option value="إقامة في مزرعة">إقامة في مزرعة</option>
        </select>
        {hotel && hotel ? (
          <select onChange={(e) => setHotelNum(e.target.value)}>
            <option value="">كم عدد {hotel} التي تدرجها؟</option>
            <option value="onlyHoel">
              عدد 1 {hotel} بغرفة واحدة أو عدة غرف يمكن للضيوف حجزها
            </option>
            <option value="manyHotel">
              عدة {hotel} بغرفة واحدة أو عدة غرف يمكن للضيوف حجزها
            </option>
          </select>
        ) : null}
        {hotelNum && hotelNum ? (
          <>
            <label>عدد أماكن الإقامة</label>
            <br />
            <input
              type="number"
              onChange={(e) => setNumOfHotels(e.target.value)}
            />
          </>
        ) : null}
        <br />
        <br />
        {showInfo()}
      </>
    );
  };
  // End hotel functions
  return (
    <>
      <div className="collapsible">
        <input type="checkbox" id="collapsible-head" />
        <label htmlFor="collapsible-head" className="collapsibleLabel">
          للبدء، اختر نوع العقار الذي ترغب بعرضة على BookMe.com
        </label>
        <div className="collapsible-text">
          <select onChange={(e) => setDrug(e.target.value)}>
            <option value="">اختر عقارك</option>
            <option value="apartment">شقة</option>
            <option value="house">بيوت</option>
            <option value="hotel">فتادق</option>
            <option value="castle">قصور</option>
          </select>
          {drug === "apartment" ? showApartment() : null}
          {drug === "house" ? showHouse() : null}
          {drug === "hotel" ? showHotel() : null}
        </div>
      </div>
    </>
  );
};

export default ChooseDrug;
