import React, { useState } from 'react';
// locals
import { data } from '../dummy/data';
import Lantern from '../components/Lantern';

export default function Home() {
  const [lanterns, setLanterns] = useState([...data]);
  // console.log(data);
  const winWidth = window.innerWidth / 10;
  const winHeight = window.innerHeight / 10;

  function getRandomNumber(min, max) {
    return parseInt(Math.random() * (max - min) + min);
  }

  return (
    <main className="home__dashboard">
      <div className="home__ui">
        {/* notice, JS is in curly brackets */}
        <h1>HOME</h1>
      </div>
      <div className="home__lanterns">
        {lanterns.map((lantern, idx) => {
          // get random numbers for each element
          const randomTop = getRandomNumber(0, winHeight) + idx * 50;
          const randomLeft = getRandomNumber(0, winWidth) + idx * 250;
          console.log(randomTop, randomLeft);
          return (
            <Lantern
              key={lantern.id}
              data={lantern}
              rando={{ randomTop, randomLeft }}
            />
          );
        })}
      </div>
    </main>
  );
}
