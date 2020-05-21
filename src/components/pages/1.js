import React from 'react';

function front() {
  return (
    <div className="page-content">
      <h1>First contact</h1>
      <p>You are Rikki Stormgren and a lot of things have happened.........</p>
      <p>Speak to the Overlord named Karellen</p>
    </div>
  );
}

function back() {
  return (
    <div className="page-content">
      <h1>&lt;initiate dialogue sequence&gt;</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra rutrum nisl quis efficitur.</p>
      <p>Morbi vel ex et nunc mattis interdum. Duis sodales vehicula lacus quis lacinia. Sed dignissim, nisi in tristique ornare, arcu leo viverra diam, id eleifend diam nulla at arcu. Pellentesque posuere erat luctus mi iaculis viverra. Duis et felis lorem. Sed efficitur felis at nisl lobortis, eu sagittis urna convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in ultrices augue. </p>
    </div>
  );
}

export {
  front,
  back
}