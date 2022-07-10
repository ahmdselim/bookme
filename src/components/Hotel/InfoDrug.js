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
          </li>

          <li>
            <div>
              <img src={calendar} />
              <span>تسجيل المغادرة</span>
            </div>
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
            <span>الحيوانات الأليفة غير مسموح بها</span>
          </li>

          <li>
            <div>
              <img src={creditCard} />
              <span>يُرحب الفندق بهذه البطاقات</span>
            </div>
            <span>
              يقبل {data.data.nameDrug} هذه البطاقات ويحتفظ بالحق في احتجاز مبلغ
              بشكل مؤقت قبل الوصول.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default InfoDrug;
