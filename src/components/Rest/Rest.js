import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, sendPasswordReset } from "../../firebase/config";

const Rest = () => {
  const [email, setEmail] = useState("");
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const Rest = (e) => {
    e.preventDefault();
    sendPasswordReset(email);
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
      <h2>إعادة تعيين كلمة المرور</h2>
      <form onSubmit={Rest}>
        <label>عنوان البريد الإلكتروني</label>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <button>إعادة تعيين كلمة المرور</button>
      </form>
      <hr />
      <p>
        عند تسجيل الدخول إلى حسابك أو إنشاء حساب، فإنك توافق على شروطنا
        وأحكامنا، وبيان الخصوصية
      </p>
      <hr />
      <p> جميع الحقوق محفوظة. حقوق النشر (2006 - 2022) - BookMe.com™</p>
    </div>
  );
};

export default Rest;
