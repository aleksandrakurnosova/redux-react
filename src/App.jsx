import React from "react";
import FruitsList from "./components/fruitList";
import FruitsForm from "./components/fruitsFrom";
import { connect } from "react-redux";

import { addFruit, deleteFruit } from "./redux/actions";
// const fruits = ["Apple", "Orange", "Pineapple"];

const App = ({addFruit, deleteFruit,fruits}) => {
  console.log("---------");
  console.log("App render");

  return (
    <div className="container">
      <h1>React App</h1>
      <hr />
      <FruitsForm addFruit={addFruit} />
      <hr />
      <FruitsList data={fruits} deleteFruit={deleteFruit} />
    </div>
  );
};
function mapStateToProps(state) {
  console.log("mapStateToProps: ", state);
  return {
    fruits: state,
  };
}
export default connect(mapStateToProps, { addFruit, deleteFruit })(App);
