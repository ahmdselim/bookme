import React, { useState } from "react";
import user from "../../images/user.png";
import width from "../../images/width.png";
import shower from "../../images/shower.ico";
const BookTable = ({ data }) => {
  const [days, setDays] = useState("");
  const [gusts, setGusts] = useState("");
  let list = [];
  for (let i = 1; i <= 30; i++) {
    list.push(i);
  }
  const handleChooseDay = (e) => {};
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
              {data.data.drug === "apartment" ? 1 : data.data.MultiApartment}
            </td>
            <td>{data.data.numOfRooms}</td>
            <td>
              <select onChange={(e) => setDays(e.target.value)}>
                <option value="">اختار عدد الايام</option>
                {list.map((list) => (
                  <option value={list}>{list}</option>
                ))}
              </select>
            </td>
            <td>
              <select onChange={(e) => setGusts(e.target.value)}>
                <option value="">اختار عدد الايام</option>
                {list.map((list) => (
                  <option value={list}>{list}</option>
                ))}
              </select>
            </td>
            <td>{data.data.numGuest}</td>
            <td>
              {/* {days !== "" || gusts !== ""
                ? data.data.priceApartment * days * gusts
                : days === ""
                ? data.data.priceApartment * 1 * gusts
                : gusts === ""
                ? data.data.priceApartment * days * 1
                : data.data.priceApartment * 1 * 1} */}
              {days === "" && gusts === ""
                ? data.data.priceApartment * 1 * 1
                : days === ""
                ? data.data.priceApartment * 1 * gusts
                : gusts === ""
                ? data.data.priceApartment * 1 * days
                : data.data.priceApartment * days * gusts}
              <br />
              <br />
              <button>احجز الان</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
