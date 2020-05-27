import React from 'react';

export default function ChatToggle( props ) {
  return(
    <div className="chat--toggle">
      <button className="button dialogue-button" onClick={ () => props.handleChatToggle(1) }>Open comm channel</button>
    </div>
  )
}