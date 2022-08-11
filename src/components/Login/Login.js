import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";
import { loginUser } from "../../redux/actions/actionCreator";
import { useDispatch } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading] = useAuthState(auth);
  const [error, setError] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const logInUserAction = (email, password) => {
    loginUser(email, password, dispatch);
  };
  const login = (e) => {
    e.preventDefault();
    if (email.length === 0) {
      setError("من فضلك ادخل البريد الالكتروني");
    } else if (password.length === 0) {
      setError("من فضلك ادخل كلمة المرور");
    } else {
      logInUserAction(email, password);
      setEmail("");
      setPassword("");
      setError("🎉");
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
      <h2>سجّل الدخول</h2>
      <form onSubmit={login}>
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
        <button>تسجيل دخول</button>
        <Link
          to="/rest"
          style={{
            color: "#000",
            fontSize: "13px",
            fontWeight: "700",
            marginTop: "10px",
          }}
        >
          لقد نسيت كلمة السر؟
        </Link>
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

export default Login;
