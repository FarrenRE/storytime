import React from 'react';

function left() {
  return (
    <div className="page">

    </div>
  );
}

function right() {
  return (
    <div className="title-page">
      <h1>Crisis<br />Averted</h1>
      <p>A tale of two civilisations</p>
      <small>Adapted from <i>Childhood's End</i> by Arthur C. Clarke</small>
    </div>
  );
}

export {
  left,
  right
}