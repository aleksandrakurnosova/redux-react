import { INIT, ADD_FRUIT, DELETE_FRUIT } from "./types";

const fruitReducer = (state = [], action) => {
  switch (action.type) {
    case INIT:
      return action.payload;
    case ADD_FRUIT:
      return [...state, action.payload];
    case DELETE_FRUIT:
      return state.filter((el) => el !== action.payload);
    default:
      return state;
  }
};

export default fruitReducer;
