import React from 'react';
import { Link } from 'react-router-dom';
// locals
import useForm from '../hooks/useForm';
import validateLogin from '../utils/validateLogin';

const INITIAL_STATE = {
  email: '',
  username: '',
  password: '',
};

export default function Register() {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    errors,
    isSubmitting,
  } = useForm(INITIAL_STATE, validateLogin);

  return (
    <main className="register__page">
      <h1>Register</h1>
      <img src="https://picsum.photos/id/1042/250/250" alt="star scape wavey" />
      <form className="register__form" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email:
          <br />
          <input
            type="email"
            name="email"
            placeholder="gabi@example.com"
            className={errors.email && 'error__input'}
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.email && <p className="error__text">{errors.email}</p>}
        </label>
        <label htmlFor="username">
          Username:
          <br />
          <input
            type="text"
            name="username"
            placeholder="XxgabixX"
            value={values.username}
            onBlur={handleBlur}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="password">
          Password:
          <br />
          <input
            type="password"
            name="password"
            placeholder="**********"
            className={errors.password && 'error__input'}
            value={values.password}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.password && <p className="error__text">{errors.password}</p>}
        </label>
        {/* <Link to='/forgot' className='forgot__pass'>Forgot Password?</Link> */}
        <button type="submit">Register</button>
      </form>
      <div className="new__section">
        <p>
          Returning User? <Link to="/login">Login</Link>
        </p>
      </div>
    </main>
  );
}
