import React from "react";

const Residence = ({
  setResidence,
  residence,
  setNumSingleBed,
  setNumDoubleBed,
  setNumBigBed,
  setNumVBigBed,
  drug,
}) => {
  const showResidence = () => {
    if (residence === "bedroom") {
      return (
        <>
          <label htmlFor="singleBed">سرير فردي</label>
          <br />
          <input
            type="number"
            onChange={(e) => setNumSingleBed(e.target.value)}
            id="singleBed"
          />
          <br />
          <label htmlFor="doubleBed">سرير مزدوج</label>
          <br />
          <input
            type="number"
            onChange={(e) => setNumDoubleBed(e.target.value)}
            id="doubleBed"
          />
          <br />
          <label htmlFor="bigBed">سرير كبير</label>
          <br />
          <input
            type="number"
            onChange={(e) => setNumBigBed(e.target.value)}
            id="bigBed"
          />
          <br />
          <label htmlFor="VBigBed">سرير كبير جدا</label>
          <br />
          <input
            type="number"
            onChange={(e) => setNumVBigBed(e.target.value)}
            id="VBigBed"
          />
        </>
      );
    } else if (residence === "livingroom") {
      return (
        <>
          <label htmlFor="singleBed">سرير فردي</label>
          <br />
          <input
            type="number"
            onChange={(e) => setNumSingleBed(e.target.value)}
            id="singleBed"
          />
        </>
      );
    }
  };
  return (
    <>
      <div className="collapsible">
        <input type="checkbox" id="collapsible-head1" />
        <label htmlFor="collapsible-head1" className="collapsibleLabel">
          تفاصيل مكان الإقامة
        </label>
        <div className="collapsible-text">
          <select onChange={(e) => setResidence(e.target.value)}>
            <option>أين يمكن للضيوف النوم ؟</option>

            <>
              <option value="bedroom">غرفة النوم </option>
              <option value="livingroom">غرفة معيشة</option>
            </>
          </select>
          {showResidence()}
        </div>
      </div>
    </>
  );
};

export default Residence;
