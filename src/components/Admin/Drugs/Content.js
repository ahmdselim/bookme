import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { auth } from "../../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import avaterMan from "../../../images/avaterMan.ico";

const Content = () => {
  const drug = useSelector((state) => state.Reducer.drug);
  const users = useSelector((state) => state.Reducer.users);
  const booking = useSelector((state) => state.Reducer.booking);

  const [user, loading] = useAuthState(auth);

  return (
    <div className="content">
      <div className="row rowHead">
        <h2>العقارات</h2>
      </div>
      <div className="row row-table">
        <table className="tableAdmin">
          <thead>
            <tr>
              <th>العقار</th>
              <th>اسم العقار</th>
              <th>صاحب العقار</th>
              <th>الحجوزات</th>
            </tr>
          </thead>

          <tbody>
            {drug &&
              drug.map((data, i) => (
                <tr key={i}>
                  <td>
                    <span>{i + 1}</span>
                  </td>
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
