import React, { useState } from "react";
import { AiOutlineUserAdd } from "react-icons/ai";
import { GrSecure } from "react-icons/gr";
import Personal from "./Personal";
import Security from "./Security";

const UserSetting = () => {
  const [open, setOpen] = useState("personalInfo");
  return (
    <div className="userSetting">
      <div className="row">
        <div className="sidebar">
          <ul>
            <li>
              <AiOutlineUserAdd />
              <button onClick={() => setOpen("personalInfo")}>
                البيانات الشخصية
              </button>
            </li>
            <li>
              <GrSecure />
              <button onClick={() => setOpen("security")}>الامن</button>
            </li>
          </ul>
        </div>
        <div className="content">
          {open === "personalInfo" ? <Personal /> : <Security />}
        </div>
      </div>
    </div>
  );
};

export default UserSetting;
