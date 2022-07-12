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
          {drug === "apartment" ||
          drug === "house" ||
          drug === "hotel" ||
          drug === "castle" ? (
            <>
              <label>وسائل الراحة العامّة</label>
              <br />
              <br />
              <input
                type="checkbox"
                onChange={(e) => setConditioning(e.target.value)}
                className="as"
                value="conditioning"
              />
              <span>تكييف</span>
              <br />
              <input
                type="checkbox"
                onChange={(e) => setHeating(e.target.value)}
                className="as"
                value="heating"
              />
              <span>تدفئة</span>
              <br />
              <input
                type="checkbox"
                onChange={(e) => setWifi(e.target.value)}
                className="as"
                value="wifi"
              />
              <span>واي فاي مجاني</span>
              <br />
              <input
                type="checkbox"
                onChange={(e) => setCarCharge(e.target.value)}
                className="as"
                value="carCharge"
              />
              <span>محطة شحن السيارات الكهربائية</span>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Comfort;
