import React from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";

import Input from "../Form/Input";
import Button from "../Form/Button";

import { validateLogin } from "../../utils/validation";
import { login } from "../../services/user.service";

const SignIn = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validateLogin
  );

  return (
    <>
      <div className="img"></div>
      <div className="login-wrap p-4 p-md-5">
        <div className="d-flex">
          <div className="w-100">
            <h2 className="text-center">Sign In</h2>
          </div>
        </div>
        {errors.firebase && (
          <div className="alert alert-warning mb-5" role="alert">
            {errors.firebase}
          </div>
        )}
        <form className="signin-form mt-3" onSubmit={handleSubmit}>
          <div className="form-group">
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
            <Input
              label="Password"
              name="password"
              type="password"
              value={values.password}
              error={errors.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <Button>Sign In</Button>
          </div>
          <div className="form-group text-center">
            <Link to="/auth/reset">Forgot Password</Link>
          </div>
        </form>
        <p className="text-center">
          Not a member? <Link to="/auth/register">Sign Up</Link>
        </p>
      </div>
    </>
  );
};

export default SignIn;
