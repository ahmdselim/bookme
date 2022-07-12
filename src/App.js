import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SearchPage from "./pages/SearchPage/SearchPage";
import HotelPage from "./pages/HotelPage/HotelPage";
import AppointmentBookingPage from "./pages/AppointmentBookingPage/AppointmentBookingPage";
import JoinPage from "./pages/JoinPage/JoinPage";
import SettingPage from "./pages/SettingPage/SettingPage";
import UserSettingPage from "./pages/UserSettingPage/UserSettingPage";
import {
  getDrugs,
  getUsers,
  getFavoriteDrugs,
} from "./redux/actions/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import ReservationsPage from "./pages/ReservationsPage/ReservationsPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getUsers(dispatch);
    getDrugs(dispatch);
    getFavoriteDrugs(dispatch);
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="search/:data" element={<SearchPage />} />
          <Route path="hotel/:id" element={<HotelPage />} />
          <Route path="join" element={<JoinPage />} />
          <Route path="mySetting" element={<SettingPage />} />
          <Route path="userSetting" element={<UserSettingPage />} />
          <Route path="myWishlist" element={<WishlistPage />} />
          <Route path="myReservations" element={<ReservationsPage />} />
          <Route
            path="AppointmentBooking"
            element={<AppointmentBookingPage />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
