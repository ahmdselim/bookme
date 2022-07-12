import React from "react";

const PetAnimal = ({ drug, setPet }) => {
  return (
    <>
      <div className="collapsible">
        <input type="checkbox" id="collapsible-head14" />
        <label htmlFor="collapsible-head14" className="collapsibleLabel">
          الحيوانات الاليفه
        </label>
        <div className="collapsible-text">
          {drug === "apartment" ||
          drug === "house" ||
          drug === "hotel" ||
          drug === "castle" ? (
            <>
              {" "}
              <h3>
                هل تسح بالحيوانات الاليفه في{" "}
                {drug === "apartment"
                  ? " شقتك "
                  : drug === "house"
                  ? " بيتك "
                  : drug === "hotel"
                  ? " فندقك "
                  : drug === "castle"
                  ? " قصرك "
                  : " منتجعك "}
              </h3>
              <input
                type="checkbox"
                value="yesPet"
                onChange={(e) => setPet(e.target.value)}
                className="as"
              />
              <label>نعم</label>
              <br />
              <input
                type="checkbox"
                value="noPet"
                onChange={(e) => setPet(e.target.value)}
                className="as"
              />
              <label>لا</label>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default PetAnimal;
