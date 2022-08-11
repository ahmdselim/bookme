import {
  LOGIN_USER,
  LOGOUT_USER,
  CREATE_USER,
  GET_USERS,
  ADD_DRUG,
  GET_DRUG,
  ADD_DRUG_TO_FAVORITE,
  GET_FAV_DRUG,
  ADD_BOOKING,
  GET_BOOKING,
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
  orderBy,
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
  const user = await getDocs(collection(db, "users"), orderBy("date", "desc"));
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
  const drug = await getDocs(collection(db, "drug"), orderBy("date", "desc"));
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
  const drug = await getDocs(
    collection(db, "favoriteDrugs"),
    orderBy("date", "desc")
  );
  drug.forEach((doc) => {
    drugs.push({ id: doc.id, data: doc.data() });
  });
  return drugs;
};
export const getFavoriteDrugs = async (dispatch) => {
  const drugs = await getFavoriteDrug();
  return dispatch({ type: GET_FAV_DRUG, payload: drugs });
};

// get Booking
const getBooking = async () => {
  let drugs = [];
  const drug = await getDocs(
    collection(db, "booking"),
    orderBy("date", "desc")
  );
  drug.forEach((doc) => {
    drugs.push({ id: doc.id, data: doc.data() });
  });
  return drugs;
};
export const getBookings = async (dispatch) => {
  const drugs = await getBooking();
  return dispatch({ type: GET_BOOKING, payload: drugs });
};

// add drug
const addDrug = async (
  userID,
  clientPhone,
  images,
  drug,
  apartment,
  numOfRooms,
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
  lat,
  lng
) => {
  const drugs = await addDoc(collection(db, "drug"), {
    userID,
    clientPhone,
    images,
    drug,
    apartment,
    numOfRooms,
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
    lat,
    lng,
    date: new Date(),
  });
  return drugs;
};
export const addDrugs = async (
  userID,
  clientPhone,
  images,
  drug,
  apartment,
  numOfRooms,
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
  lat,
  lng,
  dispatch
) => {
  const drugs = await addDrug(
    userID,
    clientPhone,
    images,
    drug,
    apartment,
    numOfRooms,
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
    lat,
    lng
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

// add Book
const addBooking = async (
  userID,
  drugID,
  fName,
  sName,
  email,
  country,
  phone,
  requests,
  to,
  from,
  pay
) => {
  const booking = await addDoc(collection(db, "booking"), {
    userID,
    drugID,
    fName,
    sName,
    email,
    country,
    phone,
    requests,
    to,
    from,
    pay,
    date: new Date(),
  });
  return booking;
};
export const addBookings = async (
  userID,
  drugID,
  fName,
  sName,
  email,
  country,
  phone,
  requests,
  to,
  from,
  pay,
  dispatch
) => {
  const booking = await addBooking(
    userID,
    drugID,
    fName,
    sName,
    email,
    country,
    phone,
    requests,
    to,
    from,
    pay
  );
  return dispatch({ type: ADD_BOOKING, payload: booking });
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

// update user to admin
export const updateUserToAdmin = async (id, status) => {
  const user = doc(db, "users", id);
  return await updateDoc(user, {
    status,
  });
};

// update user image
export const updateUserImage = async (id, image) => {
  const user = doc(db, "users", id);
  return await updateDoc(user, {
    userImage: image,
  });
};

// update password of user
export const updatePasswordN = async (id, password) => {
  const user = doc(db, "users", id);
  return await updateDoc(user, {
    password,
  });
};

// update drug
export const updateDrug = async (
  drugID,
  userID,
  clientPhone,
  images,
  drug,
  apartment,
  numOfRooms,
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
  lat,
  lng
) => {
  const drugDB = doc(db, "drug", drugID);
  return await updateDoc(drugDB, {
    userID,
    clientPhone,
    images,
    drug,
    apartment,
    numOfRooms,
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
    lat,
    lng,
    date: new Date(),
  });
};

// delete favorite drug
export const deleteFavDrug = async (id) => {
  return await deleteDoc(doc(db, "favoriteDrugs", id.toString()));
  // console.log(id);
};

// delete favorite drug
export const deleteTrip = async (id) => {
  return await deleteDoc(doc(db, "booking", id));
};

// delete drug
export const deleteDrug = async (id) => {
  return await deleteDoc(doc(db, "drug", id));
};

// delete book
export const deleteBook = async (id) => {
  return await deleteDoc(doc(db, "booking", id));
};
