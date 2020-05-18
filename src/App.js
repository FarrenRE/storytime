import React, { useState } from 'react';
import './styles/App.scss';
import Book from './components/Book.js';
import Chat from './components/Chat.js';

import { dialogue as chapterOneChat } from './dialogue/karellen-1.js';

function App() {
  const [chatDisplay, setChatDisplay] = useState(false);
  return (
    <div className="App">
      <Book />
      <button style={{width: "100%", height: "3em"}} onClick={ () => { chatDisplay ? setChatDisplay(false) : setChatDisplay(true) } }>Toggle chat</button>
      {chatDisplay ? <Chat dialogue={chapterOneChat} /> : ""}
    </div>
  );
}

export default App;
