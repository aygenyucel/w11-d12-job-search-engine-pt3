import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteCompaniesReducer from "../reducers/favouriteCompaniesReducer";
// import mainReducer from "./../reducers/index";
import companiesReducer from "./../reducers/companiesReducer";
import localStorage from "redux-persist/es/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage: localStorage,
  //TODO: Add encrypt transform
};

const bigReducer = combineReducers({
  favouriteCompanies: favouriteCompaniesReducer,
  companies: companiesReducer,
});

const persistedReducer = persistReducer(persistConfig, bigReducer);

// const store = configureStore({ reducer: bigReducer });

const store = configureStore({
  reducer: persistedReducer,
  //TODO: Add serializable check here performed by Redux to shutting down the error
});

//creating a persisted version of the store
export const persistor = persistStore(store);

export default store;
