import React from 'react';

function left() {
  return (
    <div className="page">

    </div>
  );
}

function right() {
  return (
    <div className="page">
      <h1>Crisis Averted</h1>
      <p>A tale of two <a href="#">civilisations</a></p>
      <button>Hello</button>    
    </div>
  );
}

export {
  left,
  right
}