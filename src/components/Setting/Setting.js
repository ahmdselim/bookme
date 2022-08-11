  import React from "react";
  import { AiOutlineUserSwitch } from "react-icons/ai";
  import { GrSecure } from "react-icons/gr";
  import { Link } from "react-router-dom";
const Setting = () => {
  return (
    <div className="setting">
      <h2>إعدادات الحساب</h2>
      <p>قم بإدارة تجربتك على Bookme.com</p>
      <ul>
        <li>
          <div>
            <AiOutlineUserSwitch />
            <h4>البيانات الشخصية</h4>
          </div>
          <p>حدّث بياناتك واعرف كيف يتم استخدامها.</p>
          <Link to="/userSetting">إدارة البيانات الشخصية</Link>
        </li>

        <li>
          <div>
            <GrSecure />
            <h4>الأمن</h4>
          </div>
          <p>غيّر إعدادات الأمن الخاصة بك وقم بإعداد عملية التحقق الثنائي.</p>
          <Link to="/userSetting">إدارة أمن الحساب</Link>
        </li>
      </ul>
    </div>
  );
};

export default Setting;
