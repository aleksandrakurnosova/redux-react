import React from "react";
import FruitItem from "./fruitItem";

const FruitsList = ({ data, deleteFruit }) => {
  return (
    <div>
      <h3>FruitsList</h3>
      <ol className="list-group" style={{ width: "fit-content" }}>
        {data.map((el, i) => (
          <FruitItem key={i} title={el} deleteFruit={deleteFruit} />
        ))}
      </ol>
    </div>
  );
};

export default FruitsList;
