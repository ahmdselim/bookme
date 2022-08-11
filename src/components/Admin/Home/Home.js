import React, { useEffect } from "react";
import { auth } from "../../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import Content from "./Content";

const Home = () => {
  const [user, loading] = useAuthState(auth);
  const users = useSelector((state) => state.Reducer.users);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      return;
    }
    if (!user) {
      navigate("/");
    }
  }, [user, loading, navigate]);
  return (
    <div className="adminPage">
      <Sidebar />
      <Content />
    </div>
  );
};

export default Home;
