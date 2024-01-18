import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import Input from "../Form/Input";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../config/firebase.config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { validateRegister } from "../../utils/validation";
import Button from "../Form/Button";

const SignUp = () => {
  const [fbError, setFbError] = useState("");
  const usersCollectionRef = collection(db, "users");
  const navigate = useNavigate();

  // Funtion for user registration
  // TODO move to seperate file (services)
  const register = async (values) => {
    console.log(
      `run register with: ${values.fullname} ${values.email} ${values.password}`
    );
    const { email, password, fullname } = values;
    await createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log(user);
        await addDoc(usersCollectionRef, {
          fullname,
          email,
          userId: user.uid,
          createdAt: serverTimestamp(),
        })
          .then(console.log(`User ${user.uid} created`))
          .catch((error) => console.log(error));
        navigate("/");
      })
      .catch((error) => {
        setFbError(error.message);
        console.log(error.code, error.message);
      });
  };

  const { values, errors, handleChange, handleSubmit } = useForm(
    register,
    validateRegister
  );

  useEffect(() => {}, [errors]);

  // SignUp/Registration form
  // TODO do Component for form, button, alert
  return (
    <>
      <div className="img-reg"></div>
      <div className="login-wrap p-4 p-md-5">
        <div className="d-flex">
          <div className="w-100">
            <h2 className="text-center">Register</h2>
          </div>
        </div>
        {fbError && (
          <div className="alert alert-warning mb-5" role="alert">
            {fbError}
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
