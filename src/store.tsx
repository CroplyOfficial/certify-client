import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { menuReducer } from "./reducers/menu";
import { userLoginReducer } from "./reducers/userReducers";
import { credentialTemplateReducer } from "./reducers/credTemplateReducers";
import thunk from "redux-thunk";

const reducer = combineReducers({
  menuCollapsed: menuReducer,
  userLogin: userLoginReducer,
  credentialTemplate: credentialTemplateReducer,
});

export type RootState = ReturnType<typeof reducer>;
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: {
    userInfo: userInfoFromStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
