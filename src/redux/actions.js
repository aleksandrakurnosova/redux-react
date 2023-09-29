import { INIT, ADD_FRUIT, DELETE_FRUIT } from "./types";

export const initAction = (fruits) => {
  console.log("----------------");
  console.log("INIT!");
  return { type: INIT, payload: fruits };
};
export const addFruit = (fruit) => {
  console.log("----------------");
  console.log("ADD_FRUIT! - ", fruit);
  return { type: ADD_FRUIT, payload: fruit };
};
export const deleteFruit = (fruit) => {
  console.log("----------------");
  console.log("DELETE_FRUIT! - ", fruit);
  return { type: DELETE_FRUIT, payload: fruit };
};
