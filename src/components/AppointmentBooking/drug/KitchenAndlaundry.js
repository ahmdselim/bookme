import React from "react";

const KitchenAndlaundry = ({
  drug,
  setKitchen,
  setSmallKitchen,
  setWashingMachine,
}) => {
  return (
    <>
      <div className="collapsible">
        <input type="checkbox" id="collapsible-head7" />
        <label htmlFor="collapsible-head7" className="collapsibleLabel">
          المطبخ وغسيل الملابس
        </label>
        <div className="collapsible-text">
          {drug === "apartment" ||
          drug === "house" ||
          drug === "hotel" ||
          drug === "castle" ? (
            <>
              <label>المطبخ وغسيل الملابس</label>
              <br />
              <br />
              <input
                type="checkbox"
                onChange={(e) => setKitchen(e.target.value)}
                className="as"
                value="kitchen"
              />
              <span>مطبخ</span>
              <br />
              <input
                type="checkbox"
                onChange={(e) => setSmallKitchen(e.target.value)}
                className="as"
                value="smallKitchen"
              />
              <span>مطبخ صغير</span>
              <br />
              <input
                type="checkbox"
                onChange={(e) => setWashingMachine(e.target.value)}
                className="as"
                value="washingMachine"
              />
              <span> غسالة ملابس</span>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default KitchenAndlaundry;
