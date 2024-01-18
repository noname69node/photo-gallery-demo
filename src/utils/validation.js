export const validateLogin = (values) => {
  let errors = [];

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) errors.password = "Password is required";

  return errors;
};

export const validateRegister = (values) => {
  let errors = [];

  if (!values.fullname) errors.fullname = "Full name is required";

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.password) errors.password = "Password is required";
  else if (values.password !== values.confirm_password)
    errors.confirm_password = "Password doesn't match";

  return errors;
};

export const validateReset = (values) => {
  let errors = [];

  if (!values.email) {
    errors.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  return errors;
};
