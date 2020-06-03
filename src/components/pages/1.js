import React from 'react';

function left() {
  return (
    <div className="page-content">
      <h1>1: Enter Overlords</h1>
      <p>
        The volcano that had reared Tratua up from the Pacific depths had been sleeping now for half a million years. Yet in a little while, the island would be bathed with fires fiercer than any that had attended its birth.
      </p>
      <p>
        Situated upon the stony plain was a pyramid of scaffolding that supported the USS “Spacey McSpaceface”, as much a symbol of progress as one of stagnancy. As the human race exploited the Earth, so too would they exploit the rich mineral bounty of the solar system to feed their gluttony for material goods.
      </p>
      <p>
        The huge and silent shadows driving across the stars, more miles above his head than she dared to guess, were as far beyond his little “Spaceface” as it surpassed the log canoes of paleolithic human. For a moment that seemed to last forever, the Chief Scientist watched, as all the world was watching, while the great ships descended in their overwhelming majesty—until at last she could hear the faint scream of their passage through the thin air of the stratosphere.
      </p>
    </div>
  );
}

function right() {
  return (
    <div className="page-content">
      <p>
        She felt no regrets as the work of a lifetime was swept away. She had labored to take humans to the stars, and, in the moment of success, the stars—the aloof, indifferent stars—had come to her. This was the moment when history held its breath, and the present sheared asunder from the past as an iceberg splits from its frozen, parent cliffs, and goes sailing out to sea in lonely pride. All that the past ages had achieved was as nothing now: only one thought echoed and re-echoed through the scientist's brain: The human race was no longer alone.
      </p>
        <img 
          className="page-image" 
          src={process.env.PUBLIC_URL + '/images/the-overlords-headline_cropped.jpg'}
          alt="The Overlords newspaper headline" />
    </div>
  );
}

export {
  left,
  right
}