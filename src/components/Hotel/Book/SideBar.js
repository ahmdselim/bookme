import React from "react";
import balcony from "../../../images/bacony.ico";
import gear from "../../../images/gear.ico";
import garden from "../../../images/garden.ico";
import view from "../../../images/view.ico";
import heating from "../../../images/heating.ico";
import airConditioner from "../../../images/airConditioner.ico";
import wifi from "../../../images/wifi.ico";
import carCharge from "../../../images/charge.ico";
import { AiOutlineRight } from "react-icons/ai";

const SideBar = ({ days, gusts, drug, id, from, to, setBook, book }) => {
  const diffInMs = new Date(to) - new Date(from);
  const diffInDays = diffInMs / (1000 * 60 * 60 * 24);

  return (
    drug &&
    drug.map((data) => {
      if (data.id === id) {
        return (
          <div className="sideBar">
            <div className="sidebarC">
              <h4>تفاصيل حجزك</h4>

              <div className="price">
                <span>مدة الإقامة الإجمالية:</span>
                <strong>
                  {from === ""
                    ? " ليلة واحدة"
                    : diffInDays === 0
                    ? " ليلة واحدة"
                    : `${diffInDays} ليال`}
                </strong>
              </div>
              <div className="price">
                <span>
                  <p>
                    من <br />
                    {from}
                  </p>
                </span>
                <span>
                  الي <br />
                  {to}
                </span>
              </div>
            </div>
            <div className="sidebarC">
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
            </div>
            <div className="sidebarC">
              <p>
                <h4> مكان إقامة يضم : </h4>
                <div className="items">
                  {data.data.conditioning ? (
                    <div>
                      <img src={airConditioner} />
                      <span> تكييف </span>
                    </div>
                  ) : null}
                  {data.data.heating ? (
                    <div>
                      <img src={heating} />
                      <span> تدفئة </span>
                    </div>
                  ) : null}
                  {data.data.wifi ? (
                    <div>
                      <img src={wifi} />
                      <span> وايفاي </span>
                    </div>
                  ) : null}
                  {data.data.carCharge ? (
                    <div>
                      <img src={carCharge} />
                      <span> محطة شحن السيارات الكهربائية </span>
                    </div>
                  ) : null}
                  {data.data.head ? (
                    <div>
                      <img src={gear} />
                      <span> تراس </span>
                    </div>
                  ) : null}
                  {data.data.gardenView ? (
                    <div>
                      <img src={garden} />
                      <span> شرفة </span>
                    </div>
                  ) : null}
                  {data.data.balcony ? (
                    <div>
                      <img src={balcony} />
                      <span> بلكونة </span>
                    </div>
                  ) : null}
                  {data.data.view ? (
                    <div>
                      <img src={view} />
                      <span> اطلالة </span>
                    </div>
                  ) : null}
                </div>
              </p>
            </div>
            <div className="sidebarC">
              <div className="price">
                <h4>السعر</h4>
                <span>
                  {!diffInDays && gusts === ""
                    ? data.data.priceApartment * 1 * 1
                    : !diffInDays
                    ? data.data.priceApartment * 1 * gusts
                    : gusts === ""
                    ? data.data.priceApartment * 1 * diffInDays
                    : data.data.priceApartment * diffInDays * gusts}
                  $
                </span>
              </div>
            </div>
            <button onClick={() => setBook(!book)}>
              <AiOutlineRight />
            </button>
          </div>
        );
      }
    })
  );
};

export default SideBar;
