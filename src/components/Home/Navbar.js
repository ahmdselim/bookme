import React, { Fragment, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import avaterMan from "../../images/avaterMan.ico";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../../redux/actions/actionCreator";
import { auth } from "../../firebase/config";
import { BiLogOutCircle, BiUser } from "react-icons/bi";
import { BsHandbag, BsBuilding } from "react-icons/bs";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { VscBell } from "react-icons/vsc";
import Navigation from "./Navigation";

const Navbar = () => {
  const [user, loading] = useAuthState(auth);
  const users = useSelector((state) => state.Reducer.users);
  const drug = useSelector((state) => state.Reducer.drug);
  const booking = useSelector((state) => state.Reducer.booking);
  const userList =
    user && users && users.filter((person) => person.data.uid === user.uid);
  const drugOwn =
    user && drug && drug.filter((data) => data.data.userID === user.uid);
  const dispatch = useDispatch();
  const [popup, setPopup] = useState(true);
  const [popupN, setPopupN] = useState(true);

  const logout = async (id) => {
    logoutUser(dispatch);
  };
  const navigate = useNavigate();

  const logoutClick = () => {
    logout(user.uid);
    navigate("/");
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
          {user && (
            <>
              <li className="liNavigation" onClick={() => setPopupN(!popupN)}>
                <VscBell />
                <div
                  style={
                    popupN
                      ? { display: "none" }
                      : { display: "block", height: "200px", overflow: "auto" }
                  }
                  className="Navigation"
                >
                  <Navigation />
                </div>
              </li>
            </>
          )}
          <li className="viewDrugLi">
            <Link to="/join">اعرض عقارك علي موقعنا</Link>
          </li>

          {user && user ? (
            <>
              <li className="user" onClick={() => setPopup(!popup)}>
                {userList && userList ? (
                  userList.map((person, i) =>
                    person.data.userImage === "" ? (
                      <img src={avaterMan} alt="avater" key={i} />
                    ) : (
                      <img src={person.data.userImage} key={i} alt="avater" />
                    )
                  )
                ) : (
                  <img src={avaterMan} alt="avater" />
                )}
                <span>
                  {userList && userList
                    ? userList.map((person, i) => (
                        <Fragment key={i}>
                          {person.data.name === ""
                            ? "مستخدم جديد"
                            : person.data.name}
                        </Fragment>
                      ))
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

                    {user &&
                      users &&
                      users
                        .filter((u) => u.data.uid === user.uid)
                        .map((u, i) =>
                          u.data.status === 0 ? null : (
                            <li key={i}>
                              <Link to="/admin">
                                <MdOutlineAdminPanelSettings />
                                <span> لوحة التحكم</span>
                              </Link>
                            </li>
                          )
                        )}

                    <li>
                      <Link to="/myReservations">
                        <BsHandbag />
                        <span>الحجوزات</span>
                      </Link>
                    </li>

                    <li>
                      <Link to="/myDrug">
                        <BsBuilding />
                        <span>عقاراتي</span>
                      </Link>
                    </li>

                    <li>
                      <Link to="/myWishlist">
                        <AiOutlineHeart />
                        <span>خياراتي المفضلة</span>
                      </Link>
                    </li>
                    <li>
                      <button onClick={() => logoutClick()}>
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
