/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  // get the pathname from the url bar
  const { pathname } = useLocation();
  // console.log(pathname);

  // split the pathname string by "/" returns an array of strings
  const currentPage = pathname.split('/');
  // pages where we need to render dashboard,account,logout options
  const pageList = ['home', 'view', 'create', 'account', 'results'];

  return (
    <header className="site__header">
      <div className="header__inner">
        {/* conditionally render dashboard or onboarding link */}
        {pageList.includes(currentPage[1]) ? (
          <Link to="/home">Home</Link>
        ) : (
          <Link to="/">Home</Link>
        )}
        {/* if not in pages above, render the about us */}
        {pageList.includes(currentPage[1]) ? (
          <Link to="/home/create">Create Lantern</Link>
        ) : (
          <Link to="/team">About Us</Link>
        )}

        {/* conditionally render logout vs register */}
        {pageList.includes(currentPage[1]) ? (
          <Link to="/">Logout</Link>
        ) : (
          <Link to="/login">Create Account</Link>
        )}
      </div>
    </header>
  );
}
