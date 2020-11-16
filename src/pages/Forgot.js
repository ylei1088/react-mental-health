import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Link } from 'react-router-dom';

export default function Forgot() {
  return (
    <main className="reset__page">
      <h1>Reset Password:</h1>
      <img
        src="https://picsum.photos/250/250"
        alt="woman on boat"
        height="250"
      />
      <Formik
        initialValues={{ email: '' }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form className="reset__form">
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor="email">
            Email:
            <Field type="email" name="email" placeholder="email@example.com" />
          </label>
          <button type="submit">Reset</button>
        </Form>
      </Formik>
      <div className="new__section">
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
        <p>
          New here? <Link to="/register">Register</Link>
        </p>
      </div>
    </main>
  );
}
