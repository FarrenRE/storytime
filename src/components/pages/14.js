import React from 'react';
import Revealer from '../Revealer';

function left() {
  return (
    <div className="page-content">
      <p>
        Karellen had tricked him—probably it was already too late. Stormgren’s paralysis lasted only a moment. Then with a single swift, well-practiced movement, he whipped out the flash gun and jammed it against the glass!
      </p>
    </div>
  );
}

function right() {
  return (
    <div className="page-content">
      <Revealer />
    </div>
  );
}

export {
  left,
  right
}