import React from "react";

const Entertainment = ({
  drug,
  setFlatTv,
  setHootTube,
  setPool,
  setSauna,
  setSmallBar,
}) => {
  return (
    <>
      <div className="collapsible">
        <input type="checkbox" id="collapsible-head8" />
        <label htmlFor="collapsible-head8" className="collapsibleLabel">
          الترفيه
        </label>
        <div className="collapsible-text">
          {drug === "apartment" ||
          drug === "house" ||
          drug === "hotel" ||
          drug === "castle" ? (
            <>
              <label>الترفيه</label>
              <br />
              <br />
              <input
                type="checkbox"
                onChange={(e) => setFlatTv(e.target.value)}
                className="as"
                value="flatTv"
              />
              <span>تلفزيون بشاشة مسطحة</span>
              <br />
              <input
                type="checkbox"
                onChange={(e) => setPool(e.target.value)}
                className="as"
                value="pool"
              />
              <span>مسبح</span>
              <br />
              <input
                type="checkbox"
                onChange={(e) => setHootTube(e.target.value)}
                className="as"
                value="hootTube"
              />
              <span> حوض استحمام ساخن </span>
              <br />
              <input
                type="checkbox"
                onChange={(e) => setSmallBar(e.target.value)}
                className="as"
                value="smallBar"
              />
              <span> ميني بار </span>
              <br />
              <input
                type="checkbox"
                onChange={(e) => setSauna(e.target.value)}
                className="as"
                value="sauna"
              />
              <span> ساونا</span>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Entertainment;
