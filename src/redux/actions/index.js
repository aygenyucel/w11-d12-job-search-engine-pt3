export const ADD_TO_FAVOURITES = "ADD_TO_FAVOURITES";
export const REMOVE_FROM_FAVOURITES = "REMOVE_FROM_FAVOURITES";
export const GET_JOBS = "GET_JOBS";

export const addToFavouritesAction = (data) => {
  return {
    type: ADD_TO_FAVOURITES,
    payload: data.company_name,
  };
};

export const removeFromFavouritesAction = (data) => {
  return { type: "REMOVE_FROM_FAVOURITES", payload: data.company_name };
};

export const getJobsAction = (query) => {
  return async (dispatch, getState) => {
    try {
      console.log(getState);
      const response = await fetch(
        "https://strive-benchmark.herokuapp.com/api/jobs?search=" +
          query +
          "&limit=20"
      );
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
      } else {
        alert("Error fetching results");
      }
    } catch (error) {
      console.log(error);
    }
  };
};

export const getSearchQueryAction = (query) => {
  return {
    type: "GET_SEARCH_QUERY",
    payload: query,
  };
};
