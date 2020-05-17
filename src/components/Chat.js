import React, { useState, useRef, useEffect } from 'react';
import '../styles/Chat.scss';

import ChatMessage from './ChatMessage.js';

import { initialDialogue, userDialogue, botDialogue } from './dialogue/karellen-1.js';

export default function Chat() {
  const [messages, setMessages] = useState(initialDialogue);
  const messagesRef = useRef(messages);
  messagesRef.current = messages;
  const messagesEndRef = useRef(null); // used for smooth scroll

  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [dialogueOptionValues, setDialogueOptionValues] = useState([]);

  let botDialogueIndex = 0;

  /**
   * Message setState helper function
   * @param {String} message 
   * @param {String} author 
   */
  function addMessage(message, author) {
    setMessages(messagesRef.current.concat(
      { message: message, author: author }
    ));
    messagesEndRef.current.scrollIntoView({behavior: "smooth"});
  }

  /**
   * onClick event handler for dialogue options
   * @param {Event} e | event containing data-attributes
   */
  function onDialogueOptionSelect(e) {
    console.log(`selected option value: ${e.target.getAttribute("data-dialogue-value")}`);
    // set values
    const message = e.target.getAttribute("data-dialogue-message");
    const value = e.target.getAttribute("data-dialogue-value");
    const author = "Stormgren";
    console.log(`onDialogueOptionSelect trigger
      message: ${message}
      value: ${value}
      author: ${author}`);

    // render selected message
    addMessage( message, author );

    // update state
    setDialogueIndex( dialogueIndex + 1 );
    setDialogueOptionValues( dialogueOptionValues.concat(value) );
  }

  // render bot response
  useEffect(()=>{
    // render response
    console.log(`useEffect, ${dialogueOptionValues[0]}`);
    getBotResponse(dialogueOptionValues[dialogueIndex]);
  }, [dialogueIndex]);

  /**
   * Message response based on dialogue select value
   * @param {Integer} value 
   */
  function getBotResponse(value) {
    console.log(`getBotResponse(${value})`);
    if( value ) {
      addMessage(`${ botDialogue[botDialogueIndex].flavor[value] } ${ botDialogue[dialogueIndex].message }`, "Karellen");
      botDialogueIndex += 1;
    }
  }

  return (
    <div className="Chat chat--overlay">
      <div className="chat-body--container">
        <div className="chat-body">
          <div className="chat-messagearea">
            <div className="chat-messagearea--container">
              {messages.map( m => <ChatMessage message={m.message} author={m.author} /> )}
              <div ref={messagesEndRef}></div>
            </div>
          </div>
          <div className="chat-dialogue--select">
            {userDialogue[dialogueIndex].map(
              o => 
              <div
                className="chat-dialogue--option"
                onClick={onDialogueOptionSelect}
                data-dialogue-value={o.value}
                data-dialogue-message={o.message}>
                  {o.message}
              </div> )}
          </div>
        </div>
      </div>
    </div>
  );
}
