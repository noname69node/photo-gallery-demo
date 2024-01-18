import { useEffect, useState } from "react";

export const useForm = (callback, validate) => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      console.log("no errors can call callback");
      setIsSubmitting(false);
      callback(values, setErrors);
    }
  }, [errors]);

  const handleChange = (e) => {
    e.persist();

    let name = e.target.name;
    let val = e.target.value;

    setValues({
      ...values,
      [name]: val,
    });
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  return { values, errors, handleChange, handleSubmit };
};
