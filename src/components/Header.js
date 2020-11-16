import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  // get the pathname from the url bar
  const { pathname } = useLocation();
  // split the pathname string by "/"
  // select the first "word" from that array
  const currentPage = pathname.split('/')[1];
  // pages where we need to render dashboard,account,logout options
  const pageList = ['home', 'view', 'account', 'results'];

  return (
    <header className="site__header">
      <div className="header__inner">
        {/* conditionally render dashboard or onboarding link */}
        {pageList.includes(currentPage) ? (
          <Link to="/home">Home</Link>
        ) : (
          <Link to="/">Home</Link>
        )}
        <Link to="/team">About Us</Link>
        {/* conditionally render logout vs register */}
        {pageList.includes(currentPage) ? (
          <Link to="/">Logout</Link>
        ) : (
          <Link to="/login">Create Account</Link>
        )}
      </div>
    </header>
  );
}
