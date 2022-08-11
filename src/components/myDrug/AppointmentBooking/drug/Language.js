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
      <div className="collapsible">
        <input type="checkbox" id="collapsible-head4" />
        <label htmlFor="collapsible-head4" className="collapsibleLabel">
          ما اللغات التي تتحدث بها أنت أو موظفوك؟
        </label>
        <div className="collapsible-text">
          <>
            <input
              className="as"
              type="checkbox"
              value="english"
              onChange={(e) => setEnglish(e.target.value)}
              id="en"
            />
            <label htmlFor="en">الإنجليزية</label>
            <br />
            <input
              className="as"
              type="checkbox"
              value="arabic"
              onChange={(e) => setArabic(e.target.value)}
              id="ar"
            />
            <label htmlFor="ar">العربية</label>
            <br />
            <input
              className="as"
              type="checkbox"
              value="german"
              onChange={(e) => setGerman(e.target.value)}
              id="gr"
            />
            <label htmlFor="gr">الألمانية</label>
            <br />
            <input
              className="as"
              type="checkbox"
              value="frensh"
              onChange={(e) => setFrench(e.target.value)}
              id="fr"
            />
            <label htmlFor="fr">الفرنسية</label>
            <br />
            <input
              className="as"
              type="checkbox"
              value="spanish"
              onChange={(e) => setSpanish(e.target.value)}
              id="sp"
            />
            <label htmlFor="sp">الإسبانية</label>
            <br />
          </>
        </div>
      </div>
    </>
  );
};

export default Language;
