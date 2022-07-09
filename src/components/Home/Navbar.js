import React, { useState } from "react";
import { AiOutlineQuestionCircle, AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import avater from "../../images/avater.jpg";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions/actionCreator";
import { auth } from "../../firebase/config";
import { BiLogOutCircle, BiUser } from "react-icons/bi";
import { BsHandbag } from "react-icons/bs";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const users = useSelector((state) => state.Reducer.users);
  const userList =
    user && users && users.filter((person) => person.data.uid === user.uid);
  const dispatch = useDispatch();
  const [popup, setPopup] = useState(true);
  const logout = async (id) => {
    logoutUser(dispatch);
  };

  return (
    <div className="navbar">
      <div className="row">
        <div>
          <Link to="/">
            <h3>Bookme.com</h3>
          </Link>
        </div>
        <ul>
          {/* <li>
            <AiOutlineQuestionCircle />
          </li> */}
          <li className="viewDrugLi">
            <Link to="/join">اعرض عقارك علي موقعنا</Link>
          </li>

          {user && user ? (
            <>
              <li className="user" onClick={() => setPopup(!popup)}>
                <img src={avater} alt="avater" />
                <span>
                  {userList && userList
                    ? userList.map((person) =>
                        person.data.name == ""
                          ? "مستخدم جديد"
                          : person.data.name
                      )
                    : "زائر"}
                </span>
                <div
                  className="userPopup"
                  style={popup ? { display: "none" } : { display: "block" }}
                >
                  <ul>
                    <li>
                      <Link to="/mySetting">
                        <BiUser />
                        <span>إدارة الحساب</span>
                      </Link>
                    </li>

                    <li>
                      <Link to="/myReservations">
                        <BsHandbag />
                        <span>الحجوزات</span>
                      </Link>
                    </li>

                    <li>
                      <Link to="/myWishlist">
                        <AiOutlineHeart />
                        <span>خياراتي المفضلة</span>
                      </Link>
                    </li>
                    <li>
                      <button onClick={() => logout(user.uid)}>
                        <BiLogOutCircle />
                        <span> تسجيل خروج</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </li>
            </>
          ) : (
            <>
              <li className="log">
                <Link to="/signup">سجّل</Link>
              </li>
              <li className="log">
                <Link to="/login">سجّل الدخول</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
