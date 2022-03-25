import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";

const initialData = {};

const middlewares = [thunk];

const store = createStore(
  rootReducer,
  initialData,
  applyMiddleware(...middlewares)
);

export default store;