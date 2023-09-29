import { createStore } from "redux";
import fruitReducer from "./redux/reducer";
import { initAction, addFruit, deleteFruit } from './redux/actions';

const store = createStore(fruitReducer);

store.dispatch(initAction(["Apple", "Orange", "Pineapple"]));

// store.dispatch(addFruit('Rambutan'));
// console.log('state: ', store.getState());


// store.dispatch(deleteFruit('Apple'));
// console.log('state: ', store.getState());

// console.log('store', store.getState())

export default store;