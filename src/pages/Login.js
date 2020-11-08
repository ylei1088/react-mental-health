import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
// locals
import useForm from '../hooks/useForm';
import validateLogin from '../utils/validateLogin';

// can be reshaped for any forms
const INITIAL_STATE = {
  email: '',
  password: '',
};

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
});

export default function Login() {
  return (
    <main className="login__page">
      <h1>Login</h1>
      <img src="https://picsum.photos/id/1011/250/250" alt="woman on boat" />
      <Formik
        initialValues={INITIAL_STATE}
        validationSchema={LoginSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form className="login__form">
            <label htmlFor="email">
              Email:
              <br />
              <Field
                type="email"
                name="email"
                placeholder="gabi@example.com"
                className={errors.email && 'error__input'}
              />
              {errors.email && touched.email ? (
                <p className="error_text">{errors.email}</p>
              ) : null}
            </label>
            <label htmlFor="password">
              Password:
              <br />
              <Field
                type="password"
                name="password"
                placeholder="**********"
                className={errors.password && 'error__input'}
              />
              {errors.email && touched.email ? (
                <p className="error_text">{errors.email}</p>
              ) : null}
            </label>
            <Link to="/forgot" className="forgot__pass">
              Forgot Password?
            </Link>
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
      <div className="new__section">
        <p>
          New here? <Link to="/register">Register</Link>
        </p>
      </div>
    </main>
  );
}
