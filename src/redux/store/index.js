import { configureStore, combineReducers } from "@reduxjs/toolkit";
import favouriteCompaniesReducer from "../reducers/favouriteCompaniesReducer";
// import mainReducer from "./../reducers/index";
import companiesReducer from "./../reducers/companiesReducer";

const bigReducer = combineReducers({
  favouriteCompanies: favouriteCompaniesReducer,
  companies: companiesReducer,
});

const store = configureStore({ reducer: bigReducer });

export default store;
