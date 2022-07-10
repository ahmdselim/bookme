import React from "react";

const BookTable = () => {
  return (
    <div className="drugTable">
      <table>
        <thead>
          <tr>
            <td>نوع الغرفة</td>
            <td>تتّسِع</td>
            <td>سعر اليوم </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>David</td>
            <td>Male</td>
            <td>23</td>
          </tr>
          <tr>
            <td>Jessica</td>
            <td>Female</td>
            <td>47</td>
          </tr>
          <tr>
            <td>Warren</td>
            <td>Male</td>
            <td>12</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BookTable;
