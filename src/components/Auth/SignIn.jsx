import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import Input from "../Form/Input";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase.config";
import { useAuthState } from "react-firebase-hooks/auth";
import { validateLogin } from "../../utils/validation";
import Button from "../Form/Button";

const SignIn = () => {
  const navigate = useNavigate();
  const [fbError, setFbError] = useState("");

  const login = async (values) => {
    console.log(`run login with: ${values.email} ${values.password}`);
    const { email, password } = values;
    await signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        navigate("/");
      })
      .catch((error) => {
        setFbError(error.message);
      });
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    login,
    validateLogin
  );

  useEffect(() => {}, [errors]);

  return (
    <>
      <div className="img"></div>
      <div className="login-wrap p-4 p-md-5">
        <div className="d-flex">
          <div className="w-100">
            <h2 className="text-center">Sign In</h2>
          </div>
        </div>
        {fbError && (
          <div className="alert alert-warning mb-5" role="alert">
            {fbError}
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
