import React from 'react';
import { Link } from 'react-router-dom';

export default function Team() {
  return (
    <main className="team__page">
      {/* <Link to="/">How it works</Link> */}
      <h1>Creators:</h1>
      <ul>
        <li>
          <b>Dev Team</b>
        </li>
        <li>Mark A. - Frontend Developer</li>
        <li>Riley J. - Frontend Developer</li>
        <li>Tyler M. - Frontend Developer</li>
        <li>
          <b>Design Team</b>
        </li>
        <li>Vicki L. - UI Designer</li>
        <li>Artur C. - UI Designer</li>
        <li>Matt B. - UI Designer</li>
        <li>Erin G. - UI Designer</li>
        <li>Mackenzie C. - UI Designer</li>
      </ul>
    </main>
  );
}
