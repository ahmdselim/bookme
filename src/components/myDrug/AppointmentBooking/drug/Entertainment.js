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
          <>
            <span>الترفيه</span>
            <br />
            <br />
            <input
              type="checkbox"
              onChange={(e) => setFlatTv(e.target.value)}
              className="as"
              value="flatTv"
              id="flatTv"
            />
            <label htmlFor="flatTv">تلفزيون بشاشة مسطحة</label>
            <br />
            <input
              type="checkbox"
              onChange={(e) => setPool(e.target.value)}
              className="as"
              value="pool"
              id="pool"
            />
            <label htmlFor="pool">مسبح</label>
            <br />
            <input
              type="checkbox"
              onChange={(e) => setHootTube(e.target.value)}
              className="as"
              value="hootTube"
              id="hootTube"
            />
            <label htmlFor="hootTube"> حوض استحمام ساخن </label>
            <br />
            <input
              type="checkbox"
              onChange={(e) => setSmallBar(e.target.value)}
              className="as"
              value="smallBar"
              id="smallBar"
            />
            <label htmlFor="smallBar"> ميني بار </label>
            <br />
            <input
              type="checkbox"
              onChange={(e) => setSauna(e.target.value)}
              className="as"
              value="sauna"
              id="sauna"
            />
            <label htmlFor="sauna"> ساونا</label>
          </>
        </div>
      </div>
    </>
  );
};

export default Entertainment;
