import React, { useState } from 'react';
// locals
import { data } from '../dummy/data';
import Lantern from '../components/Lantern';

export default function Home() {
  const [lanterns, setLanterns] = useState([...data]);
  // console.log(data);

  return (
    <main className="home__dashboard">
      <div className="home__ui">
        {/* notice, JS is in curly brackets */}
        <h1>HOME</h1>
      </div>
      <div className="home__lanterns">
        {lanterns.map((lantern) => (
          <Lantern key={lantern.id} data={lantern} />
        ))}
      </div>
    </main>
  );
}
