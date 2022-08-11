import React from "react";

const Images = ({ drug, setUrls }) => {
  const handleChangeImage = (e) => {
    e.preventDefault();
    let pickedFiles = [];
    if (e.target.files && e.target.files.length > 0) {
      pickedFiles = e.target.files;
      setUrls(pickedFiles);
    }
  };

  return (
    <div className="collapsible">
      <input type="checkbox" id="collapsible-head18" />
      <label htmlFor="collapsible-head18" className="collapsibleLabel">
        شارك بعض الصور لمكان الإقامة الخاص بك حتى توضح للضيوف ما يمكنهم توقعه.
      </label>
      <div className="collapsible-text">
        <>
          <h4>اضافة صور : </h4>
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={handleChangeImage}
          />
        </>
      </div>
    </div>
  );
};

export default Images;
