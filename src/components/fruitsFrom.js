import React, { useRef } from "react";

const FruitsForm = ({ addFruit }) => {
  const inputRef = useRef(null);
  const handleClick = (e) => {
    e.preventDefault();
    //console.log('text input: ', inputRef.current);
    if (inputRef.current.value !== "") {
      addFruit(inputRef.current.value);
      inputRef.current.value = "";
    }
  };
  return (
    <form>
      <div className="input-group">
        <input type="text" className="form-control" ref={inputRef} />
        <button className="btn btn-primary" onClick={ handleClick}>
          Add fruit
        </button>
      </div>
    </form>
  );
};
export default FruitsForm;
