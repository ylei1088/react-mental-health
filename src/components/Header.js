/* eslint-disable no-nested-ternary */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  // get the pathname from the url bar
  // const { pathname } = useLocation();
  // console.log(pathname);

  // split the pathname string by "/" returns an array of strings
  // const currentPage = pathname.split('/');
  // pages where we need to render dashboard,account,logout options
  // const pageList = ['home', 'view', 'create', 'account', 'results'];

  return (
    <header className="site__header">
      <div className="header__inner">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </header>
  );
}
