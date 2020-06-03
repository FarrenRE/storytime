import React from 'react';

function left() {
  return (
    <div className="page-content">
      <span className="image-reveal">
        <img 
          className="page-image" 
          alt="Karellen revealed" 
          src={process.env.PUBLIC_URL + '/images/reveal-body.jpg'} />
      </span>
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
          src={process.env.PUBLIC_URL + '/images/reveal-face.jpg'} />
      </span>
    </div>
  );
}

export {
  left,
  right
}