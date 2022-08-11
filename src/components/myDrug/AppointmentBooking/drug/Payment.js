import React, { Fragment } from "react";

const Payment = ({
  drugSelected,
  drug,
  setAddressU,
  setCityAddressU,
  setCountryAddressU,
  setDebit,
  setPostalAddressU,
  debit,
  dataList,
  countryDrug,
}) => {
  return (
    <>
      <div className="collapsible">
        <input type="checkbox" id="collapsible-head11" />
        <label htmlFor="collapsible-head11" className="collapsibleLabel">
          عمليات الدفع والفاتورة
        </label>
        <div className="collapsible-text">
          <>
            <h3>خيارات الدفع المتاحة للضيوف</h3>
            <h4>
              هل يمكنك الخصم من البطاقة الائتمانية في مكان الإقامة الخاص بك؟
            </h4>
            <select onChange={(e) => setDebit(e.target.value)}>
              <option defaultValue={drugSelected.data.debit}>
                {drugSelected.data.debit === "no"
                  ? "لا"
                  : drugSelected.data.debit === "yes"
                  ? "نعم"
                  : ">هل تريد الخصم من البطاقه الائتمانية"}
              </option>
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
              <option defaultValue={drugSelected.data.countryAddressU}>
                {drugSelected.data.countryAddressU === ""
                  ? "اختار دولتك"
                  : drugSelected.data.countryAddressU}
              </option>
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
              <option defaultValue={drugSelected.data.cityAddressU}>
                {drugSelected.data.cityAddressU === ""
                  ? "اختار مدينتك"
                  : drugSelected.data.cityAddressU}
              </option>
              {countryDrug ? (
                dataList &&
                dataList.data
                  .filter((data) => data.country === countryDrug)
                  .map((city) =>
                    city.cities.map((c, i) => (
                      <option key={i} value={c}>
                        {c}
                      </option>
                    ))
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
              defaultValue={drugSelected.data.addressU}
            />
            <br />
            <label>الرمز البريدي</label> <br />
            <input
              type="text"
              onChange={(e) => setPostalAddressU(e.target.value)}
              defaultValue={drugSelected.data.postalAddressU}
            />
          </>
        </div>
      </div>
    </>
  );
};

export default Payment;
