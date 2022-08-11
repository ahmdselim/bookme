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
          drug === "castle" ||
          drug === "relaxation" ||
          drug === "chalet" ||
          drug === "camp" ||
          drug === "caravan" ? (
            <>
              <h3>
                هل تسح بالحيوانات الاليفه في
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
                type="radio"
                value="yesPet"
                onChange={(e) => setPet(e.target.value)}
                className="as"
                id="yesPet"
                name="pet"
              />
              <label htmlFor="yesPet">نعم</label>
              <br />
              <input
                type="radio"
                value="noPet"
                id="noPet"
                onChange={(e) => setPet(e.target.value)}
                className="as"
                name="pet"
              />
              <label htmlFor="noPet">لا</label>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default PetAnimal;
