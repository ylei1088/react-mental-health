import { useEffect, useState } from 'react';
// import validateLogin from '../utils/validateLogin';

// this hooks will make forms easier
export default function useForm(initState, validate) {
  const [values, setValues] = useState(initState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        console.log('authenticated', values);
        setIsSubmitting(false);
      } else {
        setIsSubmitting(false);
      }
    }
  }, [errors]);

  function handleChange(event) {
    event.persist();
    setValues((previousValues) => ({
      ...previousValues,
      [event.target.name]: event.target.value,
    }));
  }

  function handleBlur() {
    const valErrors = validate(values);
    setErrors(valErrors);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const valErrors = validate(values);
    setErrors(valErrors);
    setIsSubmitting(true);
    console.log({ values });
  }

  // return object of values and funcs
  return {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    isSubmitting,
  };
}
