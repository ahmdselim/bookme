import React from "react";

const View = ({ drug, setBalcony, setGardenView, setHead, setView }) => {
  return (
    <>
      <div className="collapsible">
        <input type="checkbox" id="collapsible-head9" />
        <label htmlFor="collapsible-head9" className="collapsibleLabel">
          وسائل الراحة الخارجية والإطلالة
        </label>
        <div className="collapsible-text">
          {drug === "apartment" ||
          drug === "house" ||
          drug === "hotel" ||
          drug === "castle" ||
          drug === "relaxation" ||
          drug === "chalet" ||
          drug === "camp" ||
          drug === "caravan" ? (
            <>
              <span>وسائل الراحة الخارجية والإطلالة</span>
              <br />
              <br />
              <input
                type="checkbox"
                onChange={(e) => setBalcony(e.target.value)}
                className="as"
                value="balcony"
                id="balcony"
              />
              <label htmlFor="balcony">شرفة</label>
              <br />
              <input
                type="checkbox"
                onChange={(e) => setGardenView(e.target.value)}
                className="as"
                value="gardenView"
                id="gardenView"
              />
              <label htmlFor="gardenView"> إطلالة على الحديقة</label>
              <br />
              <input
                type="checkbox"
                onChange={(e) => setHead(e.target.value)}
                className="as"
                value="head"
                id="head"
              />
              <label htmlFor="head"> تراس</label>
              <br />
              <input
                type="checkbox"
                onChange={(e) => setView(e.target.value)}
                className="as"
                value="view"
                id="view"
              />
              <label htmlFor="view"> إطلالة</label>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default View;
