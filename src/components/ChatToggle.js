import React from 'react';
import UIfx from 'uifx';
import selectAudio from '../audio/select-soft.mp3';

export default function ChatToggle( props ) {
  const selectSound = new UIfx(
    selectAudio,
    { volume: 0.5 }
  );
  return(
    <div className="chat--toggle">
      <button 
        className="button dialogue-button" 
        onClick={ 
          () => {
            props.handleChatToggle(props.chatIndex);
            selectSound.play();
          }
        }>
          Initiate dialogue
        </button>
    </div>
  )
}