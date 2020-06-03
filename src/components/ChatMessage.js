import React from 'react';

export default function ChatMessage(props) {
  return (
    <div className="ChatMessage" data-author={props.author} data-index={props.index}>
      <span className="author" id={props.author}></span>
      <span className="message">{props.message}</span>
    </div>
  )
}