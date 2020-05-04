import React, { useState } from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import Book from './components/Book.js';
import Chat from './components/Chat.js';

function App() {
  const [count, setCount] = useState(0);
  const [chatDisplay, setChatDisplay] = useState(false);
  return (
    <div className="App">
      <Book />
      <button onClick={ () => { chatDisplay ? setChatDisplay(false) : setChatDisplay(true) } }>Toggle chat</button>
      {chatDisplay ? <Chat /> : ""}
    </div>
  );
}

export default App;
