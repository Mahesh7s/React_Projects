import axios from "axios";
import {
  GET_COFFEE_LOADING,
  GET_COFFEE_SUCCESS,
  GET_COFFEE_ERROR,
} from "./actionTypes";

export const getCoffee = (sortBy = "") => async (dispatch) => {
  dispatch({ type: GET_COFFEE_LOADING });

  try {
    let url = `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-coffee`;
    if (sortBy) {
      url += `?sort=price&order=${sortBy}`; // Assuming sorting is on price
    }

    const res = await axios.get(url);
    dispatch({ type: GET_COFFEE_SUCCESS, payload: res.data.data });
  } catch (err) {
    dispatch({ type: GET_COFFEE_ERROR });
  }
};
