import React from "react";

const ImagesMain = ({ drug, setImageUpload }) => {
  const handleChange = (e) => {
    setImageUpload(e.target.files[0]);
    // console.log(imageUpload);
  };

  return (
    <>
      <div className="collapsible">
        <input type="checkbox" id="collapsible-head5" />
        <label htmlFor="collapsible-head5" className="collapsibleLabel">
          {/* شارك بعض الصور لمكان الإقامة الخاص بك حتى توضح للضيوف ما يمكنهم توقعه. */}
          اختار الصوره المفضلة لعقارك
        </label>
        <div className="collapsible-text">
          <>
            <h4>اضافة الصورة المفضلة لعقارك : </h4>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => {
                handleChange(e);
              }}
            />
          </>
        </div>
      </div>
    </>
  );
};

export default ImagesMain;
