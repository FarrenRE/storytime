import React from 'react';

function left() {
  return (
    <div className="page-content">
      <h1>Acknowledgements</h1>
      <p>To the original author, Arthur C. Clarke, for creating such inspiring pieces of science fiction.</p>
      <p>Clarke, Arthur C.. Childhood's End (Arthur C. Clarke Collection). RosettaBooks. Kindle Edition.</p>
      <p>This project was bootstrapped using <a href="https://github.com/facebook/create-react-app" target="_blank" rel="noopener noreferrer">create-react-app</a></p>
      <p>Images taken from the <a href="https://www.imdb.com/title/tt4146128/" target="_blank" rel="noopener noreferrer">Syfy adaptation of Childhood's End</a>.</p>
      <p>photos edited using <a href="https://www.gimp.org/" target="_blank" rel="noopener noreferrer">GIMP</a> and <a href="https://www.photofilters.com/" target="_blank" rel="noopener noreferrer">photofilters.com</a></p>
      <p>Julien Fradin (darenju) for react-flip-page <a href="https://github.com/darenju/react-flip-page" target="_blank" rel="noopener noreferrer">https://github.com/darenju/react-flip-page</a></p>
      <p>Sound effects from <a href="https://freesound.org" target="_blank" rel="noopener noreferrer">freesound.org</a></p>
      <ul>
        <li>Page turn courtesy of <a href="https://freesound.org/people/flag2/sounds/63318/" target="_blank" rel="noopener noreferrer">flag2</a></li>
        <li>Book cover sound courtesy of <a href="https://freesound.org/people/Sol5/sounds/450327/" target="_blank" rel="noopener noreferrer">Sol5</a></li>
        <li>Bulb flash courtesy of <a href="https://freesound.org/people/Splatez07/sounds/413690/" target="_blank" rel="noopener noreferrer">Splatez07</a></li>
        <li>Fuse effect courtesy of <a href="https://freesound.org/people/LordForklift/sounds/448394/" target="_blank" rel="noopener noreferrer">LordForklift</a></li>
        <li>Select sound courtesy of <a href="https://freesound.org/people/TiesWijnen/sounds/413310/" target="_blank" rel="noopener noreferrer">TiesWijnen</a></li>
        <li>Radio sound courtesy of <a href="https://freesound.org/people/ERH/sounds/44808/" target="_blank" rel="noopener noreferrer">ERH</a></li>
      </ul>
    </div>
  );
}

function right() {
  return (
    <div className="page-content the-end">
      <h1>THE END.</h1>
    </div>
  );
}

export {
  left,
  right
}