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
            <h3>01/ A safe space to share </h3>
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
            <h3>02/Create a lantern</h3>
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
            <h3>03/ Send your Lantern</h3>
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
        </div>
        <div className="step__container">
          <div className="step__left">
            <h3>04/The Team</h3>
            <ul>
              <li>Riley Jakusik - Project Manager / UX Engineer</li>
              <li>Mark</li>
              <li>Tyler</li>
              <li>Vicki</li>
              <li>Artur</li>
              <li>Matt</li>
              <li>Erin</li>
              <li>Mackenzie</li>
              <li>Justin</li>
            </ul>
          </div>
          <div className="step__right">
            <img
              src="https://picsum.photos/seed/picsum2/640/365"
              alt="placeholder"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
