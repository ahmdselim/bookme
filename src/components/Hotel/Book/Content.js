import React, { Fragment, useEffect, useState, useRef } from "react";
import { BsPinMap } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addBookings, getBookings } from "../../../redux/actions/actionCreator";
import Card from "./stripe/Card";
import { auth } from "../../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";

const Content = ({
  drug,
  id,
  to,
  from,
  setTo,
  setFrom,
  setBook,
  book,
  setErrorBook,
}) => {
  const users = useSelector((state) => state.Reducer.users);
  const dispatch = useDispatch();
  const [user, loading] = useAuthState(auth);
  const [dataList, setData] = useState("");
  const [pay, setPay] = useState("");
  const inputFN = useRef();
  const inputSN = useRef();
  const inputEmail = useRef();
  const inputCountry = useRef();
  const [fName, setFName] = useState();
  const [sName, setSName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [requests, setRequests] = useState("");
  const [error, setError] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) {
      navigate("/login");
    }
    setFName(inputFN.current.value);
    setSName(inputSN.current.value);
    setEmail(inputEmail.current.value);
    setCountry(inputCountry.current.value);
    fetch("https://countriesnow.space/api/v0.1/countries")
      .then((res) => {
        return res.json();
      })
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  const handleBook = (e) => {
    e.preventDefault();
    if (fName === "") {
      setError("من فضلك ادخل الاسم الأول (بالإنجليزية) ");
    } else if (sName === "") {
      setError("من فضلك ادخل الاسم العائلة (بالإنجليزية) ");
    } else if (email === "") {
      setError("من فضلك ادخل عنوان البريد الإلكتروني ");
    } else if (phone === "") {
      setError("من فضلك ادخل الهاتف (يفضل رقم الهاتف المحمول) ");
    }
    //  else if (pay === "") {
    //   setError("من فضلك اختار هل تريد الدفع الان ام لاحقا ");
    // }
    else {
      setErrorBook("🎉 مبروك لقد تم حجزك بنجاح ");
      setTo("");
      setFrom("");
      setBook(!book);
      addBookings(
        user.uid,
        id,
        fName,
        sName,
        email,
        country,
        phone,
        requests,
        to,
        from,
        pay,
        dispatch
      );
      getBookings(dispatch);
    }
  };

  return (
    drug &&
    drug.map((data) => {
      if (data.id === id) {
        return (
          <div className="contentBook" key={data.id}>
            <div className="hotelB">
              <div>
                <img src={data.data.mainImage} alt="hotel" />
                <p>{data.data.nameDrug}</p>
              </div>
              <p>
                <BsPinMap />
                {data.data.countryDrug}, {data.data.cityDrug},
                {data.data.streetDrug}
              </p>
            </div>
            <div className="hotelC">
              <div className="row">
                <h4>أدخـل بياناتك</h4>
                <p>
                  {users
                    .filter((dataU) => dataU.data.uid === data.data.userID)
                    .map((data) =>
                      data.data.name === "" ? "مستخدم جديد" : data.data.name
                    )}
                </p>
              </div>
              <div className="row">
                <p className="required_fields_description">
                  أوشكت على الانتهاء! قم فقط بتعبئة البيانات المطلوبة *
                </p>
              </div>
              {/* <form> */}
              {error.length > 0 ? <div className="popup">{error}</div> : null}
              <div className="row inputs">
                <div>
                  <label>الاسم الأول (بالإنجليزية) *</label>
                  <input
                    type="text"
                    defaultValue={users
                      .filter((dataU) => dataU.data.uid === data.data.userID)
                      .map((data) =>
                        data.data.name === "" ? "مستخدم جديد" : data.data.name
                      )}
                    onChange={(e) => setFName(e.target.value)}
                    ref={inputFN}
                  />
                </div>
                <div>
                  <label>الاسم العائلة (بالإنجليزية) *</label>
                  <input
                    type="text"
                    defaultValue={users
                      .filter((dataU) => dataU.data.uid === data.data.userID)
                      .map((data) =>
                        data.data.name === "" ? "مستخدم جديد" : data.data.name
                      )}
                    onChange={(e) => setSName(e.target.value)}
                    ref={inputSN}
                  />
                </div>
              </div>
              <div>
                <label>عنوان البريد الإلكتروني *</label>
                <input
                  type="text"
                  defaultValue={users
                    .filter((dataU) => dataU.data.uid === data.data.userID)
                    .map((data) => data.data.email)}
                  onChange={(e) => setEmail(e.target.value)}
                  ref={inputEmail}
                />
              </div>
              <div>
                <label>الدولة / الإقليم *</label>
                <select
                  onChange={(e) => setCountry(e.target.value)}
                  ref={inputCountry}
                >
                  <option value={data.data.countryAddressU}>
                    {data.data.countryAddressU}
                  </option>
                  {dataList &&
                    dataList.data.map((data, i) => (
                      <Fragment key={i}>
                        <option value={data.country}>{data.country}</option>
                      </Fragment>
                    ))}
                </select>
              </div>
              <div>
                <label>الهاتف (يفضل رقم الهاتف المحمول) *</label>
                <input
                  type="number"
                  onChange={(e) => setPhone(e.target.value)}
                />
                <p>يتم طلبه من قبل مكان الإقامة للتحقق من حجزك</p>
              </div>
              {/* </form> */}
            </div>
            <div className="hotelC">
              <h4>طلبات خاصة</h4>
              <p>
                لا يمكن ضمان الطلبات الخاصة، ولكن سيبذل مكان الإقامة قصارى جهده
                لتلبية احتياجاتك. يمكنك دائماً تقديم طلب خاص بعد إكمال الحجز
                الخاص بك!
              </p>
              <textarea
                onChange={(e) => setRequests(e.target.value)}
              ></textarea>
            </div>
            {data.data.debit === "yes" ? (
              <div className="hotelC">
                <h3>متى ترغب بالدفع؟</h3>
                <div className="pay">
                  <div>
                    <input
                      type="radio"
                      value="payLatter"
                      className="as"
                      onChange={(e) => setPay(e.target.value)}
                      name="pay"
                      id="payLatter"
                    />
                    <label htmlFor="payLatter">ادفع لاحقا</label>
                  </div>
                  <p>
                    سيتولى مكان الإقامة عملية الدفع. يعتمد تاريخ تحصيل المبلغ
                    منك على شروط حجزك.
                  </p>
                </div>
                <div className="pay">
                  <div>
                    <input
                      type="radio"
                      value="payNow"
                      name="pay"
                      className="as"
                      id="payNow"
                      onChange={(e) => setPay(e.target.value)}
                    />
                    <label htmlFor="payNow">ادفع الان</label>
                  </div>
                  <p>ستدفع باستخدام Bookme.com عند إتمام إجراء هذا الحجز.</p>
                </div>
              </div>
            ) : null}
            {pay === "payNow" ? <Card /> : null}
            <div
              className="hotelC"
              style={{ backgroundColor: "#FFF", border: "none" }}
            >
              <button onClick={handleBook}>أكمل حجزك</button>
            </div>
          </div>
        );
      }
    })
  );
};

export default Content;
