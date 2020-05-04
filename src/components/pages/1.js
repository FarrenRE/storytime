import React from 'react';

function front() {
  return (
    <div className="page">
      <h1>Crisis Averted</h1>
      <p>A tale of two <a href="#">civilisations</a></p>
      <button>Hello</button>
    </div>
  );
}

function back() {
  return (
    <div className="page">
      <h1>The second page</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer viverra rutrum nisl quis efficitur. Morbi vel ex et nunc mattis interdum. Duis sodales vehicula lacus quis lacinia. Sed dignissim, nisi in tristique ornare, arcu leo viverra diam, id eleifend diam nulla at arcu. Pellentesque posuere erat luctus mi iaculis viverra. Duis et felis lorem. Sed efficitur felis at nisl lobortis, eu sagittis urna convallis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in ultrices augue. </p>
      <p>Nunc dictum, nunc ut tincidunt aliquet, purus elit fermentum metus, nec bibendum odio ligula ut eros. Fusce fermentum accumsan velit in sollicitudin. Morbi in bibendum erat. In suscipit eu lorem quis bibendum. Etiam nec placerat ante, a condimentum tellus. Sed facilisis laoreet ante, id interdum lacus porta id. Fusce fermentum lobortis mollis. Praesent eros lectus, elementum id dui et, tristique tempus lacus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Duis pharetra a massa vitae rutrum. Duis porta diam orci. Aliquam nec purus vel neque vehicula semper eu ut dui. Pellentesque consequat cursus est, id ullamcorper nisi aliquam et. Donec vitae blandit nisi. </p>
    </div>
  );
}

export {
  front,
  back
}