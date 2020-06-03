import React, { useState, useEffect } from 'react';
import UIfx from 'uifx';
import pageTurnAudio from '../audio/page-turn.wav';
import '../styles/Book.scss';
import '../styles/Page.scss';
import FlipPage from 'react-flip-page';
import Chat from './Chat';
import Spread from './Spread';
import ChatToggle from './ChatToggle';
import { dialogue as chapterOneChat } from '../dialogue/wainwright-1';
import { dialogue as chapterTwoChat } from '../dialogue/karellen-1';
import { dialogue as chapterThreeChat } from '../dialogue/karellen-2';

import {left as coverLeft, right as coverRight} from './pages/cover';
import {left as page1Left, right as page1Right} from './pages/1';
import {left as page2Left, right as page2Right} from './pages/2';
import {left as page3Left, right as page3Right} from './pages/3';
import {left as page4Left, right as page4Right} from './pages/4';
import {left as page5Left, right as page5Right} from './pages/5';
import {left as page6Left, right as page6Right} from './pages/6';
import {left as page7Left, right as page7Right} from './pages/7';
import {left as page8Left, right as page8Right} from './pages/8';
import {left as page9Left, right as page9Right} from './pages/9';
import {left as page10Left, right as page10Right} from './pages/10';
import {left as page11Left, right as page11Right} from './pages/11';
import {left as page12Left, right as page12Right} from './pages/12';
import {left as page13Left, right as page13Right} from './pages/13';
import {left as page14Left, right as page14Right} from './pages/14';
import {left as page15Left, right as page15Right} from './pages/15';

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
      left={ page14Left() }
      right={ page14Right() }
    />,
    <Spread
      left={ page2Left() }
      right={ page2Right() }
    />,
    <Spread
      left={ page3Left() }
      right={ page3Right() }
    />,
    <Spread
      left={ page4Left() }
      right={ page4Right() }
      buttonRight={ 
        <ChatToggle 
          handleChatToggle={setChatDisplayFromChild}
          chatIndex={1} /> }
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
          left={ page5Left() }
          right={ page5Right() }
        />,
        <Spread
          left={ page6Left() }
          right={ page6Right() }
          buttonRight={ 
            <ChatToggle 
              handleChatToggle={setChatDisplayFromChild}
              chatIndex={2} /> }
        />
        ]) );
        break;
      case 2:
        setChildElements( childElements => childElements.concat([
          <Spread
            left={ page7Left() }
            right={ page7Right() }
          />,
          <Spread
            left={ page8Left() }
            right={ page8Right() }
          />,
          <Spread
            left={ page9Left() }
            right={ page9Right() }
          />,
          <Spread
            left={ page10Left() }
            right={ page10Right() }
          />,
          <Spread
            left={ page11Left() }
            right={ page11Right() }
          />,
          <Spread
            left={ page12Left() }
            right={ page12Right() }
          />,
          <Spread
            left={ page13Left() }
            right={ page13Right() }
            buttonLeft={ 
              <ChatToggle 
                handleChatToggle={setChatDisplayFromChild}
                chatIndex={3} /> }
          />,
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
              antagonist={"Alexander Wainwright"}
              getChatWeight={getChatWeight}
              setChatDisplay={setChatDisplayFromChild} /> 
          : ""}
        {chatDisplay === 2
          ? <Chat
              dialogue={chapterTwoChat}
              antagonist={"Overlord Karellen"}
              getChatWeight={getChatWeight}
              setChatDisplay={setChatDisplayFromChild} /> 
          : ""}
        {chatDisplay === 3
          ? <Chat
              dialogue={chapterThreeChat}
              antagonist={"Overlord Karellen"}
              getChatWeight={getChatWeight}
              setChatDisplay={setChatDisplayFromChild} /> 
          : ""}
    </div>
  );
}
