import React from "react";

const View = ({ drug, setBalcony, setGardenView, setHead, setView }) => {
  return (
    <>
      {" "}
      <div className="collapsible">
        <input type="checkbox" id="collapsible-head9" />
        <label htmlFor="collapsible-head9" className="collapsibleLabel">
          وسائل الراحة الخارجية والإطلالة
        </label>
        <div className="collapsible-text">
          {drug === "apartment" ||
          drug === "house" ||
          drug === "hotel" ||
          drug === "castle" ? (
            <>
              <label>وسائل الراحة الخارجية والإطلالة</label>
              <br />
              <br />
              <input
                type="checkbox"
                onChange={(e) => setBalcony(e.target.value)}
                className="as"
                value="balcony"
              />
              <span>شرفة</span>
              <br />
              <input
                type="checkbox"
                onChange={(e) => setGardenView(e.target.value)}
                className="as"
                value="gardenView"
              />
              <span> إطلالة على الحديقة</span>
              <br />
              <input
                type="checkbox"
                onChange={(e) => setHead(e.target.value)}
                className="as"
                value="head"
              />
              <span> تراس</span>
              <br />
              <input
                type="checkbox"
                onChange={(e) => setView(e.target.value)}
                className="as"
                value="view"
              />
              <span> إطلالة</span>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default View;
