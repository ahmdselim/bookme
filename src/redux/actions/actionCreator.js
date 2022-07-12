import {
  LOGIN_USER,
  LOGOUT_USER,
  CREATE_USER,
  GET_USERS,
  ADD_DRUG,
  GET_DRUG,
  ADD_DRUG_TO_FAVORITE,
  GET_FAV_DRUG,
} from "./actionType";
import {
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  logout,
  db,
} from "../../firebase/config";
import {
  getDocs,
  collection,
  addDoc,
  query,
  where,
  doc,
  deleteDoc,
  updateDoc,
  Firestore,
} from "firebase/firestore";
import { updatePassword, reauthenticateWithCredential } from "firebase/auth";

// create new user
export const createUser = async (email, password, dispatch) => {
  const user = await registerWithEmailAndPassword(email, password);

  return <>{dispatch({ type: CREATE_USER, payload: user })}</>;
};

// login
export const loginUser = async (email, password, dispatch) => {
  const user = await logInWithEmailAndPassword(email, password);
  return dispatch({ type: LOGIN_USER, payload: user });
};

// logout
export const logoutUser = async (dispatch) => {
  const user = logout();
  return dispatch({ type: LOGOUT_USER, payload: user });
};

// get Users
const getUser = async () => {
  let users = [];
  const user = await getDocs(collection(db, "users"));
  user.forEach((doc) => {
    users.push({ id: doc.id, data: doc.data() });
  });
  return users;
};
export const getUsers = async (dispatch) => {
  const users = await getUser();
  return dispatch({ type: GET_USERS, payload: users });
};

// get drugs
const getDrug = async () => {
  let drugs = [];
  const drug = await getDocs(collection(db, "drug"));
  drug.forEach((doc) => {
    drugs.push({ id: doc.id, data: doc.data() });
  });
  return drugs;
};
export const getDrugs = async (dispatch) => {
  const drugs = await getDrug();
  return dispatch({ type: GET_DRUG, payload: drugs });
};

// get favorite drugs
const getFavoriteDrug = async () => {
  let drugs = [];
  const drug = await getDocs(collection(db, "favoriteDrugs"));
  drug.forEach((doc) => {
    drugs.push({ id: doc.id, data: doc.data() });
  });
  return drugs;
};
export const getFavoriteDrugs = async (dispatch) => {
  const drugs = await getFavoriteDrug();
  return dispatch({ type: GET_FAV_DRUG, payload: drugs });
};

// add drug
const addDrug = async (
  userID,
  drug,
  apartment,
  MultiApartment,
  priceApartment,
  nameDrug,
  countryDrug,
  streetDrug,
  postalDrug,
  cityDrug,
  house,
  place,
  numHouses,
  privateRoom,
  numPrivateRoom,
  hotel,
  hotelNum,
  numOfHotels,
  residence,
  numSingleBed,
  numDoubleBed,
  numBigBed,
  numVBigBed,
  numGuest,
  numBathroom,
  areaApartment,
  conditioning,
  heating,
  wifi,
  carCharge,
  kitchen,
  smallKitchen,
  smallBar,
  washingMachine,
  flatTv,
  pool,
  hootTube,
  sauna,
  balcony,
  gardenView,
  head,
  view,
  breakfast,
  lunchBreakfast,
  breakfastPrice,
  english,
  arabic,
  german,
  french,
  spanish,
  mainImage,
  loginFrom,
  loginTo,
  logoutFrom,
  logoutTo,
  debit,
  countryAddressU,
  cityAddressU,
  addressU,
  postalAddressU,
  pet
) => {
  const drugs = await addDoc(collection(db, "drug"), {
    userID,
    drug,
    apartment,
    MultiApartment,
    priceApartment,
    nameDrug,
    countryDrug,
    streetDrug,
    postalDrug,
    cityDrug,
    house,
    place,
    numHouses,
    privateRoom,
    numPrivateRoom,
    hotel,
    hotelNum,
    numOfHotels,
    residence,
    numSingleBed,
    numDoubleBed,
    numBigBed,
    numVBigBed,
    numGuest,
    numBathroom,
    areaApartment,
    conditioning,
    heating,
    wifi,
    carCharge,
    kitchen,
    smallKitchen,
    smallBar,
    washingMachine,
    flatTv,
    pool,
    hootTube,
    sauna,
    balcony,
    gardenView,
    head,
    view,
    breakfast,
    lunchBreakfast,
    breakfastPrice,
    english,
    arabic,
    german,
    french,
    spanish,
    mainImage,
    loginFrom,
    loginTo,
    logoutFrom,
    logoutTo,
    debit,
    countryAddressU,
    cityAddressU,
    addressU,
    postalAddressU,
    pet,
    date: new Date(),
  });
  return drugs;
};
export const addDrugs = async (
  userID,
  drug,
  apartment,
  MultiApartment,
  priceApartment,
  nameDrug,
  countryDrug,
  streetDrug,
  postalDrug,
  cityDrug,
  house,
  place,
  numHouses,
  privateRoom,
  numPrivateRoom,
  hotel,
  hotelNum,
  numOfHotels,
  residence,
  numSingleBed,
  numDoubleBed,
  numBigBed,
  numVBigBed,
  numGuest,
  numBathroom,
  areaApartment,
  conditioning,
  heating,
  wifi,
  carCharge,
  kitchen,
  smallKitchen,
  smallBar,
  washingMachine,
  flatTv,
  pool,
  hootTube,
  sauna,
  balcony,
  gardenView,
  head,
  view,
  breakfast,
  lunchBreakfast,
  breakfastPrice,
  english,
  arabic,
  german,
  french,
  spanish,
  mainImage,
  loginFrom,
  loginTo,
  logoutFrom,
  logoutTo,
  debit,
  countryAddressU,
  cityAddressU,
  addressU,
  postalAddressU,
  pet,
  dispatch
) => {
  const drugs = await addDrug(
    userID,
    drug,
    apartment,
    MultiApartment,
    priceApartment,
    nameDrug,
    countryDrug,
    streetDrug,
    postalDrug,
    cityDrug,
    house,
    place,
    numHouses,
    privateRoom,
    numPrivateRoom,
    hotel,
    hotelNum,
    numOfHotels,
    residence,
    numSingleBed,
    numDoubleBed,
    numBigBed,
    numVBigBed,
    numGuest,
    numBathroom,
    areaApartment,
    conditioning,
    heating,
    wifi,
    carCharge,
    kitchen,
    smallKitchen,
    smallBar,
    washingMachine,
    flatTv,
    pool,
    hootTube,
    sauna,
    balcony,
    gardenView,
    head,
    view,
    breakfast,
    lunchBreakfast,
    breakfastPrice,
    english,
    arabic,
    german,
    french,
    spanish,
    mainImage,
    loginFrom,
    loginTo,
    logoutFrom,
    logoutTo,
    debit,
    countryAddressU,
    cityAddressU,
    addressU,
    postalAddressU,
    pet
  );
  return dispatch({ type: ADD_DRUG, payload: drugs });
};

// add drug to favorite
const addDrugToFavorite = async (userID, DrugID) => {
  const drugs = await addDoc(collection(db, "favoriteDrugs"), {
    userID,
    DrugID,
    date: new Date(),
  });
  return drugs;
};
export const addDrugToFavorites = async (userID, DrugID, dispatch) => {
  const drugs = await addDrugToFavorite(userID, DrugID);
  return dispatch({ type: ADD_DRUG_TO_FAVORITE, payload: drugs });
};

// update name of user
export const updateName = async (id, name) => {
  const user = doc(db, "users", id);
  return await updateDoc(user, {
    name,
  });
};

// update nickname of user
export const updateNickname = async (id, nickName) => {
  const user = doc(db, "users", id);
  return await updateDoc(user, {
    nickName,
  });
};

// update email of user
export const updateEmailDoc = async (id, email) => {
  const user = doc(db, "users", id);
  return await updateDoc(user, {
    email,
  });
};

// update birth of date of user
export const updateBirthOfDate = async (id, dateOfBirth) => {
  const user = doc(db, "users", id);
  return await updateDoc(user, {
    dateOfBirth,
  });
};

// update gender of user
export const updateGender = async (id, gender) => {
  const user = doc(db, "users", id);
  return await updateDoc(user, {
    gender,
  });
};

// update password of user
export const updatePasswordN = async (user, password) => {
  // const user = doc(db, "users", id);
  return await updatePassword(user, password);
  // updatePassword(user, "password")
  //   .then(() => {
  //     console.log("successful");
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });
};

// delete favorite drug
export const deleteFavDrug = async (id) => {
  return await deleteDoc(doc(db, "favoriteDrugs", id.toString()));
  // console.log(id);
};
