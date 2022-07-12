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
  const [pet, setPet] = useState("");
  const [priceApartment, setPriceApartment] = useState("");
  const [imagesUpload, setImagesUpload] = useState(null);
  const [image, setImage] = "";
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
            pet,
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
          />

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

          <CheckIn
            drug={drug}
            setLoginFrom={setLoginFrom}
            setLoginTo={setLoginTo}
            setLogoutFrom={setLogoutFrom}
            setLogoutTo={setLogoutTo}
          />

          <Payment
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
