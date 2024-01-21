import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../Form/Input";
import { useForm } from "../../hooks/useForm";
import { validateReset } from "../../utils/validation";
import Button from "../Form/Button";
import { resetPassword } from "../../services/user.service";

const Reset = () => {
  // const resetPassword = (values) => {
  //   console.log(`run reset password with: ${values.email}`);

  // };

  const { values, errors, handleChange, handleSubmit } = useForm(
    resetPassword,
    validateReset
  );

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
          <Button>Reset</Button>
        </div>
      </form>
      <p className="text-center">
        Already member. <Link to="/auth">Sign Up</Link>
      </p>
    </div>
  );
};

export default Reset;
