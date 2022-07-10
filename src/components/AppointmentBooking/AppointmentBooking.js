import React, { useState, useEffect, Fragment } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { auth, storage } from "../../firebase/config";
import { BsCalendar4, BsPeople } from "react-icons/bs";
import { FcWorkflow } from "react-icons/fc";
import {
  addDrugs,
  getDrugs,
  updateName,
} from "../../redux/actions/actionCreator";
import { useDispatch, useSelector } from "react-redux";

const AppointmentBooking = () => {
  const dispatch = useDispatch();
  const [drug, setDrug] = useState("");
  const [residence, setResidence] = useState("");
  const [apartment, setApartment] = useState("");
  const [breakfast, setBreakfast] = useState("");
  const [lunchBreakfast, setLunchBreakfast] = useState("");
  const [house, setHouse] = useState("");
  const [place, setPlace] = useState("");
  const [hotel, setHotel] = useState("");
  const [hotelNum, setHotelNum] = useState("");
  const [numOfHotels, setNumOfHotels] = useState("");
  const [error, setError] = useState([]);
  const [privateRoom, setPrivateRoom] = useState("");
  const [MultiApartment, setMultiApartment] = useState("");
  const [nameDrug, setNameDrug] = useState("");
  const [countryDrug, setCountryDrug] = useState("");
  const [streetDrug, setStreetDrug] = useState("");
  const [postalDrug, setPostalDrug] = useState("");
  const [cityDrug, setCityDrug] = useState("");
  const [numHouses, setNumHouses] = useState("");
  const [numPrivateRoom, setNumPrivateRoom] = useState("");
  const [numSingleBed, setNumSingleBed] = useState("");
  const [numDoubleBed, setNumDoubleBed] = useState("");
  const [numBigBed, setNumBigBed] = useState("");
  const [numVBigBed, setNumVBigBed] = useState("");
  const [numGuest, setNumGuest] = useState("");
  const [numBathroom, setNumBathroom] = useState("");
  const [areaApartment, setAreaApartment] = useState("");
  const [conditioning, setConditioning] = useState("");
  const [heating, setHeating] = useState("");
  const [wifi, setWifi] = useState("");
  const [carCharge, setCarCharge] = useState("");
  const [kitchen, setKitchen] = useState("");
  const [smallKitchen, setSmallKitchen] = useState("");
  const [washingMachine, setWashingMachine] = useState("");
  const [flatTv, setFlatTv] = useState("");
  const [pool, setPool] = useState("");
  const [hootTube, setHootTube] = useState("");
  const [smallBar, setSmallBar] = useState("");
  const [sauna, setSauna] = useState("");
  const [balcony, setBalcony] = useState("");
  const [gardenView, setGardenView] = useState("");
  const [head, setHead] = useState("");
  const [view, setView] = useState("");
  const [breakfastPrice, setBreakfastPrice] = useState("");
  const [english, setEnglish] = useState("");
  const [arabic, setArabic] = useState("");
  const [german, setGerman] = useState("");
  const [french, setFrench] = useState("");
  const [spanish, setSpanish] = useState("");
  const [imageUpload, setImageUpload] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loginFrom, setLoginFrom] = useState("");
  const [loginTo, setLoginTo] = useState("");
  const [logoutFrom, setLogoutFrom] = useState("");
  const [logoutTo, setLogoutTo] = useState("");
  const [user, loading] = useAuthState(auth);
  const [dataList, setData] = useState("");
  const [urls, setUrls] = useState([]);
  const [viewDrug, setViewDrug] = useState(false);
  const [disabledAttr, setDisabledAttr] = useState(false);
  const [countryAddressU, setCountryAddressU] = useState("");
  const [cityAddressU, setCityAddressU] = useState("");
  const [addressU, setAddressU] = useState("");
  const [postalAddressU, setPostalAddressU] = useState("");
  const [debit, setDebit] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) {
      navigate("/");
    }
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((res) => {
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, [user, loading, navigate]);

  const showInfo = () => {
    return (
      <>
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
                city.cities.map((c,i) => <option key={i} value={c}>{c}</option>)
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

  // Start apartment functions
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

  const showResidence = () => {
    if (
      drug === "apartment" ||
      drug === "house" ||
      drug === "hotel" ||
      drug === "castle"
    ) {
      if (residence === "bedroom") {
        return (
          <>
            <label>سرير فردي</label>
            <br />
            <input
              type="number"
              onChange={(e) => setNumSingleBed(e.target.value)}
            />
            <br />
            <label>سرير مزدوج</label>
            <br />
            <input
              type="number"
              onChange={(e) => setNumDoubleBed(e.target.value)}
            />
            <br />
            <label>سرير كبير</label>
            <br />
            <input
              type="number"
              onChange={(e) => setNumBigBed(e.target.value)}
            />
            <br />
            <label>سرير كبير جدا</label>
            <br />
            <input
              type="number"
              onChange={(e) => setNumVBigBed(e.target.value)}
            />
            <br />
            <br />
            <label>كم عدد الضيوف الذين يمكنهم الاقامة ؟</label>
            <br />
            <input
              type="number"
              onChange={(e) => setNumGuest(e.target.value)}
            />
            <br />
            <label>كم عدد الحمامات المتوفرة ؟ </label>
            <br />
            <input
              type="number"
              onChange={(e) => setNumBathroom(e.target.value)}
            />
            <br />
            <br />
            <label>ماهي مساحة هذه الشقة ؟ </label>
            <br />
            <input
              type="number"
              onChange={(e) => setAreaApartment(e.target.value)}
            />
          </>
        );
      } else if (residence === "livingroom") {
        return (
          <>
            <label>سرير فردي</label>
            <br />
            <input
              type="number"
              onChange={(e) => setNumSingleBed(e.target.value)}
            />
          </>
        );
      }
    }
  };

  const showBreakfast = () => {
    if (
      drug === "apartment" ||
      drug === "house" ||
      drug === "hotel" ||
      drug === "castle"
    ) {
      if (breakfast === "breakfastYes") {
        return (
          <>
            <h5>هل يتضمن السعر الذي يدفعه الضيوف وجبة الإفطار؟</h5>
            <input
              type="radio"
              className="as"
              name="applyPrice"
              value="yes"
              onChange={(e) => setLunchBreakfast(e.target.value)}
            />
            <label>نعم </label>
            {lunchBreakfast === "yes" ? (
              <>
                <br />
                <label>سعر وجبة الإفطار للشخص الواحد لكل يوم</label>
                <input
                  type="number"
                  onChange={(e) => setBreakfastPrice(e.target.value)}
                  disabled={lunchBreakfast !== "yes" ? "disabled" : null}
                />
                <span> $ </span>
                <br />
              </>
            ) : null}
            <br />
            <input
              type="radio"
              className="as"
              name="applyPrice"
              value="no"
              onChange={(e) => setLunchBreakfast(e.target.value)}
            />
            <label>لا </label>
          </>
        );
      }
    }
  };
  // End apartment functions

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

  const showDrugUpload = () => {
    return (
      <>
        <div className="drugUpload">
          <div>
            <div className="image">
              <img src={URL.createObjectURL(imageUpload)} />
              <h3>{nameDrug}</h3>
            </div>
            <p>
              <span> لقد قمت باضافه </span>
              {drug === "apartment"
                ? " شقة "
                : drug === "house"
                ? " بيت "
                : drug === "hotel"
                ? " فندق "
                : drug === "castle"
                ? " قصر "
                : " منتجع "}
              {drug === "apartment" ? (
                apartment === "multipleApartment" ? (
                  ` ${MultiApartment} - متكون من شقة `
                ) : (
                  " - متكون من شقة واحده "
                )
              ) : drug === "house" ? (
                house === "allPlace" ? (
                  <strong> الضيف هيحجز {place} </strong>
                ) : (
                  <strong> الضيف هيحجز {privateRoom} </strong>
                )
              ) : drug === "hotel" ? (
                ` ${hotel} ويتكون من عدد ${
                  hotelNum === "onlyHoel" ? ` ${hotel} واحد ` : `عدة ${hotel}`
                } عدد اماكن الاقامه ${numOfHotels}`
              ) : (
                " منتجع "
              )}

              {` يقع ${
                drug === "apartment" ? ' شقة ': drug === "house"
                ? " بيت "
                : drug === "hotel"
                ? " فندق "
                : drug === "castle"
                ? " قصر " : ' منتجع '
              } في  ${countryDrug}, ${cityDrug},${streetDrug},${postalDrug}`}
            </p>
            <p>
              {residence === "bedroom"
                ? " الضيوف ستنام في غرفة نوم "
                : " الضيوف ستام في غرفة معيشة "}
              {residence === "bedroom"
                ? ` عدد السرير الفردي ${numSingleBed} - وعدد السرير المزدوج  ${numDoubleBed} - وعدد السرير الكبير ${numBigBed} - وعدد السرير الكبير جدا  ${numVBigBed} `
                : ` عدد السرير الفردي ${numSingleBed} `}
            </p>

            <p>
              {breakfast === "breakfastYes"
                ? "أقدم وجبة افطار للضيوف"
                : "لا أقدم وجبة افطار للضيوف"}
              {breakfast === "breakfastYes"
                ? lunchBreakfast === "yes"
                  ? ` سعر وجبة الافطار للشخص الواحد كل يوم ${breakfastPrice} $ `
                  : " السعر الذي يدفعة الضيوف لا يتضمن وجبة الافطار "
                : null}
            </p>

            <p>
              {conditioning ? " تكييف - " : null}
              {heating ? " تدفئة - " : null}
              {wifi ? "  واي فاي مجاني - " : null}
              {carCharge ? " محطة شحن السيارات الكهربائية " : null}
            </p>

            <p>
              {kitchen ? " مطبخ  - " : null}
              {smallKitchen ? " مطبخ صغير  - " : null}
              {washingMachine ? " غسالة ملابس " : null}
            </p>

            <p>
              {flatTv ? " تلفزيون بشاشة مسطحة - " : null}
              {pool ? "  مسبح  - " : null}
              {hootTube ? "  حوض استحمام ساخن  - " : null}
              {smallBar ? " ميني بار - " : null}
              {sauna ? " ساونا " : null}
            </p>

            <p>
              {balcony ? " شرفة - " : null}
              {gardenView ? "  إطلالة على الحديقة - " : null}
              {head ? "  تراس - " : null}
              {view ? " إطلالة - " : null}
            </p>

            <p>
              {english ? " الإنجليزية - " : null}
              {arabic ? " العربية - " : null}
              {german ? " الألمانية - " : null}
              {french ? " الفرنسية - " : null}
              {spanish ? " الإسبانية - " : null}
            </p>

            <p>
              {debit === "no"
                ? " لن يتم الخصم من البطاقه الائتمانية "
                : " سيتم الخصم من البطاقة الائتمانية "}
            </p>
          </div>
        </div>

        <div className="info">
          <ul>
            <li>
              <div>
                <FcWorkflow />
                <h4>هل يتم تأكيد الحجوزات فوراً؟</h4>
              </div>
              <span>نعم. يتم تأكيد الحجوزات بمجرد إجراء الضيف للحجز.</span>
            </li>

            <li>
              <div>
                <BsPeople />
                <h4>هل يمكنني اختيار الضيوف الذين يقيمون في مكاني؟</h4>
              </div>

              <span>هل يمكنني اختيار الضيوف الذين يقيمون في مكاني؟</span>
            </li>

            <li>
              <div>
                <BsCalendar4 />
                <h4>هل يمكنني أن أحدد الوقت الذي أتلقى خلاله حجوزات؟</h4>
              </div>
              <span>
                نعم. وأفضل طريقة للقيام بذلك هي الحفاظ على تقويمك محدثاً. أغلق
                أي تواريخ لا تريد استقبال حجوزات خلالها أو التواريخ التي تلقيت
                حجوزات لها عبر مواقع أخرى.
              </span>
            </li>
          </ul>
        </div>
        {disabledAttr === true ? (
          <button onClick={uploadDrug} disabled>
            اضافه العقار
          </button>
        ) : (
          <button onClick={uploadDrug}>اضافه العقار</button>
        )}
        <br />
        <br />
        <button onClick={() => setViewDrug(!viewDrug)}>تعديل</button>
      </>
    );
  };

  const uploadDrug = () => {
    setDisabledAttr(!disabledAttr);
    const sotrageRef = ref(storage, `drugMain/${imageUpload.name}`);
    const uploadTask = uploadBytesResumable(sotrageRef, imageUpload);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const prog = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(prog);
      },
      (error) => console.log(error),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          addDrugs(
            user.uid,
            drug,
            apartment,
            MultiApartment,
            nameDrug,
            countryDrug,
            streetDrug,
            postalDrug,
            cityDrug,
            house,
            place,
            numHouses,
            privateRoom,
            numPrivateRoom,
            hotel,
            hotelNum,
            numOfHotels,
            residence,
            numSingleBed,
            numDoubleBed,
            numBigBed,
            numVBigBed,
            numGuest,
            numBathroom,
            areaApartment,
            conditioning,
            heating,
            wifi,
            carCharge,
            kitchen,
            smallKitchen,
            smallBar,
            washingMachine,
            flatTv,
            pool,
            hootTube,
            sauna,
            balcony,
            gardenView,
            head,
            view,
            breakfast,
            lunchBreakfast,
            breakfastPrice,
            english,
            arabic,
            german,
            french,
            spanish,
            downloadURL,
            loginFrom,
            loginTo,
            logoutFrom,
            logoutTo,
            debit,
            countryAddressU,
            cityAddressU,
            addressU,
            postalAddressU,
            dispatch
          );
          getDrugs(dispatch);
          setError("🎉");
        });
        setViewDrug(!viewDrug);
      }
    );
  };

  // Start handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (drug !== "") {
      if (drug === "apartment") {
        if (apartment === "") {
          setError("من فضلك اختار عدد الشقق");
        } else if (apartment === "multipleApartment") {
          if (MultiApartment === "") {
            setError("من فضلك اكتب عدد الشقق");
          }
        }
      } else if (drug === "house") {
        if (house === "") {
          setError("من فضلك اختار المكان الذي يمكنه الضيوف حجزه");
        } else {
          if (house === "allPlace") {
            if (place === "") {
              setError("من فضلك اختار اماكن الاقامة");
            } else {
              if (numHouses === "") {
                setError(`من فضلك اختار عدد ${place}`);
              }
            }
          } else if (house === "privetRoom") {
            if (privateRoom === "") {
              setError("من فضلك اختار اماكن الاقامة");
            } else {
              if (numPrivateRoom === "") {
                setError(`من فضلك اختار عدد ${privateRoom}`);
              }
            }
          }
        }
      } else if (drug === "hotel") {
        if (hotel === "") {
          setError(
            "من فضلك اختار اي من الانواع المذكوره في القائمة مشابهة لمكان الاقامة الخاص بك"
          );
        } else {
          if (hotelNum === "") {
            setError(`من فضلك اختار كم عدد ${hotel} التي تدرجها`);
          } else {
            if (hotelNum === "") {
              setError("من فضلك اكتب عدد اماكن الاقامة");
            }
          }
        }
      }
      if (nameDrug === "") {
        setError("من فضلك اختار اسم مكان الاقامة");
      } else if (countryDrug === "") {
        setError("من فضلك اختار الدولة / الاقليم");
      } else if (streetDrug === "") {
        setError("من فضلك اختار اسم الشارع ورقم البيت");
      } else if (postalDrug === "") {
        setError("من فضلك اختار الرمز البريدي");
      } else if (cityDrug === "") {
        setError("من فضلك اختار المدينة ");
      }
      if (residence !== "") {
        if (residence === "bedroom") {
          if (numSingleBed === "") {
            setError("من فضلك اكتب عدد السرير الفردي");
          } else if (numDoubleBed === "") {
            setError("من فضلك اكتب عدد السرير المزدوج");
          } else if (numBigBed === "") {
            setError("من فضلك اكتب عدد السرير الكبير");
          } else if (numVBigBed === "") {
            setError("من فضلك اكتب عدد السرير الكبير جدا");
          } else if (numGuest === "") {
            setError("من فضلك اكتب عدد الضيوف الذين يمكنهم الاقامة");
          } else if (numBathroom === "") {
            setError("من فضلك اكتب عدد الحمامات المتوفرة");
          } else if (areaApartment === "") {
            setError("من فضلك اكتب مساحة الشقة");
          }
        } else if (residence === "livingroom") {
          if (numSingleBed === "") {
            setError("من فضلك اكتب عدد السرير الفردي");
          }
        }
      } else {
        setError("من فضلك اختار مكان نوم الضيوف");
      }

      if (breakfast !== "") {
        if (breakfast === "breakfastYes") {
          if (lunchBreakfast !== "") {
            if (lunchBreakfast === "yes") {
              if (breakfastPrice === "") {
                setError("من فضلك ادخل سعر وجبه الافطار للشخص الواحد");
              }
            }
          } else {
            setError(
              "من فضلك اختار هل السعر الذي سيدفعه الضيف يتضمن وجبه الافطار ام لا"
            );
          }
        }
      }
      if (breakfast === "") {
        setError("من فضلك اختار هل ستقدم وجبة افطار للضيوف ام لا ");
      }
      if (imageUpload === null) {
        setError("من فضلك شارك بعض الصور لمكان الاقامة");
      }
      if (loginFrom === "") {
        setError(" من فضلك ادخل موعد تسجل دخول من");
      } else if (loginTo === "") {
        setError("من فضلك ادخل موعد تسجل دخول الي");
      } else if (logoutFrom === "") {
        setError("من فضلك ادخل موعد تسجل الخروج من");
      } else if (logoutTo === "") {
        setError("من فضلك ادخل موعد تسجل الخروج الي");
      }
      if (debit === "") {
        setError("من فضلك هل تريد الخصم من البطاقة الاتمانية ام لا");
      } else if (countryAddressU === "") {
        setError("من فضلك اختار دولتك");
      } else if (cityAddressU === "") {
        setError("من فضلك اختار مدينتك");
      } else if (addressU === "") {
        setError("من فضلك ادخل عنوانك");
      } else if (postalAddressU === "") {
        setError("من فضلك ادخل الرمز البريدي");
      } else {
        setViewDrug(!viewDrug);
      }
    } else {
      setError("من فضلك اختار عقارك");
    }
  };
  // End handleSubmit function

  return (
    <div className="AppointmentBooking">
      <h3>اعرض عقارك على Bookme.com وابدأ باستقبال الضيوف في أي وقت!</h3>
      {viewDrug === true ? (
        showDrugUpload()
      ) : (
        <div className="wrapper">
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
          <div className="collapsible">
            <input type="checkbox" id="collapsible-head1" />
            <label htmlFor="collapsible-head1" className="collapsibleLabel">
              تفاصيل مكان الإقامة
            </label>
            <div className="collapsible-text">
              {drug === "apartment" ||
              drug === "house" ||
              drug === "hotel" ||
              drug === "castle" ? (
                <select onChange={(e) => setResidence(e.target.value)}>
                  <option>أين يمكن للضيوف النوم ؟</option>

                  <>
                    <option value="bedroom">غرفة النوم </option>
                    <option value="livingroom">غرفة معيشة</option>
                  </>
                </select>
              ) : null}
              {drug === "apartment" ||
              drug === "house" ||
              drug === "hotel" ||
              drug === "castle"
                ? showResidence()
                : null}
            </div>
          </div>
          <div className="collapsible">
            <input type="checkbox" id="collapsible-head2" />
            <label htmlFor="collapsible-head2" className="collapsibleLabel">
              وسائل الراحة العامّة
            </label>
            <div className="collapsible-text">
              {drug === "apartment" ||
              drug === "house" ||
              drug === "hotel" ||
              drug === "castle" ? (
                <>
                  <label>وسائل الراحة العامّة</label>
                  <br />
                  <br />
                  <input
                    type="checkbox"
                    onChange={(e) => setConditioning(e.target.value)}
                    className="as"
                    value="conditioning"
                  />
                  <span>تكييف</span>
                  <br />
                  <input
                    type="checkbox"
                    onChange={(e) => setHeating(e.target.value)}
                    className="as"
                    value="heating"
                  />
                  <span>تدفئة</span>
                  <br />
                  <input
                    type="checkbox"
                    onChange={(e) => setWifi(e.target.value)}
                    className="as"
                    value="wifi"
                  />
                  <span>واي فاي مجاني</span>
                  <br />
                  <input
                    type="checkbox"
                    onChange={(e) => setCarCharge(e.target.value)}
                    className="as"
                    value="carCharge"
                  />
                  <span>محطة شحن السيارات الكهربائية</span>
                </>
              ) : null}
            </div>
          </div>

          <div className="collapsible">
            <input type="checkbox" id="collapsible-head7" />
            <label htmlFor="collapsible-head7" className="collapsibleLabel">
              المطبخ وغسيل الملابس
            </label>
            <div className="collapsible-text">
              {drug === "apartment" ||
              drug === "house" ||
              drug === "hotel" ||
              drug === "castle" ? (
                <>
                  <label>المطبخ وغسيل الملابس</label>
                  <br />
                  <br />
                  <input
                    type="checkbox"
                    onChange={(e) => setKitchen(e.target.value)}
                    className="as"
                    value="kitchen"
                  />
                  <span>مطبخ</span>
                  <br />
                  <input
                    type="checkbox"
                    onChange={(e) => setSmallKitchen(e.target.value)}
                    className="as"
                    value="smallKitchen"
                  />
                  <span>مطبخ صغير</span>
                  <br />
                  <input
                    type="checkbox"
                    onChange={(e) => setWashingMachine(e.target.value)}
                    className="as"
                    value="washingMachine"
                  />
                  <span> غسالة ملابس</span>
                </>
              ) : null}
            </div>
          </div>

          <div className="collapsible">
            <input type="checkbox" id="collapsible-head8" />
            <label htmlFor="collapsible-head8" className="collapsibleLabel">
              الترفيه
            </label>
            <div className="collapsible-text">
              {drug === "apartment" ||
              drug === "house" ||
              drug === "hotel" ||
              drug === "castle" ? (
                <>
                  <label>الترفيه</label>
                  <br />
                  <br />
                  <input
                    type="checkbox"
                    onChange={(e) => setFlatTv(e.target.value)}
                    className="as"
                    value="flatTv"
                  />
                  <span>تلفزيون بشاشة مسطحة</span>
                  <br />
                  <input
                    type="checkbox"
                    onChange={(e) => setPool(e.target.value)}
                    className="as"
                    value="pool"
                  />
                  <span>مسبح</span>
                  <br />
                  <input
                    type="checkbox"
                    onChange={(e) => setHootTube(e.target.value)}
                    className="as"
                    value="hootTube"
                  />
                  <span> حوض استحمام ساخن </span>
                  <br />
                  <input
                    type="checkbox"
                    onChange={(e) => setSmallBar(e.target.value)}
                    className="as"
                    value="smallBar"
                  />
                  <span> ميني بار </span>
                  <br />
                  <input
                    type="checkbox"
                    onChange={(e) => setSauna(e.target.value)}
                    className="as"
                    value="sauna"
                  />
                  <span> ساونا</span>
                </>
              ) : null}
            </div>
          </div>

          <div className="collapsible">
            <input type="checkbox" id="collapsible-head9" />
            <label htmlFor="collapsible-head9" className="collapsibleLabel">
              وسائل الراحة الخارجية والإطلالة
            </label>
            <div className="collapsible-text">
              {drug === "apartment" ||
              drug === "house" ||
              drug === "hotel" ||
              drug === "castle" ? (
                <>
                  <label>وسائل الراحة الخارجية والإطلالة</label>
                  <br />
                  <br />
                  <input
                    type="checkbox"
                    onChange={(e) => setBalcony(e.target.value)}
                    className="as"
                    value="balcony"
                  />
                  <span>شرفة</span>
                  <br />
                  <input
                    type="checkbox"
                    onChange={(e) => setGardenView(e.target.value)}
                    className="as"
                    value="gardenView"
                  />
                  <span> إطلالة على الحديقة</span>
                  <br />
                  <input
                    type="checkbox"
                    onChange={(e) => setHead(e.target.value)}
                    className="as"
                    value="head"
                  />
                  <span> تراس</span>
                  <br />
                  <input
                    type="checkbox"
                    onChange={(e) => setView(e.target.value)}
                    className="as"
                    value="view"
                  />
                  <span> إطلالة</span>
                </>
              ) : null}
            </div>
          </div>

          <div className="collapsible">
            <input type="checkbox" id="collapsible-head3" />
            <label htmlFor="collapsible-head3" className="collapsibleLabel">
              تفاصيل وجبة الإفطار
            </label>
            <div className="collapsible-text">
              {drug === "apartment" ||
              drug === "house" ||
              drug === "hotel" ||
              drug === "castle" ? (
                <select onChange={(e) => setBreakfast(e.target.value)}>
                  <option>هل تقدّم وجبة الإفطار للضيوف؟</option>
                  {drug === "apartment" ||
                  drug === "house" ||
                  drug === "hotel" ||
                  drug === "castle" ? (
                    <>
                      <option value="breakfastYes">نعم</option>
                      <option value="breakfastNo">لا </option>
                    </>
                  ) : null}
                </select>
              ) : null}

              {drug === "apartment" ||
              drug === "house" ||
              drug === "hotel" ||
              drug === "castle"
                ? showBreakfast()
                : null}
            </div>
          </div>
          <div className="collapsible">
            <input type="checkbox" id="collapsible-head4" />
            <label htmlFor="collapsible-head4" className="collapsibleLabel">
              ما اللغات التي تتحدث بها أنت أو موظفوك؟
            </label>
            <div className="collapsible-text">
              {drug === "apartment" ||
              drug === "house" ||
              drug === "hotel" ||
              drug === "castle" ? (
                <>
                  <input
                    className="as"
                    type="checkbox"
                    value="english"
                    onChange={(e) => setEnglish(e.target.value)}
                  />
                  <label>الإنجليزية</label>
                  <br />
                  <input
                    className="as"
                    type="checkbox"
                    value="arabic"
                    onChange={(e) => setArabic(e.target.value)}
                  />
                  <label>العربية</label>
                  <br />
                  <input
                    className="as"
                    type="checkbox"
                    value="german"
                    onChange={(e) => setGerman(e.target.value)}
                  />
                  <label>الألمانية</label>
                  <br />
                  <input
                    className="as"
                    type="checkbox"
                    value="frensh"
                    onChange={(e) => setFrench(e.target.value)}
                  />
                  <label>الفرنسية</label>
                  <br />
                  <input
                    className="as"
                    type="checkbox"
                    value="spanish"
                    onChange={(e) => setSpanish(e.target.value)}
                  />
                  <label>الإسبانية</label>
                  <br />
                </>
              ) : null}
            </div>
          </div>
          <div className="collapsible">
            <input type="checkbox" id="collapsible-head5" />
            <label htmlFor="collapsible-head5" className="collapsibleLabel">
              شارك بعض الصور لمكان الإقامة الخاص بك حتى توضح للضيوف ما يمكنهم
              توقعه.
            </label>
            <div className="collapsible-text">
              {drug === "apartment" ||
              drug === "house" ||
              drug === "hotel" ||
              drug === "castle" ? (
                <>
                  <h4>اضافة صور : </h4>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      setImageUpload(e.target.files[0]);
                    }}
                  />
                </>
              ) : null}
            </div>
          </div>
          <div className="collapsible">
            <input type="checkbox" id="collapsible-head6" />
            <label htmlFor="collapsible-head6" className="collapsibleLabel">
              تسجيل الوصول
            </label>
            <div className="collapsible-text">
              {drug === "apartment" ||
              drug === "house" ||
              drug === "hotel" ||
              drug === "castle" ? (
                <form>
                  <p>تسجيل الدخول</p>
                  <div className="row">
                    <div>
                      <label>من</label>
                      <input
                        type="time"
                        min={new Date().toISOString().slice(0, 10)}
                        onChange={(e) => setLoginFrom(e.target.value)}
                      />
                    </div>
                    <div>
                      <label>الي</label>
                      <input
                        type="time"
                        min={new Date().toISOString().slice(0, 10)}
                        onChange={(e) => setLoginTo(e.target.value)}
                      />
                    </div>
                  </div>
                  <p>تسجيل الخروج</p>
                  <div className="row">
                    <div>
                      <label>من</label>
                      <input
                        type="time"
                        min={new Date().toISOString().slice(0, 10)}
                        onChange={(e) => setLogoutFrom(e.target.value)}
                      />
                    </div>
                    <div>
                      <label>الي</label>
                      <input
                        type="time"
                        min={new Date().toISOString().slice(0, 10)}
                        onChange={(e) => setLogoutTo(e.target.value)}
                      />
                    </div>
                  </div>
                </form>
              ) : null}
            </div>
          </div>
          <div className="collapsible">
            <input type="checkbox" id="collapsible-head11" />
            <label htmlFor="collapsible-head11" className="collapsibleLabel">
              عمليات الدفع والفاتورة
            </label>
            <div className="collapsible-text">
              {drug === "apartment" ||
              drug === "house" ||
              drug === "hotel" ||
              drug === "castle" ? (
                <>
                  <h3>خيارات الدفع المتاحة للضيوف</h3>
                  <h4>
                    هل يمكنك الخصم من البطاقة الائتمانية في مكان الإقامة الخاص
                    بك؟
                  </h4>
                  <select onChange={(e) => setDebit(e.target.value)}>
                    <option>هل تريد الخصم من البطاقه الائتمانية</option>
                    <option value="yes">نعم</option>
                    <option value="no">لا</option>
                  </select>
                  {debit === "no" ? (
                    <>
                      <h4>ليست مشكلة! اسمح لضيوفك بالدفع عبر الإنترنت</h4>
                      <span>
                        يمكنك السماح للضيوف بالدفع من خلال خدمة المدفوعات من
                        Booking.com
                      </span>
                      <br />
                      <br />
                      <strong>الرسوم الخاصة بالبنك 2.4% </strong>
                    </>
                  ) : null}
                  <h5>عنوان جهة الاستلام</h5>
                  <label>الدولة / الإقليم</label>
                  <select onChange={(e) => setCountryAddressU(e.target.value)}>
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
                  <select onChange={(e) => setCityAddressU(e.target.value)}>
                    <option>اختار مدينتك</option>
                    {countryDrug ? (
                      dataList &&
                      dataList.data
                        .filter((data) => data.country === countryDrug)
                        .map((city) =>
                          city.cities.map((c,i) => <option key={i} value={c}>{c}</option>)
                        )
                    ) : (
                      <option>الرجاء اختيار دولتك لتظهر مدنك</option>
                    )}
                  </select>
                  <br />
                  <label>العنوان</label>
                  <br />
                  <input
                    type="text"
                    onChange={(e) => setAddressU(e.target.value)}
                  />
                  <br />
                  <label>الرمز البريدي</label> <br />
                  <input
                    type="text"
                    onChange={(e) => setPostalAddressU(e.target.value)}
                  />
                </>
              ) : null}
            </div>
          </div>
          <div className="collapsible">
            {error.length > 0 ? <div className="popup">{error}</div> : null}
          </div>
          <button onClick={handleSubmit}>أتمم عملية التسجيل</button>
        </div>
      )}
    </div>
  );
};

export default AppointmentBooking;
