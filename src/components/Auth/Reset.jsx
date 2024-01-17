import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../Form/Input";
import { useForm } from "../../hooks/useForm";

const Reset = () => {
  const validateReset = (values) => {
    let errors = [];

    if (!values.email) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email address is invalid";
    }

    return errors;
  };

  const resetPassword = (values) => {
    console.log(`run reset password with: ${values.email}`);
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    resetPassword,
    validateReset
  );

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <div className="login-wrap p-4 p-md-5">
      <div className="d-flex">
        <div className="w-100">
          <h2 className="text-center">Forgot your password</h2>
        </div>
      </div>
      <form className="signin-form" onSubmit={handleSubmit}>
        <div className="form-group text-center">
          <p>Please enter your email address </p>
        </div>
        <div className="form-group mt-3">
          <Input
            label="Email"
            name="email"
            type="text"
            value={values.email}
            error={errors.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <button className="form-control btn btn-primary rounded submit px-3">
            Reset Password
          </button>
        </div>
      </form>
      <p className="text-center">
        Already member. <Link to="/auth">Sign Up</Link>
      </p>
    </div>
  );
};

export default Reset;
