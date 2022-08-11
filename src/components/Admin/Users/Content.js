import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { auth } from "../../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {
  getUsers,
  updateUserToAdmin,
} from "../../../redux/actions/actionCreator";
import { useDispatch } from "react-redux/es/exports";
const Content = () => {
  const users = useSelector((state) => state.Reducer.users);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const updateUser = (id, status) => {
    const CS = status === 0 ? 1 : 0;
    updateUserToAdmin(id, CS, dispatch);
    getUsers(dispatch);
  };
  return (
    <div className="content">
      <div className="row rowHead">
        <h2>الاعضاء</h2>
      </div>
      <div className="row row-table">
        <table className="tableAdmin">
          <thead>
            <tr>
              <th>الاعضاء</th>
              <th>الاسم </th>
              <th>البريد الالكتروني</th>
              <th>الحالة</th>
              <th>ترقية</th>
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
                    <td className="subtotal_users">
                      <div className="switch_box box_1">
                        <input
                          type="checkbox"
                          className="switch_1"
                          checked={data.data.status === 1 ? true : false}
                          onChange={() => updateUser(data.id, data.data.status)}
                          style={{ marginRight: "20px" }}
                        />
                      </div>
                    </td>
                  </Fragment>
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
