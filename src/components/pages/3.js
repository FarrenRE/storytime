import React from 'react';

function left() {
  return (
    <div className="page-content">
      <p>
        The greatest change a suddenly-awakened Rip Van Winkle would have noticed was a hushed expectancy, a mental glancing-over-the-shoulder, as humankind waited for the Overlords to show themselves and to step down from their gleaming ships.
      </p>
      <p>
        Five years later, it was still waiting. That, thought Rikki Stormgren, was the cause of all the trouble.
      </p>
    </div>
  );
}

function right() {
  return (
    <div className="page-content">
      <img 
        className="page-image" 
        alt="Overlords arrive" 
        src={process.env.PUBLIC_URL + '/images/overlord-arrival-1_cropped.jpg'} />
    </div>
  );
}

export {
  left,
  right
}

// https://imgur.com/xL8X9jG.jpg