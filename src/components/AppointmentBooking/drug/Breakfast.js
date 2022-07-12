import React from "react";

const Breakfast = ({
  drug,
  setBreakfast,
  breakfast,
  setLunchBreakfast,
  lunchBreakfast,
  setBreakfastPrice,
}) => {
  const showBreakfast = () => {
    if (
      drug === "apartment" ||
      drug === "house" ||
      drug === "hotel" ||
      drug === "castle"
    ) {
      if (breakfast === "breakfastYes") {
        return (
          <>
            <h5>هل يتضمن السعر الذي يدفعه الضيوف وجبة الإفطار؟</h5>
            <input
              type="radio"
              className="as"
              name="applyPrice"
              value="yes"
              onChange={(e) => setLunchBreakfast(e.target.value)}
            />
            <label>نعم </label>
            {lunchBreakfast === "yes" ? (
              <>
                <br />
                <label>سعر وجبة الإفطار للشخص الواحد لكل يوم</label>
                <input
                  type="number"
                  onChange={(e) => setBreakfastPrice(e.target.value)}
                  disabled={lunchBreakfast !== "yes" ? "disabled" : null}
                />
                <span> $ </span>
                <br />
              </>
            ) : null}
            <br />
            <input
              type="radio"
              className="as"
              name="applyPrice"
              value="no"
              onChange={(e) => setLunchBreakfast(e.target.value)}
            />
            <label>لا </label>
          </>
        );
      }
    }
  };
  return (
    <>
      <div className="collapsible">
        <input type="checkbox" id="collapsible-head3" />
        <label htmlFor="collapsible-head3" className="collapsibleLabel">
          تفاصيل وجبة الإفطار
        </label>
        <div className="collapsible-text">
          {drug === "apartment" ||
          drug === "house" ||
          drug === "hotel" ||
          drug === "castle" ? (
            <select onChange={(e) => setBreakfast(e.target.value)}>
              <option>هل تقدّم وجبة الإفطار للضيوف؟</option>
              {drug === "apartment" ||
              drug === "house" ||
              drug === "hotel" ||
              drug === "castle" ? (
                <>
                  <option value="breakfastYes">نعم</option>
                  <option value="breakfastNo">لا </option>
                </>
              ) : null}
            </select>
          ) : null}

          {drug === "apartment" ||
          drug === "house" ||
          drug === "hotel" ||
          drug === "castle"
            ? showBreakfast()
            : null}
        </div>
      </div>
    </>
  );
};

export default Breakfast;
