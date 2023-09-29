import React from "react";

const FruitItem = ({ title, deleteFruit }) => {
  return (
    <li className="item list-group-item d-flex justify-content-between align-items-center">
      <span>{title}</span>
      <button className="btn p-0 fs-6 ms-5" onClick={() => deleteFruit(title)}>
        🗑️
      </button>
    </li>
  );
};

export default FruitItem;
