import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Reducer } from "./reducers/Reducer";
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const store = createStore(
  combineReducers({ Reducer }),
  enhancer(applyMiddleware(thunk))
);
export default store;
