import React from "react";
import { RiDashboardLine } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { BsBuilding } from "react-icons/bs";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <h2>BookMe</h2>
      </Link>
      <ul>
        <Link to="/admin">
          <li>
            <RiDashboardLine />
            <span>الرئيسية</span>
          </li>
        </Link>
        <Link to="/adminUsers">
          <li>
            <FiUsers />
            <span>الاعضاء</span>
          </li>
        </Link>
        <Link to="/adminDrugs">
          <li>
            <BsBuilding />
            <span>العقارات</span>
          </li>
        </Link>
        <Link to="/adminBooking">
          <li>
            <BsBuilding />
            <span>الحجوزات</span>
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
