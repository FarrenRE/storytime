import React from 'react';

export default function ChatSelect(props) {
const options = props.dialogueOptions.map( o => <div className="dialogue-option">{o}</div> );
  return (
    <div className="ChatSelect">
      {options}
    </div>
  )
}