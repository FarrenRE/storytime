import React, { useState, useRef, useEffect, useCallback } from 'react';
import '../styles/Chat.scss';

import ChatMessage from './ChatMessage.js';

export default function Chat(props) {
  const [messages, setMessages] = useState([]);
  const messagesRef = useRef(messages);
  messagesRef.current = messages;
  const messagesEndRef = useRef(null); // used for smooth scroll

  const [dialogueOptions, setDialogueOptions] = useState([]);
  const [dialogueIndex, setDialogueIndex] = useState(0);
  const [dialogueChoiceWeights, setDialogueChoiceWeights] = useState([]);

  const dialogueScript = props.dialogue;
  const logging = false;

    // render option-less message chain
    const renderScriptedMessages = useCallback(() => {
      if(logging) { console.log('renderScriptedMessages()'); }
      // array to populate initial messages state
      let newMessages = [];
      // iterate over dialogue options until messageOptions detected, then cease
      for( let i=dialogueIndex; i<dialogueScript.length; i++ ) {
        const d = dialogueScript[i];
        // render chat messages until options are detected -- user input is then required
        if( !d["messageOptions"] ) {
          // message = flavor (if flavor) + message
          let message = '';
          if( d.flavor ) {
            message += d.flavor[dialogueChoiceWeights[dialogueChoiceWeights.length -1]]
            message += " ";
          }
          message += d.message;
          newMessages.push({
            "message": message,
            "author": d.author
          });
        }
        else { break; }
      }
      // update message state
      setMessages(messages.concat(newMessages));

      // increment index
      setDialogueIndex( dialogueIndex + newMessages.length );
    }, [dialogueChoiceWeights, dialogueIndex, dialogueScript, messages]);

  // componentDidMount
  useEffect(() => {
    if(logging) {console.log('componentDidMount');}

    // render initial dialogue sequence
    let newMessages = [];
    for( let d of dialogueScript ) {
      if( !d["messageOptions"] ) {
        newMessages.push({
          "message": d.message,
          "author": d.author
        });
      }
      else { break; }
    }
    // update message state
    setMessages(messages.concat(newMessages));
    // increment index
    setDialogueIndex( dialogueIndex + newMessages.length );

  }, []);

  useEffect(() => {
    if(logging) {console.log(`useEffect [dialogueIndex] | index = ${dialogueIndex}`);}

    // based on index, step through dialogue tree
    function iterateDialogueSequence() {
      if(logging) {console.log(`iterateDialogueSequence() | index = ${dialogueIndex}`);}
      if(logging) {console.log(dialogueScript[dialogueIndex]);}
      if( dialogueIndex > dialogueScript.length -1 ) {
        if(logging) {console.log("that's all, folks!");}
      }
      else if ( dialogueScript[dialogueIndex]["messageOptions"] ) {
        setDialogueOptions( dialogueScript[dialogueIndex]["messageOptions"] );
      }
      else {
        renderScriptedMessages();
      }
    }
    iterateDialogueSequence();

  }, [dialogueIndex, renderScriptedMessages, dialogueScript]);

    /**
   * onClick event handler for dialogue options
   * @param {Event} e | event containing data-attributes
   */
  function onDialogueOptionSelect(e) {
    if(logging) {console.log('onDialogueOptionSelect()');}
    // set values
    const message = e.target.getAttribute("data-dialogue-message");
    const weight = e.target.getAttribute("data-dialogue-weight");
    const author = "Stormgren";
    if(logging) {console.log(`event values
      message: ${message}
      weight: ${weight}
      author: ${author}`);}

    // update array
    setDialogueChoiceWeights( dialogueChoiceWeights.concat(weight) );

    // render selected message
    addMessage( message, author );

    // update state
    setDialogueIndex( dialogueIndex + 1 );

    // remove dialogue options
    setDialogueOptions([]);
  }

  // componentDidUpate: [dialogueChoiceWeights]
  useEffect(()=>{
    if(logging) {
      console.log(`componentDidUpdate: [dialogueChoiceWeights]`);
      console.log( dialogueChoiceWeights );
    }
  }, [dialogueChoiceWeights]);

  // componentDidUpate: [messages]
  useEffect(()=>{
    if(logging) {console.log('componentDidUpdate: [messages]');}
    messagesEndRef.current.scrollIntoView({behavior: "smooth"});
  }, [messages]);

  /**
   * Message setState helper function
   * @param {String} message 
   * @param {String} author 
   */
  function addMessage(message, author) {
    setMessages(messagesRef.current.concat(
      { message: message, author: author }
    ));
    // messagesEndRef.current.scrollIntoView({behavior: "smooth"});
  }

  // destroy chat and send relevant information to parent
  function terminateDialogue() {
    // send dialogue choices to parent
    props.getChatWeight(dialogueChoiceWeights);
    // close chat
    props.setChatDisplay(0);
  }

  return (
    <div className="Chat chat--overlay">
      <div className="chat-body--container">
        <div className="chat-title">
          <h1><span>{props.antagonist}</span><span>Rikki Stormgren</span></h1>
        </div>
        <div className="chat-body">
          <div className="chat-messagearea">
            <div className="chat-messagearea--container">
              {messages.map( 
                m => 
                  <ChatMessage 
                    message={m.message} 
                    author={m.author} 
                    index={dialogueIndex} /> 
                )}
              <div ref={messagesEndRef}></div>
            </div>
          </div>
          <div className="chat-dialogue--select">
            {
              dialogueOptions ?
                dialogueOptions.map(
                  o => 
                  <div
                    className="chat-dialogue--option"
                    onClick={onDialogueOptionSelect}
                    data-dialogue-weight={o.weight}
                    data-dialogue-message={o.message}>
                      {o.message}
                  </div> )
                :
                ''
              }
              {
                dialogueIndex > dialogueScript.length -1
                ? <div><span
                    onClick={ terminateDialogue }
                    className="button dialogue-button__inverted">
                      Terminate dialogue sequence
                  </span></div>
                : "" 
              }
          </div>
        </div>
      </div>
    </div>
  );
}
