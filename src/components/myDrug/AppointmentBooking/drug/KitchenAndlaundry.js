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
          <>
            <span>المطبخ وغسيل الملابس</span>
            <br />
            <br />
            <input
              type="checkbox"
              onChange={(e) => setKitchen(e.target.value)}
              className="as"
              value="kitchen"
              id="kitchen"
            />
            <label htmlFor="kitchen">مطبخ</label>
            <br />
            <input
              type="checkbox"
              onChange={(e) => setSmallKitchen(e.target.value)}
              className="as"
              value="smallKitchen"
              id="smallKitchen"
            />
            <label htmlFor="smallKitchen">مطبخ صغير</label>
            <br />
            <input
              type="checkbox"
              onChange={(e) => setWashingMachine(e.target.value)}
              className="as"
              value="washingMachine"
              id="washingMachine"
            />
            <label htmlFor="washingMachine"> غسالة ملابس</label>
          </>
        </div>
      </div>
    </>
  );
};

export default KitchenAndlaundry;
