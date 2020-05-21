import React from 'react';
import Page from './Page';

export default function Spread(props) {

  return (
    <div className={ `spread ${ props.cover ? "cover" : "" }` }>
      <div className="leaf leaf--left">
        <Page>
          { props.left } 
        </Page>
      </div>
      <div className="leaf leaf--right">
        <Page>
          { props.right }
          { props.button }
        </Page>
      </div>
    </div>
  );
}