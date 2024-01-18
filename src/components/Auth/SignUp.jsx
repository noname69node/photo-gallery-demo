import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";

import Input from "../Form/Input";
import Button from "../Form/Button";

import { validateRegister } from "../../utils/validation";
import { register } from "../../services/user.service";

const SignUp = () => {
  const { values, errors, handleChange, handleSubmit } = useForm(
    register,
    validateRegister
  );

  useEffect(() => {}, [errors]);

  // SignUp/Registration form
  // TODO do Component for form, alert
  return (
    <>
      <div className="img-reg"></div>
      <div className="login-wrap p-4 p-md-5">
        <div className="d-flex">
          <div className="w-100">
            <h2 className="text-center">Register</h2>
          </div>
        </div>
        {errors.firebase && (
          <div className="alert alert-warning mb-5" role="alert">
            {errors.firebase}
          </div>
        )}
        <form className="signin-form" onSubmit={handleSubmit}>
          <div className="form-group mt-3">
            <Input
              label="Full name"
              name="fullname"
              type="text"
              value={values.fullname}
              error={errors.fullname}
              onChange={handleChange}
            />
          </div>
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
            <Input
              label="Confirm password"
              name="confirm_password"
              type="password"
              value={values.confirm_password}
              error={errors.confirm_password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <Button>Sign Up</Button>
          </div>
        </form>
        <p className="text-center">
          Already member. <Link to="/auth">Sign Up</Link>
        </p>
      </div>
    </>
  );
};

export default SignUp;
