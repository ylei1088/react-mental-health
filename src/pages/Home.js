import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <main>
        <div className="">
          {/* notice, JS is in curly brackets */}
          <h1>HOME</h1>
          {/* we could also destructure name from within props => const {name} = props */}
          <p>This is where a bunch of lanterns will be floating</p>
          <Link to="/home/create">Create</Link>
        </div>
      </main>
    </div>
  );
}
