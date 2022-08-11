import React from "react";
import AppointmentBooking from "./AppointmentBooking/AppointmentBooking";

const EditDrug = ({ drugSelected }) => {
  return (
    <div className="wishlist">
      <h2>تعديل العقار {`( ${drugSelected.data.nameDrug} )`}</h2>
      <div className="AppointmentBooking">
        <AppointmentBooking drugSelected={drugSelected} />
      </div>
    </div>
  );
};

export default EditDrug;
