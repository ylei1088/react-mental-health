/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from 'react';

export default function CreateMain() {
  const [pageIndex, setPageIndex] = useState(1);
  function handleCount() {
    setPageIndex(pageIndex + 1);
  }
  return (
    <div className="create__main">
      <h1>What's on your mind?</h1>

      <form className="create__main__form">
        <textarea
          name="lantern_body"
          cols="30"
          rows="10"
          placeholder="How's your day going?"
        />
        <button className="btn--next" type="submit">
          Next
        </button>
      </form>

      <h6 className="no-show">
        {pageIndex >= 10 ? 'greater than 10' : 'less than 10'}
        {pageIndex <= 10 ? (
          <FirstComponent
            pageIndex={pageIndex}
            name="Tyler"
            handleCount={handleCount}
          />
        ) : null}
      </h6>
    </div>
  );
}

function FirstComponent({ pageIndex, name, handleCount }) {
  return (
    <div>
      <h1>First Component</h1>
      <p>{name}</p>
      <h3>I am the child {pageIndex}</h3>
      <button type="button" onClick={handleCount}>
        Count: +1
      </button>
    </div>
  );
}
