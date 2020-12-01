/* eslint-disable react/prop-types */
import React from 'react';

// local imports
import { Link } from 'react-router-dom';
import circle1 from '../assets/lanterns/circle_lantern.jpg';
import circle2 from '../assets/lanterns/circle2_lantern.jpg';
import square from '../assets/lanterns/square_lantern.jpg';

export default function Lantern({ data, rando }) {
  // shape color from props
  // const type = ['circle', 'square'];
  // const colors = ['FFC47E', '395185', 'EE4444'];
  let lanternImg;

  switch (data.type) {
    case 'circle':
      lanternImg = circle1;
      break;
    case 'square':
      lanternImg = square;
      break;
    case 'circle2':
      lanternImg = circle2;
      break;
    default:
      lanternImg = circle1;
      return;
  }

  // const handleClick = () => {
  //   console.log('click worked');
  // };

  return (
    <>
      <Link
        to={`home/view/${data.id}`}
        className="lantern__main"
        style={{
          top: rando.randomTop,
          left: rando.randomLeft,
        }}
      >
        <img src={lanternImg} alt="user lantern" />
      </Link>
      {/* test */}
    </>
  );
}
