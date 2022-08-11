import React, { Fragment } from "react";
import { BsBuilding } from "react-icons/bs";
import { useSelector } from "react-redux";
import { auth, logout } from "../../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import avaterMan from "../../../images/avaterMan.ico";
import { logoutUser } from "../../../redux/actions/actionCreator";

const Content = () => {
  const drug = useSelector((state) => state.Reducer.drug);
  const users = useSelector((state) => state.Reducer.users);
  const booking = useSelector((state) => state.Reducer.booking);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const logoutU = (id) => {
    logout(id);
    navigate("/");
  };

  return (
    <div className="content">
      <div className="row">
        <span>الرئيسية</span>
        <td className="subtotal_users">
          <div className="switch_box box_1">
            <input
              type="checkbox"
              className="switch_1"
              checked={user ? true : false}
              onChange={() => logoutU(user.uid)}
              style={{ marginRight: "20px" }}
            />
          </div>
        </td>
      </div>

      <div className="row">
        <div className="box">
          <div className="icon icon-1">
            <BsBuilding />
          </div>
          <div>
            <span>الاعضاء</span>
            <strong>{users && users.length}</strong>
          </div>
        </div>
        <div className="box">
          <div className="icon icon-2">
            <BsBuilding />
          </div>
          <div>
            <span>العقارات</span>
            <strong>{drug && drug.length}</strong>
          </div>
        </div>
        <div className="box">
          <div className="icon icon-3">
            <BsBuilding />
          </div>
          <div>
            <span>الحجوزات</span>
            <strong>{booking && booking.length}</strong>
          </div>
        </div>
      </div>

      <div className="row row-table">
        <table className="tableAdmin">
          <thead>
            <tr>
              <th>الاعضاء</th>
              <th>الاسم </th>
              <th>البريد الالكتروني</th>
              <th>الحالة</th>
            </tr>
          </thead>

          <tbody>
            {users &&
              users.map((data, i) => (
                <tr>
                  <Fragment key={i}>
                    <td>
                      <span>{i + 1}</span>
                    </td>
                    <td>
                      <span>
                        {data.data.name === "" ? "مستخدم جديد" : data.data.name}
                      </span>
                    </td>
                    <td>{data.data.email}</td>
                    <td>{data.data.status === 0 ? "عضو" : "أدمن"}</td>
                  </Fragment>
                </tr>
              ))}
          </tbody>
        </table>

        <table className="tableAdmin">
          <thead>
            <tr>
              <th>العقار</th>
              <th>صاحب العقار</th>
              <th>الحجوزات</th>
            </tr>
          </thead>
          <tbody>
            {drug &&
              drug.map((data, i) => (
                <tr key={i}>
                  <td>
                    <span>{data.data.nameDrug}</span>
                  </td>
                  <td>
                    <span>
                      {users &&
                        users
                          .filter((u) => u.data.uid === data.data.userID)
                          .map((u) =>
                            u.data.name === "" ? "مستخدم جديد" : u.data.name
                          )}
                    </span>
                  </td>
                  <td>
                    {booking &&
                      booking.map((book) =>
                        book.data.drugID === data.id
                          ? users &&
                            users
                              .filter((u) => u.data.uid === book.data.userID)
                              .map((u) =>
                                u.data.userImage === "" ? (
                                  <img src={avaterMan} alt="avater" />
                                ) : (
                                  <img src={u.data.userImage} alt="avater" />
                                )
                              )
                          : null
                      )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      <strong>حقوق النشر © 2021–2022 BookMe.com™. جميع الحقوق محفوظة.</strong>
    </div>
  );
};

export default Content;
