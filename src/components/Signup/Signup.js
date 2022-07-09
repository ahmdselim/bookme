import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUser, getUsers } from "../../redux/actions/actionCreator";
import { useDispatch } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, storage } from "../../firebase/config";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const [error, setError] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length === 0) {
      setError("من فضلك ادخل البريد الالكتروني");
    } else if (password.length === 0) {
      setError("من فضلك ادخل كلمة المرور");
    } else if (repeatPassword.length === 0) {
      setError("من فضلك ادخل تأكيد كلمة المرور");
    } else if (password !== repeatPassword) {
      setError("كلمه المرور يكب ان تكون متطابقين");
    } else {
      createUser(email, password, dispatch);
      setError("🎉");
      setEmail("");
      setPassword("");
      setRepeatPassword("");
    }
  };
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) {
      navigate("/");
    }
  }, [user, loading, navigate]);
  return (
    <div className="login">
      <h2>سجّل الدخول أو أنشئ حساباً</h2>
      <form onSubmit={handleSubmit}>
        <label>عنوان البريد الإلكتروني</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <label>كلمة المرور</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <label>تأكيد كلمة المرور</label>
        <input
          type="password"
          onChange={(e) => setRepeatPassword(e.target.value)}
          value={repeatPassword}
        />
        <button>إنشاء حساب</button>
      </form>
      <hr />
      {error.length > 1 ? (
        <>
          <div
            style={{
              marginBottom: "10px",
              fontSize: "14px",
              color: "#ffafaf",
              textAlign: "center",
              fontWeight: "600",
              marginBottom: 0,
            }}
          >
            * {error}
          </div>
          <br />
        </>
      ) : null}
      <p>
        عند تسجيل الدخول إلى حسابك أو إنشاء حساب، فإنك توافق على شروطنا
        وأحكامنا، وبيان الخصوصية
      </p>
      <hr />
      <p> جميع الحقوق محفوظة. حقوق النشر (2006 - 2022) - BookMe.com™</p>
    </div>
  );
};

export default Signup;
