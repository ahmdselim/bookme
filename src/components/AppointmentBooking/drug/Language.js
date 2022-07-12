import React from "react";

const Language = ({
  drug,
  setArabic,
  setEnglish,
  setFrench,
  setGerman,
  setSpanish,
}) => {
  return (
    <>
      {" "}
      <div className="collapsible">
        <input type="checkbox" id="collapsible-head4" />
        <label htmlFor="collapsible-head4" className="collapsibleLabel">
          ما اللغات التي تتحدث بها أنت أو موظفوك؟
        </label>
        <div className="collapsible-text">
          {drug === "apartment" ||
          drug === "house" ||
          drug === "hotel" ||
          drug === "castle" ? (
            <>
              <input
                className="as"
                type="checkbox"
                value="english"
                onChange={(e) => setEnglish(e.target.value)}
              />
              <label>الإنجليزية</label>
              <br />
              <input
                className="as"
                type="checkbox"
                value="arabic"
                onChange={(e) => setArabic(e.target.value)}
              />
              <label>العربية</label>
              <br />
              <input
                className="as"
                type="checkbox"
                value="german"
                onChange={(e) => setGerman(e.target.value)}
              />
              <label>الألمانية</label>
              <br />
              <input
                className="as"
                type="checkbox"
                value="frensh"
                onChange={(e) => setFrench(e.target.value)}
              />
              <label>الفرنسية</label>
              <br />
              <input
                className="as"
                type="checkbox"
                value="spanish"
                onChange={(e) => setSpanish(e.target.value)}
              />
              <label>الإسبانية</label>
              <br />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Language;
