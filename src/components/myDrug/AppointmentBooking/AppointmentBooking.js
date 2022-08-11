import React, { useState, useEffect, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { auth, db, storage } from "../../../firebase/config";
import { BsCalendar4, BsPeople } from "react-icons/bs";
import { FcWorkflow } from "react-icons/fc";
import {
  addDrugs,
  getDrugs,
  updateDrug,
} from "../../../redux/actions/actionCreator";
import { useDispatch } from "react-redux";
import ChooseDrug from "./drug/ChooseDrug";
import Residence from "./drug/Residence";
import Comfort from "./drug/Comfort";
import KitchenAndlaundry from "./drug/KitchenAndlaundry";
import View from "./drug/View";
import Breakfast from "./drug/Breakfast";
import Entertainment from "./drug/Entertainment";
import Language from "./drug/Language";
import ImagesMain from "./drug/ImagesMain";
import CheckIn from "./drug/CheckIn";
import Payment from "./drug/Payment";
import PetAnimal from "./drug/PetAnimal";
import MapLocation from "./drug/MapLocation";
import useGeoLocation from "./drug/useGeoLocation";
import Images from "./drug/Images";

const AppointmentBooking = ({ drugSelected }) => {
  const dispatch = useDispatch();
  const [drug, setDrug] = useState(drugSelected.data.drug);
  const [residence, setResidence] = useState(drugSelected.data.residence);
  const [apartment, setApartment] = useState(drugSelected.data.apartment);
  const [breakfast, setBreakfast] = useState(drugSelected.data.breakfast);
  const [clientPhone, setClientPhone] = useState(drugSelected.data.clientPhone);
  const [lunchBreakfast, setLunchBreakfast] = useState(
    drugSelected.data.lunchBreakfast
  );
  const [house, setHouse] = useState(drugSelected.data.house);
  const [place, setPlace] = useState(drugSelected.data.place);
  const [hotel, setHotel] = useState(drugSelected.data.hotel);
  const [hotelNum, setHotelNum] = useState(drugSelected.data.hotelNum);
  const [numOfHotels, setNumOfHotels] = useState(drugSelected.data.numOfHotels);
  const [error, setError] = useState([]);
  const [privateRoom, setPrivateRoom] = useState(drugSelected.data.privateRoom);
  const [MultiApartment, setMultiApartment] = useState(
    drugSelected.data.MultiApartment
  );
  const [nameDrug, setNameDrug] = useState(drugSelected.data.nameDrug);
  const [countryDrug, setCountryDrug] = useState(drugSelected.data.countryDrug);
  const [streetDrug, setStreetDrug] = useState(drugSelected.data.streetDrug);
  const [postalDrug, setPostalDrug] = useState(drugSelected.data.postalDrug);
  const [cityDrug, setCityDrug] = useState(drugSelected.data.cityDrug);
  const [numHouses, setNumHouses] = useState(drugSelected.data.numHouses);
  const [numPrivateRoom, setNumPrivateRoom] = useState(
    drugSelected.data.numPrivateRoom
  );
  const [numSingleBed, setNumSingleBed] = useState(
    drugSelected.data.numSingleBed
  );
  const [numDoubleBed, setNumDoubleBed] = useState(
    drugSelected.data.numDoubleBed
  );
  const [numBigBed, setNumBigBed] = useState(drugSelected.data.numBigBed);
  const [numVBigBed, setNumVBigBed] = useState(drugSelected.data.numVBigBed);
  const [numGuest, setNumGuest] = useState(drugSelected.data.numGuest);
  const [numBathroom, setNumBathroom] = useState(drugSelected.data.numBathroom);
  const [areaApartment, setAreaApartment] = useState(
    drugSelected.data.areaApartment
  );
  const [conditioning, setConditioning] = useState(
    drugSelected.data.conditioning
  );
  const [heating, setHeating] = useState(drugSelected.data.heating);
  const [wifi, setWifi] = useState(drugSelected.data.wifi);
  const [carCharge, setCarCharge] = useState(drugSelected.data.carCharge);
  const [kitchen, setKitchen] = useState(drugSelected.data.kitchen);
  const [smallKitchen, setSmallKitchen] = useState(
    drugSelected.data.smallKitchen
  );
  const [washingMachine, setWashingMachine] = useState(
    drugSelected.data.washingMachine
  );
  const [flatTv, setFlatTv] = useState(drugSelected.data.flatTv);
  const [pool, setPool] = useState(drugSelected.data.pool);
  const [hootTube, setHootTube] = useState(drugSelected.data.hootTube);
  const [smallBar, setSmallBar] = useState(drugSelected.data.smallBar);
  const [sauna, setSauna] = useState(drugSelected.data.sauna);
  const [balcony, setBalcony] = useState(drugSelected.data.balcony);
  const [gardenView, setGardenView] = useState(drugSelected.data.gardenView);
  const [head, setHead] = useState(drugSelected.data.head);
  const [view, setView] = useState(drugSelected.data.view);
  const [breakfastPrice, setBreakfastPrice] = useState(
    drugSelected.data.breakfast
  );
  const [english, setEnglish] = useState(drugSelected.data.english);
  const [arabic, setArabic] = useState(drugSelected.data.arabic);
  const [german, setGerman] = useState(drugSelected.data.german);
  const [french, setFrench] = useState(drugSelected.data.french);
  const [spanish, setSpanish] = useState(drugSelected.data.spanish);
  const [imageUpload, setImageUpload] = useState(null);
  const [progress, setProgress] = useState(0);
  const [loginFrom, setLoginFrom] = useState(drugSelected.data.loginFrom);
  const [loginTo, setLoginTo] = useState(drugSelected.data.loginTo);
  const [logoutFrom, setLogoutFrom] = useState(drugSelected.data.logoutFrom);
  const [logoutTo, setLogoutTo] = useState(drugSelected.data.logoutTo);
  const [user, loading] = useAuthState(auth);
  const [dataList, setData] = useState("");
  const [urls, setUrls] = useState([]);
  const [viewDrug, setViewDrug] = useState(false);
  const [disabledAttr, setDisabledAttr] = useState(false);
  const [countryAddressU, setCountryAddressU] = useState(
    drugSelected.data.countryAddressU
  );
  const [cityAddressU, setCityAddressU] = useState(
    drugSelected.data.cityAddressU
  );
  const [addressU, setAddressU] = useState(drugSelected.data.addressU);
  const [postalAddressU, setPostalAddressU] = useState(
    drugSelected.data.postalAddressU
  );
  const [debit, setDebit] = useState(drugSelected.data.debit);
  const [pet, setPet] = useState(drugSelected.data.pet);
  const [priceApartment, setPriceApartment] = useState(
    drugSelected.data.priceApartment
  );
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const [numOfRooms, setNumOfRooms] = useState(drugSelected.data.numOfRooms);
  const location = useGeoLocation();
  const [url1, setUrl1] = useState(drugSelected.data.mainImage);
  const [url2, setUrl2] = useState(drugSelected.data.images);
  const [position, setPosition] = useState({ lat: 50.44, lng: 30.045 });
  const [showButton, setShowButton] = useState(false);
  const intervalRef = useRef(null);
  const [time, setTimer] = useState("00:00:00");

  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor(((total / 1000) * 60 * 60) % 24);
    const days = Math.floor((total / 1000) * 60 * 60 * 24);
    return { total, days, hours, minutes, seconds };
  }
  function startTimer(deadline) {
    let { total, days, hours, minutes, seconds } = getTimeRemaining(deadline);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    } else {
      clearInterval(intervalRef.current);
    }
  }
  function clearTimer(endtime) {
    setTimer("00:00:30");
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    const id = setInterval(() => {
      startTimer(endtime);
    }, 1000);
    intervalRef.current = id;
  }
  function getDeadlineTime() {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + 30);
    return deadline;
  }

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

    clearTimer(getDeadlineTime());
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [user, loading, navigate]);

  const showDrugUpload = () => {
    setInterval(() => {
      setShowButton(true);
    }, 30000);

    return (
      <>
        <div className="drugUpload">
          <div>
            <div className="image">
              <h3>{nameDrug === "" ? drugSelected.data.nameDrug : nameDrug}</h3>
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
                drug === "apartment"
                  ? " شقة "
                  : drug === "house"
                  ? " بيت "
                  : drug === "hotel"
                  ? " فندق "
                  : drug === "castle"
                  ? " قصر "
                  : " منتجع "
              } في  ${countryDrug}, ${cityDrug},${streetDrug},${postalDrug}`}
            </p>
            <p>سعر الغرفة للفرد الواحد {priceApartment} $</p>
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
              {pet === "yesPet"
                ? "يسمح للضيوف استقبال الحيوانات الاليفة معهم"
                : "لا يسمح للضيوف استقبال الحيوانات الاليفة معهم"}
            </p>
            <p>
              {debit === "no"
                ? " لن يتم الخصم من البطاقه الائتمانية "
                : " سيتم الخصم من البطاقة الائتمانية "}
            </p>
            <p>
              أتعهد أنا بتحويل مبلغ 5 ريال سعودي
              <br /> لرقم الحساب المصرفي الدولي التالي
              <br /> SA1510000032900000090010
              <br /> في البنك الاهلي السعودي
              <br /> لحساب السيد : عبدالرحمن العوفي
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

        {showButton ? (
          <button onClick={uploadDrug}>اضافه العقار</button>
        ) : (
          <>
            <span>
              من فضلك انتظر ثواني نحن نقوم بتحليل بياناتك وسيظهر زر اضافة العقار
            </span>
            <br /> {time}
          </>
        )}
        <br />
        <br />
        <button onClick={() => setViewDrug(!viewDrug)}>تعديل</button>
      </>
    );
  };

  const uploadDrug = (e) => {
    e.preventDefault();
    setDisabledAttr(!disabledAttr);

    updateDrug(
      drugSelected.id,
      user.uid,
      clientPhone,
      url2,
      drug,
      apartment,
      numOfRooms,
      MultiApartment,
      priceApartment,
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
      url1,
      loginFrom,
      loginTo,
      logoutFrom,
      logoutTo,
      debit,
      countryAddressU,
      cityAddressU,
      addressU,
      postalAddressU,
      pet,
      position.lat,
      position.lng
    );
    getDrugs(dispatch);
    setError("🎉");
    setViewDrug(!viewDrug);
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
      if (priceApartment === "") {
        setError("من فضلك ادخل سعر الغرفة للفرد");
      } else if (nameDrug === "") {
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
        setError("من فضلك اختار الصورة لعقارك");
      } else {
        const storageRef1 = ref(storage, `drugMain/${imageUpload.name}`);
        const uploadTask1 = uploadBytesResumable(storageRef1, imageUpload);
        uploadTask1.on(
          "state_changed",
          (snapshot) => {
            const prog = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setProgress(prog);
          },
          (error) => console.log(error),
          () => {
            getDownloadURL(uploadTask1.snapshot.ref).then((downloadURL) => {
              setUrl1(downloadURL);
            });
          }
        );
      }
      if (urls === null) {
        setError("من فضلك شارك بعض الصور لمكان الاقامة");
      } else {
        for (let i = 0; i < urls.length; i++) {
          const storageRef = ref(storage, `images/${urls[i].name}`);
          const uploadTask = uploadBytesResumable(storageRef, urls[i]);
          uploadTask.on(
            "state_changed",
            (snapshot) => {
              let progress;
              progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            },
            (err) => {
              console.log(err);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setUrl2((state) => [...state, downloadURL]);
              });
            }
          );
        }
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
      }
      if (pet === "") {
        setError(
          "من فضلك اختار هل تريد السماح للضيوف باصطحاب الحيوانات الاليفة ام لا"
        );
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
          <ChooseDrug
            drugSelected={drugSelected}
            drug={drug}
            setDrug={setDrug}
            setPriceApartment={setPriceApartment}
            setNumGuest={setNumGuest}
            setNumBathroom={setNumBathroom}
            setAreaApartment={setAreaApartment}
            setNameDrug={setNameDrug}
            setCountryDrug={setCountryDrug}
            countryDrug={countryDrug}
            dataList={dataList}
            setCityDrug={setCityDrug}
            setStreetDrug={setStreetDrug}
            setPostalDrug={setPostalDrug}
            setHouse={setHouse}
            setPlace={setPlace}
            setNumHouses={setNumHouses}
            place={place}
            setPrivateRoom={setPrivateRoom}
            house={house}
            privateRoom={privateRoom}
            setNumPrivateRoom={setNumPrivateRoom}
            setHotel={setHotel}
            setHotelNum={setHotelNum}
            hotel={hotel}
            hotelNum={hotelNum}
            setNumOfHotels={setNumOfHotels}
            setApartment={setApartment}
            setMultiApartment={setMultiApartment}
            apartment={apartment}
            setNumOfRooms={setNumOfRooms}
            setClientPhone={setClientPhone}
          />
          <MapLocation position={position} setPosition={setPosition} />
          <Residence
            drug={drug}
            setResidence={setResidence}
            residence={residence}
            setNumSingleBed={setNumSingleBed}
            setNumDoubleBed={setNumDoubleBed}
            setNumBigBed={setNumBigBed}
            setNumVBigBed={setNumVBigBed}
          />
          <Comfort
            drug={drug}
            setConditioning={setConditioning}
            setHeating={setHeating}
            setWifi={setWifi}
            setCarCharge={setCarCharge}
          />
          <KitchenAndlaundry
            drug={drug}
            setKitchen={setKitchen}
            setSmallKitchen={setSmallKitchen}
            setWashingMachine={setWashingMachine}
          />
          <Entertainment
            drug={drug}
            setFlatTv={setFlatTv}
            setHootTube={setHootTube}
            setPool={setPool}
            setSauna={setSauna}
            setSmallBar={setSmallBar}
          />
          <View
            drug={drug}
            setBalcony={setBalcony}
            setGardenView={setGardenView}
            setHead={setHead}
            setView={setView}
          />
          <Breakfast
            drug={drug}
            setBreakfast={setBreakfast}
            breakfast={breakfast}
            setLunchBreakfast={setLunchBreakfast}
            lunchBreakfast={lunchBreakfast}
            setBreakfastPrice={setBreakfastPrice}
          />
          <Language
            drug={drug}
            setArabic={setArabic}
            setEnglish={setEnglish}
            setFrench={setFrench}
            setGerman={setGerman}
            setSpanish={setSpanish}
          />
          <ImagesMain drug={drug} setImageUpload={setImageUpload} />
          <Images drug={drug} setUrls={setUrls} />
          <CheckIn
            drugSelected={drugSelected}
            drug={drug}
            setLoginFrom={setLoginFrom}
            setLoginTo={setLoginTo}
            setLogoutFrom={setLogoutFrom}
            setLogoutTo={setLogoutTo}
          />
          <Payment
            drugSelected={drugSelected}
            drug={drug}
            setAddressU={setAddressU}
            setCityAddressU={setCityAddressU}
            setCountryAddressU={setCountryAddressU}
            setDebit={setDebit}
            setPostalAddressU={setPostalAddressU}
            debit={debit}
            dataList={dataList}
            countryDrug={countryDrug}
          />
          <PetAnimal drug={drug} setPet={setPet} />
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
