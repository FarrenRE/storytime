import React from 'react';

export default function ChatToggle( props ) {
  return(
    <div className="chat--toggle">
      <button className="button dialogue-button" onClick={ () => props.handleChatToggle(props.chatIndex) }>Initiate dialogue</button>
    </div>
  )
}