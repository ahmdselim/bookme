import {
  GET_USERS,
  ADD_DRUG,
  GET_DRUG,
  GET_FAV_DRUG,
} from "../actions/actionType";
const initState = [];

export const Reducer = (state = initState, action) => {
  switch (action.type) {
    case GET_USERS:
      return { ...state, users: action.payload };
    case ADD_DRUG:
      return { ...state };
    case GET_DRUG:
      return { ...state, drug: action.payload };
    case GET_FAV_DRUG:
      return { ...state, favDrug: action.payload };
    default:
      return state;
  }
};
