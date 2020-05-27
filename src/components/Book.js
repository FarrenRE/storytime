import React, { useState, useEffect } from 'react';
import UIfx from 'uifx';
import pageTurnAudio from '../audio/page-turn.wav';
import '../styles/Book.scss';
import '../styles/Page.scss';
import FlipPage from 'react-flip-page';
import Chat from './Chat';
import Spread from './Spread';
import ChatToggle from './ChatToggle';
import { dialogue as chapterOneChat } from '../dialogue/karellen-1';

import {left as coverLeft} from './pages/cover.js';
import {right as coverRight} from './pages/cover.js';
import {front as page1Front} from './pages/1.js';
import {back as page1Back} from './pages/1.js';
import {front as page2Front} from './pages/2.js';
import {back as page2Back} from './pages/2.js';
import {front as page3Front} from './pages/3.js';
import {back as page3Back} from './pages/3.js';

export default function Book() {

  const [chatDisplay, setChatDisplay] = useState(0);
  const [childElements, setChildElements] = useState([]);

  const getChatWeight = (weights) => {
    console.log("Chat weights:");
    console.log(weights);
  }

  const setChatDisplayFromChild = ( newState ) => {
    setChatDisplay( newState );
  }

  const initialChildElements = [
    <Spread
      left={ coverLeft() }
      right={ coverRight() }
      cover={true}
    />,
    <Spread
      left={ page1Front() }
      right={ page1Back() }
      button={ <ChatToggle handleChatToggle={setChatDisplayFromChild} /> }
    />
  ];

  useEffect(() => {
    setChildElements(initialChildElements);
  }, []);

  // on chatDisplay update, render new child pages
  useEffect(() => {
    console.log(`chatDisplay updated to ${chatDisplay}`);
    switch( chatDisplay ) {
      case 1:
        setChildElements( childElements => childElements.concat([
          <Spread
            left={ page2Front() }
            right={ page2Back() }
          />,
          <Spread
            left={ page3Front() }
            right={ page3Back() }
          />
        ]) );
        break;
      case 2:
        setChildElements( childElements => childElements.concat([
          <Spread
            left={ page2Front() }
            right={ page2Back() }
            cover={true}
          />
        ]) );
        break;
      default:
        console.log(`chatDisplay defaulted at ${chatDisplay}`);
        break;
    }
  }, [chatDisplay]);

  useEffect(() => {
    console.log(`componentDidUpdate: [childElements]`);
    console.log(childElements);
  }, [childElements]);

  const pageTurnSound = new UIfx(
    pageTurnAudio,
    { volume: 0.4 }
  );

  return (
    <div className="Book">
        <FlipPage
          orientation="horizontal"
          uncutPages="true"
          animationDuration={750}
          width={1200}
          height={800}
          perspective="300em"
          maxAngle="0"
          flipOnTouch="true"
          flipOnTouchZone={ chatDisplay === 0 ? 5 : 0 }
          disableSwipe="true"
          style={{margin: "auto"}}
          onStartPageChange={(i, d) => { 
            console.log(`onStartPageChange() | oldIndex: ${i}, dir: ${d}`);
            if( ( i === 0 && d === 'next' ) || ( i === 1 && d === 'prev' ) ) {
              // console.log("don't play sound");
            }
            else {
              // console.log('play sound');
              pageTurnSound.play();
            }
          }}
          onPageChange={(i, d) => { console.log(`onPageChange() | index: ${i}, dir: ${d}`); }}
          swipeImmune={['chat--overlay', '.Chat', 'chat-dialogue--select', 'chat-dialogue--option', 'button']}
        >
          { childElements }
        </FlipPage>
        {chatDisplay === 1
          ? <Chat
              dialogue={chapterOneChat}
              getChatWeight={getChatWeight}
              setChatDisplay={setChatDisplayFromChild} /> 
          : ""}
    </div>
  );
}
