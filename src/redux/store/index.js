import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import favouriteCompaniesReducer from "../reducers/favouriteCompaniesReducer";
// import mainReducer from "./../reducers/index";
import companiesReducer from "./../reducers/companiesReducer";
import localStorage from "redux-persist/es/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
  key: "root",
  storage: localStorage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_SECRET_KEY,
    }),
  ],
};

const bigReducer = combineReducers({
  favouriteCompanies: favouriteCompaniesReducer,
  companies: companiesReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

// const store = configureStore({ reducer: bigReducer });
const store = configureStore({
  reducer: persistedReducer,
  //serializable check performed by Redux for shutting down the error
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

//creating a persisted version of the store
export const persistor = persistStore(store);

export default store;
