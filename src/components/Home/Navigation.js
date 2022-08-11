import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { auth } from "../../firebase/config";
import avaterMan from "../../images/avaterMan.ico";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [user, loading] = useAuthState(auth);
  const users = useSelector((state) => state.Reducer.users);
  const drug = useSelector((state) => state.Reducer.drug);
  const booking = useSelector((state) => state.Reducer.booking);
  const userList =
    user && users && users.filter((person) => person.data.uid === user.uid);
  const drugOwn =
    user && drug && drug.filter((data) => data.data.userID === user.uid);
  return (
    <>
      <ul>
        {/* <>{}</> */}
        {booking &&
          booking
            .filter((data) => data.data.userID === user.uid)
            .map((data, i) => (
              <li key={i}>
                <div>
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
                  {drug &&
                    drug
                      .filter((dataD) => dataD.id === data.data.drugID)
                      .map((dataD, i) => (
                        <Link key={i} to={`/hotel/${dataD.id}`}>
                          مبروك تم حجزك ! لقد حجزت
                          {dataD.data.drug === "apartment"
                            ? " شقة "
                            : dataD.data.drug === "house"
                            ? " بيت "
                            : dataD.data.drug === "hotel"
                            ? " فندق "
                            : dataD.data.drug === "castle"
                            ? " قصر "
                            : dataD.data.drug === "relaxation"
                            ? " استراحة "
                            : dataD.data.drug === "chalet"
                            ? " شالية "
                            : dataD.data.drug === "camp"
                            ? " مخيم "
                            : " كارفان "}
                          <span> {dataD.data.nameDrug} </span>
                          <strong>
                            من {data.data.from} الي {data.data.to}
                          </strong>
                        </Link>
                      ))}
                </div>
              </li>
            ))}
        {drugOwn &&
          drugOwn.map((dataD, i) => (
            <li key={i}>
              <div>
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
                <Link to={`/hotel/${dataD.id}`}>
                  مبروك تم اضافة عقارك ! لقد تم أضافة
                  {dataD.data.drug === "apartment"
                    ? " شقة "
                    : dataD.data.drug === "house"
                    ? " بيت "
                    : dataD.data.drug === "hotel"
                    ? " فندق "
                    : dataD.data.drug === "castle"
                    ? " قصر "
                    : dataD.data.drug === "relaxation"
                    ? " استراحة "
                    : dataD.data.drug === "chalet"
                    ? " شالية "
                    : dataD.data.drug === "camp"
                    ? " مخيم "
                    : " كارفان "}
                  <span> {dataD.data.nameDrug} في </span>
                  <strong>
                    {dataD.data.countryDrug} , {dataD.data.cityDrug},
                    {dataD.data.streetDrug}
                  </strong>
                </Link>
              </div>
            </li>
          ))}
        {booking &&
          drugOwn &&
          booking.map((data) =>
            drugOwn
              .filter((dataD) => dataD.id === data.data.drugID)
              .map((dataS, i) => (
                <li key={i}>
                  <div>
                    {users && users ? (
                      users
                        .filter(
                          (person) => person.data.uid === data.data.userID
                        )
                        .map((dataS) =>
                          dataS.data.userImage === "" ? (
                            <>
                              {console.log(dataS.data.userImage)}
                              <img src={avaterMan} alt="avater" />
                            </>
                          ) : (
                            <img src={dataS.data.userImage} />
                          )
                        )
                    ) : (
                      <img src={avaterMan} alt="avater" />
                    )}
                    <Link to={`/myDrug`}>
                      مبروك ! لقد حجز
                      <strong>
                        {} {data.data.fName} {data.data.sName}
                      </strong>
                      {dataS.data.drug === "apartment"
                        ? " شقة "
                        : dataS.data.drug === "house"
                        ? " بيت "
                        : dataS.data.drug === "hotel"
                        ? " فندق "
                        : dataS.data.drug === "castle"
                        ? " قصر "
                        : dataS.data.drug === "relaxation"
                        ? " استراحة "
                        : dataS.data.drug === "chalet"
                        ? " شالية "
                        : dataS.data.drug === "camp"
                        ? " مخيم "
                        : " كارفان "}
                      <span> {dataS.data.nameDrug} </span>
                    </Link>
                  </div>
                </li>
              ))
          )}
      </ul>
    </>
  );
};

export default Navigation;
