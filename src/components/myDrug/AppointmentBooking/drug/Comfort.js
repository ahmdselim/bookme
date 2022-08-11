import React from "react";

const Comfort = ({
  drug,
  setConditioning,
  setHeating,
  setWifi,
  setCarCharge,
}) => {
  return (
    <>
      <div className="collapsible">
        <input type="checkbox" id="collapsible-head2" />
        <label htmlFor="collapsible-head2" className="collapsibleLabel">
          وسائل الراحة العامّة
        </label>
        <div className="collapsible-text">
          <>
            <span>وسائل الراحة العامّة</span>
            <br />
            <br />
            <input
              type="checkbox"
              onChange={(e) => setConditioning(e.target.value)}
              className="as"
              value="conditioning"
              id="conditioning"
            />
            <label htmlFor="conditioning">تكييف</label>
            <br />
            <input
              type="checkbox"
              onChange={(e) => setHeating(e.target.value)}
              className="as"
              value="heating"
              id="heating"
            />
            <label htmlFor="heating">تدفئة</label>
            <br />
            <input
              type="checkbox"
              onChange={(e) => setWifi(e.target.value)}
              className="as"
              value="wifi"
              id="wifi"
            />
            <label htmlFor="wifi">واي فاي مجاني</label>
            <br />
            <input
              type="checkbox"
              onChange={(e) => setCarCharge(e.target.value)}
              className="as"
              value="carCharge"
              id="carCharge"
            />
            <label htmlFor="carCharge">محطة شحن السيارات الكهربائية</label>
          </>
        </div>
      </div>
    </>
  );
};

export default Comfort;
