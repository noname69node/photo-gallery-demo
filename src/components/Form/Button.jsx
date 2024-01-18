import React from "react";

const Button = ({ children }) => {
  return (
    <button className="form-control btn btn-primary rounded submit px-3">
      {children}
    </button>
  );
};

export default Button;
