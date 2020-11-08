import React from 'react';

export default function Home() {
  return (
    <div>
      <main>
        <div className="">
          {/* notice, JS is in curly brackets */}
          <h1>HOME</h1>
          {/* we could also destructure name from within props => const {name} = props */}
          <p>I am the main div!</p>
        </div>
      </main>
    </div>
  );
}
