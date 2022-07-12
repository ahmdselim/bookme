import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { getUsers, updatePasswordN } from "../../redux/actions/actionCreator";
import { updatePassword, reauthenticateWithCredential } from "firebase/auth";

const Security = () => {
  const [open, setOpen] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.Reducer.users);
  const [user, loading] = useAuthState(auth);
  const userList =
    users && users.filter((person) => person.data.uid === user.uid);
  // const newPassword = getASecureRandomPassword();
  // const credential = promptForCredentials();
  console.log(user);

  const handleUpdateUserPassword = () => {
    const updateUserPassword = () => {
      // reauthenticateWithCredential(user, credential)
      //   .then(() => {
      //     // User re-authenticated.
      //     updatePassword(user, "password")
      //       .then(() => {
      //         console.log("successful");
      //       })
      //       .catch((error) => {
      //         console.log(error);
      //       });
      //     setOpen(!open);
      //     getUsers(dispatch);
      //   })
      //   .catch((error) => {
      //     // An error ocurred
      //     // ...
      //   });
      updatePasswordN(user, password);
      setOpen(!open);
      getUsers(dispatch);
    };
    return (
      <>
        <strong>كلمة المرور</strong>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={() => updateUserPassword()}>حفظ</button>
        <button onClick={() => setOpen(!open)}>الغاء</button>
      </>
    );
  };

  return (
    <div className="personalInfo">
      <ul>
        <li
          style={{
            borderTop: "1px solid #eee",
            borderBottom: "1px solid #eee",
          }}
        >
          {open === "updatePassword" ? (
            handleUpdateUserPassword()
          ) : (
            <>
              <strong>كلمة المرور</strong>
              <span>
                قم بإعادة تعيين كلمة المرور بشكل مستمر لضمان أمن حسابك
              </span>
              <button onClick={() => setOpen("updatePassword")}>
                إعادة التعيين
              </button>
            </>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Security;
