import React from 'react';
import Page from './Page';

export default function Spread(props) {

  function sumChatWeights(arr) {
    let sum = 0;
    arr.map( a => sum += parseInt(a) );
    console.log(`sum of final chat weights: ${ sum }`);

    let msgChunk;
    if( sum > 0 ) {
      msgChunk = 'best an Overlord';
    }
    else if( sum < 0 ) {
      msgChunk = 'be his friend';
    }
    else {
      msgChunk = 'be his friend';
    }
    const msg = `And Stormgren hoped that when Karellen was free to walk once more on Earth, he would one day come to these northern forests, and stand beside the grave of the first man ever to ${msgChunk}.`;

    return msg;
  }

  return (
    <div className={ `spread ${ props.cover ? "cover" : "" }` }>
      <div className="leaf leaf--left">
        <Page>
          { props.left }
          { props.buttonLeft }
          {/* { props.finalWeights 
            ? sumChatWeights( props.finalWeights )
            : ''
          } */}
        </Page>
      </div>
      <div className="leaf leaf--right">
        <Page>
          { props.right }
          { props.buttonRight }
        </Page>
      </div>
    </div>
  );
}