/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';

export default function CreateMain() {
  const [btnIndex, setBtnIndex] = useState(1);
  function handleCount(e) {
    setBtnIndex(btnIndex + 1);
    e.preventDefault();
  }
  return (
    <div className="create__main">
      {btnIndex === 1 ? (
        <CreateLanternForm btnIndex={btnIndex} handleCount={handleCount} />
      ) : null}
      {btnIndex === 2 ? (
        <ChooseLanternColor btnIndex={btnIndex} handleCount={handleCount} />
      ) : null}
      <button className="btn--next" type="submit" onClick={handleCount}>
        Next
      </button>
    </div>
  );
}

function CreateLanternForm() {
  return (
    <div>
      <h1>What's on your mind?</h1>

      <form className="create__main__form">
        <textarea name="lantern_body" placeholder="How's your day going?" />
      </form>
    </div>
  );
}

function ChooseLanternColor() {
  return (
    <div>
      <h1>Choose a Color</h1>

      <form className="create__main__form">
        <textarea name="lantern_body" placeholder="How's your day going?" />
      </form>
    </div>
  );
}
