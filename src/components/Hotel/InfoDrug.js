import React from "react";
import wallet from "../../images/wallet.ico";
import securePayment from "../../images/securePayment.ico";
import deal from "../../images/deal.ico";
import newlyweds from "../../images/newlyweds.ico";
import calendar from "../../images/calendar.ico";
import info from "../../images/info.ico";
import family from "../../images/family.ico";
import petDog from "../../images/petDog.ico";
import creditCard from "../../images/creditCard.ico";
import phone from "../../images/phone.ico";

const InfoDrug = (props) => {
  const { data } = props;
  return (
    <div className="InfoDrug">
      <h4>5 أسباب لاختيار {data.data.nameDrug}</h4>
      <ul>
        <li>
          <img src={wallet} />
          <span>أسعار لا تقارن!</span>
        </li>
        <li>
          <img src={securePayment} />
          <span>قم بإدارة حجوزاتك من خلال الإنترنت</span>
        </li>
        <li>
          <img src={deal} />
          <span>قم بإدارة حجوزاتك من خلال الإنترنت</span>
        </li>
        <li>
          <img src={newlyweds} />
          <span>موقع ومرافق رائعة للأزواج</span>
        </li>
      </ul>
      <div className="info">
        <h4>معلومات تهمك</h4>
        <ul className="listInfo">
          <li>
            <div>
              <img src={calendar} />
              <span>تسجيل الوصول</span>
            </div>
            <span>
              من {data.data.loginFrom} الي {data.data.loginTo}
            </span>
          </li>

          <li>
            <div>
              <img src={calendar} />
              <span>تسجيل المغادرة</span>
            </div>
            <span>
              من {data.data.logoutFrom} الي {data.data.logoutTo}
            </span>
          </li>

          <li>
            <div>
              <img src={info} />
              <span>إلغاء الحجز/ دفع مسبق</span>
            </div>
            <span>
              تتباين سياسة إلغاء الحجز والدفع المسبق وفقاً لنوع مكان الإقامة
              المحجوز. يرجى التحقق من الشروط التي قد يتم تطبيقها على كل خيار عند
              تحديد اختيارك.
            </span>
          </li>

          <li>
            <div>
              <img src={family} />
              <span>الأطفال والأسرّة</span>
            </div>
            <span>يرحب بالأطفال أياً كانت أعمارهم.</span>
          </li>

          <li>
            <div>
              <img src={petDog} />
              <span>الحيوانات الأليفة</span>
            </div>
            {data.data.pet === "yesPet" ? (
              <span>الحيوانات الأليفة مسموح بها</span>
            ) : (
              <span>الحيوانات الأليفة غير مسموح بها</span>
            )}
          </li>

          <li>
            <div>
              <img src={phone} />
              <span>خدمة عملاء العقار</span>
            </div>
            {data.data.clientPhone === "" ? (
              <span>
                هذا العقار لا يملك رقم خدمه للعملاء الرجاء التواصل معهم عن طريق
                البريد الالكتروني
              </span>
            ) : (
              <span>{data.data.clientPhone}</span>
            )}
          </li>

          <li>
            <div>
              <img src={creditCard} />
              <span>يُرحب الفندق بهذه البطاقات</span>
            </div>
            {data.data.debit === "yes" ? (
              <span>
                يقبل {data.data.nameDrug} هذه البطاقات ويحتفظ بالحق في احتجاز
                مبلغ بشكل مؤقت قبل الوصول.
              </span>
            ) : (
              <span>
                لا يقبل {data.data.nameDrug} هذه البطاقات ويحتفظ بالحق في احتجاز
                مبلغ بشكل مؤقت قبل الوصول.
              </span>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InfoDrug;
