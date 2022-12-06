import { GET_JOBS, GET_JOBS_LOADING } from "../actions";

const initialState = {
  jobs: [],
  isLoading: true,
  isError: false,
};

const companiesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };

    case GET_JOBS_LOADING:
      return {
        ...state,
        isLoading: action.payload,
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
