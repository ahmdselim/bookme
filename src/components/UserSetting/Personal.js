import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuthState } from "react-firebase-hooks/auth";
import { getAuth, updateEmail } from "firebase/auth";
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import { auth, db, storage } from "../../firebase/config";
import {
  updateName,
  updateNickname,
  updateEmailDoc,
  updateBirthOfDate,
  updateGender,
  getUsers,
  updateUserImage,
} from "../../redux/actions/actionCreator";
const Personal = () => {
  const [open, setOpen] = useState("");
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [gender, setGender] = useState("");
  const dispatch = useDispatch();
  const users = useSelector((state) => state.Reducer.users);
  const [user, loading] = useAuthState(auth);
  const [image, setImage] = useState(null);
  const userList =
    users && users.filter((person) => person.data.uid === user.uid);

  const handleClickName = () => {
    const updateUsername = () => {
      updateName(
        userList && userList.map((person) => person.id).toString(),
        name
      );
      setOpen(!open);
      getUsers(dispatch);
    };
    return (
      <>
        <strong>الاسم</strong>
        <input type="text" onChange={(e) => setName(e.target.value)} />
        <button onClick={() => updateUsername()}>حفظ</button>
        <button onClick={() => setOpen(!open)}>الغاء</button>
      </>
    );
  };

  const handleClickNickName = () => {
    const updateUserNickname = () => {
      updateNickname(
        userList && userList.map((person) => person.id).toString(),
        nickname
      );
      setOpen(!open);
      getUsers(dispatch);
    };
    return (
      <>
        <strong>الاسم المستعار</strong>
        <input type="text" onChange={(e) => setNickname(e.target.value)} />
        <button onClick={() => updateUserNickname()}>حفظ</button>
        <button onClick={() => setOpen(!open)}>الغاء</button>
      </>
    );
  };

  const handleClickEmail = () => {
    const updateUserEmail = () => {
      const auth = getAuth();
      updateEmail(user, email)
        .then(() => {
          updateEmailDoc(
            userList && userList.map((person) => person.id).toString(),
            email
          );
        })
        .catch((error) => {});
      setOpen(!open);
      getUsers(dispatch);
    };
    return (
      <>
        <strong>البريد الالكتروني</strong>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
        <button onClick={() => updateUserEmail()}>حفظ</button>
        <button onClick={() => setOpen(!open)}>الغاء</button>
      </>
    );
  };

  const handleClickDateOfBirth = () => {
    const updateUserDate = () => {
      updateBirthOfDate(
        userList && userList.map((person) => person.id).toString(),
        dateOfBirth
      );
      setOpen(!open);
      getUsers(dispatch);
    };
    return (
      <>
        <strong>تاريخ الميلاد</strong>
        <input type="date" onChange={(e) => setDateOfBirth(e.target.value)} />
        <button onClick={() => updateUserDate()}>حفظ</button>
        <button onClick={() => setOpen(!open)}>الغاء</button>
      </>
    );
  };

  const handleClickGender = () => {
    const updateUserGender = () => {
      updateGender(
        userList && userList.map((person) => person.id).toString(),
        gender
      );
      setOpen(!open);
      getUsers(dispatch);
    };
    return (
      <>
        <strong>الجنس</strong>
        <select onChange={(e) => setGender(e.target.value)}>
          <option>اختار جنسك</option>
          <option value="رجل">رجل</option>
          <option value="امرأه">امرأه</option>
          <option value="غير ثنائي الجندر">غير ثنائي الجندر</option>
          <option value="أفضل عدم الاجابة">أفضل عدم الاجابة</option>
        </select>
        <button onClick={() => updateUserGender()}>حفظ</button>
        <button onClick={() => setOpen(!open)}>الغاء</button>
      </>
    );
  };

  const handleClickImage = () => {
    const updateUserAvatar = () => {
      const storageRef = ref(storage, `userImages/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const prog = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (error) => console.log(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            updateUserImage(
              userList && userList.map((person) => person.id).join(),
              downloadURL
            );
            setOpen(!open);
            getUsers(dispatch);
          });
        }
      );
    };
    return (
      <>
        <strong>الصورة الشخصية</strong>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button onClick={() => updateUserAvatar()}>حفظ</button>
        <button onClick={() => setOpen(!open)}>الغاء</button>
      </>
    );
  };

  return (
    <div className="personalInfo">
      <h2>البيانات الشخصية</h2>
      <p>حدّث بياناتك واعرف كيف يتم استخدامها.</p>
      <ul>
        <li>
          {open === "name" ? (
            handleClickName()
          ) : (
            <>
              <strong>الاسم </strong>
              <span>
                {userList &&
                  userList.map((person, i) => (
                    <Fragment key={i}>
                      {person.data.name
                        ? person.data.name
                        : "الرجاء التعديل وكتابة اسمك"}
                    </Fragment>
                  ))}
              </span>
              <button onClick={() => setOpen("name")}>تعديل</button>
            </>
          )}
        </li>

        <li>
          {open === "nickname" ? (
            handleClickNickName()
          ) : (
            <>
              <strong>الاسم المستعار</strong>
              <span>
                {userList &&
                  userList.map((person, i) => (
                    <Fragment key={i}>
                      {person.data.nickName
                        ? person.data.nickName
                        : "الرجاء التعديل وكتابة اسمك المستعار"}
                    </Fragment>
                  ))}
              </span>
              <button onClick={() => setOpen("nickname")}>تعديل</button>
            </>
          )}
        </li>

        <li>
          {open === "email" ? (
            handleClickEmail()
          ) : (
            <>
              <strong>البريد الالكتروني</strong>
              <span>
                {userList &&
                  userList.map((person, i) => (
                    <Fragment key={i}>
                      {person.data.email
                        ? person.data.email
                        : "الرجاء التعديل وكتابة بريدك الالكتروني"}
                    </Fragment>
                  ))}
              </span>
              <button onClick={() => setOpen("email")}>تعديل</button>
            </>
          )}
        </li>

        <li>
          {open === "dateOfBirth" ? (
            handleClickDateOfBirth()
          ) : (
            <>
              <strong>تاريخ الميلاد</strong>
              <span>
                {userList &&
                  userList.map((person, i) => (
                    <Fragment key={i}>
                      {person.data.dateOfBirth
                        ? person.data.dateOfBirth
                        : "الرجاء التعديل وكتابة تاريخ ميلادك"}
                    </Fragment>
                  ))}
              </span>
              <button onClick={() => setOpen("dateOfBirth")}>تعديل</button>
            </>
          )}
        </li>

        <li>
          {open === "gender" ? (
            handleClickGender()
          ) : (
            <>
              <strong>الجنس</strong>
              <span>
                {userList &&
                  userList.map((person, i) => (
                    <Fragment key={i}>
                      {person.data.gender
                        ? person.data.gender
                        : "الرجاء التعديل وكتابة جنسك"}
                    </Fragment>
                  ))}
              </span>
              <button onClick={() => setOpen("gender")}>تعديل</button>
            </>
          )}
        </li>

        <li>
          {open === "userImage" ? (
            handleClickImage()
          ) : (
            <>
              <strong>صورتك</strong>
              <span>
                {userList &&
                  userList.map((person, i) => (
                    <Fragment key={i}>
                      {person.data.userImage ? (
                        <img
                          src={person.data.userImage}
                          alt="user"
                          style={{
                            width: "30px",
                            height: "30px",
                            borderRadius: "25px",
                            objectFit: "cover",
                            transform: "translate(0,10px)",
                          }}
                        />
                      ) : (
                        "الرجاء التعديل وكتابة صورتك"
                      )}
                    </Fragment>
                  ))}
              </span>
              <button onClick={() => setOpen("userImage")}>تعديل</button>
            </>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Personal;
