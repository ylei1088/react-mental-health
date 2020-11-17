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
      <h1>Create Page {pageIndex}</h1>
      <div className="">
        <p>whats on your mind</p>

        {pageIndex >= 10 ? 'greater than 10' : 'less than 10'}
        {pageIndex <= 10 ? (
          <FirstComponent
            pageIndex={pageIndex}
            name="Tyler"
            handleCount={handleCount}
          />
        ) : null}
        <form>
          <textarea name="lantern_body" cols="30" rows="10" />
          <button type="submit">Next</button>
        </form>
      </div>
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
