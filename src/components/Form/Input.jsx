import React from "react";

const Input = (props) => {
  const { label, name, value, error, ...inputProps } = props;
  return (
    <>
      <input
        {...inputProps}
        name={name}
        id={name}
        autoComplete="off"
        // required
        className={`form-control ${error && "is-invalid"}`}
        value={value || ""}
      />
      <label htmlFor="email" className="form-control-placeholder">
        {label}
      </label>
      {error && <small className="text-danger">{error}</small>}
    </>
  );
};

export default Input;
