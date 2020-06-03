import React from 'react';

function left() {
  return (
    <div className="page-content">
      <p>
        weapons were certainly impotent against a civilization that could bridge the stars. So at once the greatest single obstacle to the happiness of mankind had been removed. The Overlords seemed largely indifferent to forms of government, provided that they were not oppressive or corrupt. Earth still possessed democracies, monarchies, benevolent dictatorships, communism, and capitalism. This was a source of great surprise to many simple souls who were quite convinced that theirs was the only possible way of life. Others believed that Karellen was merely waiting to introduce a system which would sweep away all existing forms of society, and so had not bothered with minor political reforms. But this, like all other speculations concerning the Overlords, was pure guesswork. No one knew their motives, and no one knew toward what future they were shepherding mankind.
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
        src={process.env.PUBLIC_URL + '/images/animal-gallery-2_cropped.jpg'} />
    </div>
  );
}

export {
  left,
  right
}