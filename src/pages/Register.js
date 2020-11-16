import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// form validation
const RegisterSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  username: Yup.string()
    .min(4, 'Username too short')
    .max(16, 'Username too long!')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
});

export default function Register() {
  const history = useHistory();
  return (
    <main className="register__page">
      <h1>Register</h1>
      <img
        src="https://picsum.photos/id/1042/250/250"
        alt="star scape wavey"
        height="250"
      />
      <Formik
        // set initial form values
        initialValues={{
          email: '',
          username: '',
          password: '',
        }}
        validationSchema={RegisterSchema}
        onSubmit={(values) => {
          console.log(values);
          // after register success, send user to home
          history.push('/home');
        }}
      >
        {({ errors, touched }) => (
          <Form className="register__form">
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
                <p className="error__text">{errors.email}</p>
              ) : null}
            </label>
            <label htmlFor="username">
              Username:
              <br />
              <Field type="text" name="username" placeholder="username" />
              {errors.username && touched.username ? (
                <p className="error__text">{errors.username}</p>
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
              {errors.password && touched.password ? (
                <p className="error__text">{errors.password}</p>
              ) : null}
            </label>
            {/* <Link to='/forgot' className='forgot__pass'>Forgot Password?</Link> */}
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
      <div className="new__section">
        <p>
          Returning User? <Link to="/login">Login</Link>
        </p>
      </div>
    </main>
  );
}
