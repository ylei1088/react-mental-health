import React from 'react';

export default function CreateMain() {
  return (
    <div>
      <h1>Create Page</h1>
      <CreateContent />
    </div>
  );
}

function CreateContent() {
  return (
    <div className="">
      <p>whats on your mind</p>
      <form>
        <textarea name="lantern_body" cols="30" rows="10" />
        <button type="button">Next</button>
      </form>
    </div>
  );
}
