import React from 'react';
import { Link } from 'react-router-dom';

export default function Onboarding() {
  return (
    <main className="onboarding__main">
      <div className="home__hero">
        <h1>Welcome</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod
        </h2>
      </div>
      <div className="home__steps">
        {/* home steps will look like this */}
        <div className="step__container">
          <div className="step__left">
            <h3>01/ Create your lanterns</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
            <p className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
          <div className="step__right">
            <img
              src="https://picsum.photos/seed/picsum/640/365"
              alt="placeholder"
            />
          </div>
        </div>
        {/* home steps will look like this */}
        <div className="step__container">
          <div className="step__left">
            <h3>02/ A safe place to share and view</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
            <p className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
          <div className="step__right">
            <img
              src="https://picsum.photos/seed/picsum2/640/365"
              alt="placeholder"
            />
          </div>
        </div>
        {/* home steps will look like this */}
        <div className="step__container">
          <div className="step__left">
            <h3>03/ View feedback before you lantern disapears</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
            <p className="subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod
            </p>
          </div>
          <div className="step__right">
            <img
              src="https://picsum.photos/seed/picsum3/640/365"
              alt="placeholder"
            />
          </div>

          <Link to="/home">Skip</Link>
        </div>
      </div>
    </main>
  );
}
