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
    if (
      drug === "apartment" ||
      drug === "house" ||
      drug === "hotel" ||
      drug === "castle"
    ) {
      if (residence === "bedroom") {
        return (
          <>
            <label>سرير فردي</label>
            <br />
            <input
              type="number"
              onChange={(e) => setNumSingleBed(e.target.value)}
            />
            <br />
            <label>سرير مزدوج</label>
            <br />
            <input
              type="number"
              onChange={(e) => setNumDoubleBed(e.target.value)}
            />
            <br />
            <label>سرير كبير</label>
            <br />
            <input
              type="number"
              onChange={(e) => setNumBigBed(e.target.value)}
            />
            <br />
            <label>سرير كبير جدا</label>
            <br />
            <input
              type="number"
              onChange={(e) => setNumVBigBed(e.target.value)}
            />
          </>
        );
      } else if (residence === "livingroom") {
        return (
          <>
            <label>سرير فردي</label>
            <br />
            <input
              type="number"
              onChange={(e) => setNumSingleBed(e.target.value)}
            />
          </>
        );
      }
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
          {drug === "apartment" ||
          drug === "house" ||
          drug === "hotel" ||
          drug === "castle" ? (
            <select onChange={(e) => setResidence(e.target.value)}>
              <option>أين يمكن للضيوف النوم ؟</option>

              <>
                <option value="bedroom">غرفة النوم </option>
                <option value="livingroom">غرفة معيشة</option>
              </>
            </select>
          ) : null}
          {drug === "apartment" ||
          drug === "house" ||
          drug === "hotel" ||
          drug === "castle"
            ? showResidence()
            : null}
        </div>
      </div>
    </>
  );
};

export default Residence;
