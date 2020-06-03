import React from 'react';

function left() {
  return (
    <div className="page-content">
      <p>
        Stormgren was silent. There was nothing he could say to this—nothing, at any rate, that would convince the other. He sometimes wondered if he had really convinced himself.
      </p>
    </div>
  );
}

function right() {
  return (
    <div className="page-content">
      <img 
        className="page-image"
        alt="Stormgren pensive" 
        src={process.env.PUBLIC_URL + '/images/stormgren-window-2_cropped.jpg'} />
    </div>
  );
}

export {
  left,
  right
}