import React from "react";

const InputField = () => {
  return (
    <form className="input">
      <input type="text" placeholder="Enter Your Task" className="input-box" />
      <button type="button" className="input-btn">
        GO
      </button>
    </form>
  );
};

export default InputField;
