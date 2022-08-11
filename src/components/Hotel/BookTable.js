import React, { useState } from "react";
import userImage from "../../images/user.png";
import width from "../../images/width.png";
import shower from "../../images/shower.ico";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase/config";
import { useNavigate } from "react-router-dom";

const BookTable = ({
  data,
  setBook,
  book,
  days,
  setTo,
  setFrom,
  gusts,
  setGusts,
  to,
  from,
}) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const diffInMs = new Date(to) - new Date(from);
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
  const [error, setError] = useState([]);
  let list = [];
  for (let i = 1; i <= 30; i++) {
    list.push(i);
  }

  const checkBook = () => {
    if (to === "") {
      setError("من فضلك ادخل تاريخ حجزك");
    } else if (from === "") {
      setError("من فضلك ادخل تاريخ حجزك");
    } else setBook(!book);
  };
  return (
    <div className="drugTable">
      <table>
        <thead>
          <tr>
            <td>نوع الغرفة</td>
            <td>عدد الشقق</td>
            <td>عدد الغرف</td>
            <td>عدد الضيوف</td>
            <td>مدة الحجز</td>
            <td>تتّسِع</td>
            <td>
              {days === "" || gusts === ""
                ? data.data.drug === "apartment"
                  ? "سعر اليوم للشقة الواحدة"
                  : "سعر اليوم للغرفة الواحدة"
                : "سعر الشقة"}
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              {data.data.residence === "livingroom" ? (
                <h5>غرفة معيشة</h5>
              ) : (
                <h5>غرفة نوم</h5>
              )}
              {data.data.residence === "livingroom" ? (
                <p> عدد السرير الفردي {data.data.numSingleBed}</p>
              ) : null}
              {data.data.residence === "bedroom" ? (
                <>
                  <p>عدد السرير الفردي {data.data.numSingleBed}</p>
                  <p>عدد السرير المزدوج {data.data.numDoubleBed}</p>
                  <p>عدد السرير الكبير {data.data.numBigBed}</p>
                  <p>عدد السرير الكبير جدا {data.data.numVBigBed}</p>
                </>
              ) : null}

              <ul>
                <li>
                  <img src={width} />
                  {data.data.areaApartment}
                </li>
                <li>
                  <img src={shower} />
                  {data.data.numBathroom}
                </li>
              </ul>
            </td>
            <td>
              {data.data.apartment === "oneApartment"
                ? 1
                : data.data.apartment === "multiApartment"
                ? data.data.MultiApartment
                : null}
            </td>
            <td>{data.data.numOfRooms}</td>
            <td>
              <select onChange={(e) => setGusts(e.target.value)}>
                <option value="">اختار عدد الضيوف</option>
                {list.map((list, i) => (
                  <option key={i} value={list}>
                    {list}
                  </option>
                ))}
              </select>
            </td>
            <td>
              <strong>من</strong>
              <br />
              <input
                type="datetime-local"
                // minDate={new Date()}
                onChange={(e) => setFrom(e.target.value)}
                min={new Date().toISOString().slice(0, 10)}
              />
              <br />
              <strong>الي</strong>
              <br />
              <input
                type="datetime-local"
                // minDate={new Date()}
                onChange={(e) => setTo(e.target.value)}
                min={new Date().toISOString().slice(0, 10)}
              />
              {error.length > 0 ? <p>{error}</p> : null}
            </td>
            <td>{data.data.numGuest}</td>
            <td>
              {!diffInDays && gusts === ""
                ? data.data.priceApartment * 1 * 1
                : !diffInDays
                ? data.data.priceApartment * 1 * gusts
                : gusts === ""
                ? data.data.priceApartment * 1 * diffInDays
                : data.data.priceApartment * diffInDays * gusts}

              <br />
              <br />
              {user ? (
                <button onClick={() => checkBook()} id="book">
                  احجز الان
                </button>
              ) : (
                <button onClick={() => navigate("/login")} id="book">
                  الرجاء تسجيل الدخول
                </button>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
