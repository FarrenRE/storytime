import React from 'react';

export default function ChatToggle( props ) {
  return(
    <button className="chat--toggle" onClick={ () => props.handleChatToggle(1) }>Open comm channel from component</button>
  )
}