import React from "react";
import user from "../../images/user.png";
import width from "../../images/width.png";
import shower from "../../images/shower.ico";
const BookTable = (props) => {
  const { data } = props;
  const icon = () => {
    for (let i = 0; i < 5; i++) {
      // return <img src={user} />;
      return <p>sa</p>;
    }
  };

  return (
    <div className="drugTable">
      <table>
        <thead>
          <tr>
            <td>نوع الغرفة</td>
            <td>عدد الشقق</td>
            <td>تتّسِع</td>
            <td>سعر اليوم للشقة الواحدة</td>
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
                <span> عدد السرير الفردي {data.data.numSingleBed}</span>
              ) : null}
              {data.data.residence === "bedroom" ? (
                <>
                  <span>عدد السرير الفردي {data.data.numSingleBed}</span>
                  <span>عدد السرير المزدوج {data.data.numDoubleBed}</span>
                  <span>عدد السرير الكبير {data.data.numBigBed}</span>
                  <span>عدد السرير الكبير جدا {data.data.numVBigBed}</span>
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
            <td>{data.data.numGuest}</td>
            <td>
              {data.data.drug === "apartment"
                ? data.data.priceApartment * 1 * data.data.numGuest
                : null}
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
