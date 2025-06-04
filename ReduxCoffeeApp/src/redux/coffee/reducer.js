import {
  GET_COFFEE_LOADING,
  GET_COFFEE_SUCCESS,
  GET_COFFEE_ERROR,
} from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  coffeeData: [],
};

export const coffeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COFFEE_LOADING:
      return { ...state, isLoading: true, isError: false };
    case GET_COFFEE_SUCCESS:
      return { ...state, isLoading: false, coffeeData: action.payload };
    case GET_COFFEE_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
