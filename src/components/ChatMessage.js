import React from 'react';

export default function ChatMessage(props) {
  return (
    <div className="ChatMessage" data-author={props.author}>
      <span className="author" id={props.author}></span>
      <span className="message">{props.message}</span>
    </div>
  )
}