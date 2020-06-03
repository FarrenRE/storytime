import React from 'react';

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
      <span className="image-reveal">
        <img 
          className="page-image" 
          alt="Karellen revealed" 
          src={process.env.PUBLIC_URL + '/images/reveal-body.jpg'}
          id="reveal-first" />
        <img 
          className="page-image" 
          alt="Karellen revealed" 
          src={process.env.PUBLIC_URL + '/images/reveal-face.jpg'}
          id="reveal-second" />
      </span>
    </div>
  );
}

export {
  left,
  right
}