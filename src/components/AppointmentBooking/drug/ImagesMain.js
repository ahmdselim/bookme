import React from "react";

const ImagesMain = ({ drug, setImageUpload }) => {
  return (
    <>
      <div className="collapsible">
        <input type="checkbox" id="collapsible-head5" />
        <label htmlFor="collapsible-head5" className="collapsibleLabel">
          شارك بعض الصور لمكان الإقامة الخاص بك حتى توضح للضيوف ما يمكنهم توقعه.
        </label>
        <div className="collapsible-text">
          {drug === "apartment" ||
          drug === "house" ||
          drug === "hotel" ||
          drug === "castle" ? (
            <>
              <h4>اضافة صور : </h4>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => {
                  setImageUpload(e.target.files[0]);
                }}
              />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default ImagesMain;
