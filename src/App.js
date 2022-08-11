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
  getBookings,
} from "./redux/actions/actionCreator";
import { useDispatch, useSelector } from "react-redux";
import WishlistPage from "./pages/WishlistPage/WishlistPage";
import ReservationsPage from "./pages/ReservationsPage/ReservationsPage";
import MyDrugPage from "./pages/MyDrugPage/MyDrugPage";
import AdminHomePage from "./pages/Admin/HomePage/AdminHomePage";
import AdminUsers from "./pages/Admin/UsersPage/AdminUsers";
import AdminDrugsPage from "./pages/Admin/DrugsPage/AdminDrugsPage";
import AdminBookingPage from "./pages/Admin/BookingPage/AdminBookingPage";
import RestPage from "./pages/RestPage/RestPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    getUsers(dispatch);
    getDrugs(dispatch);
    getFavoriteDrugs(dispatch);
    getBookings(dispatch);
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="login" element={<LoginPage />} />
          <Route path="rest" element={<RestPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="search/:data/:country" element={<SearchPage />} />
          <Route path="hotel/:id" element={<HotelPage />} />
          <Route path="join" element={<JoinPage />} />
          <Route path="mySetting" element={<SettingPage />} />
          <Route path="userSetting" element={<UserSettingPage />} />
          <Route path="myWishlist" element={<WishlistPage />} />
          <Route path="myReservations" element={<ReservationsPage />} />
          <Route path="myDrug" element={<MyDrugPage />} />
          <Route
            path="AppointmentBooking"
            element={<AppointmentBookingPage />}
          />
          <Route path="admin" element={<AdminHomePage />} />
          <Route path="adminUsers" element={<AdminUsers />} />
          <Route path="adminDrugs" element={<AdminDrugsPage />} />
          <Route path="adminBooking" element={<AdminBookingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
