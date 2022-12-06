import { GET_JOBS } from "../actions";

const initialState = {
  jobs: [],
};

const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };

    // case "GET_SEARCH_QUERY":
    //   return {
    //     ...state,
    //     searchQuery: action.payload,
    //   };
    default:
      return state;
  }
};

export default companiesReducer;
