import React, { useState, useEffect } from 'react';
import UIfx from 'uifx';
import '../styles/Revealer.scss';
import flashAudio from '../audio/light-flash.wav';
import switchAudio from '../audio/fuse-switch.ogg';

export default function Revealer(props) {

  const [count, setCount] = useState(0);
  const [imageSrc, setImageSrc] = useState('/images/reveal-black.jpg');
  const [animate, setAnimate] = useState(false);
  const [buttonText, setButtonText] = useState('Pull the trigger!');

  const flashSound = new UIfx(
    flashAudio,
    { volume: 0.8 }
  );;
  const switchSound = new UIfx(
    switchAudio,
    { volume: 0.8 }
  );;


  function reveal() {
    setCount( count + 1 );
  }

  useEffect(()=>{
    console.log(`count updated to ${count}`);
    if( count === 1 ) {
      setImageSrc( 'images/reveal-body.jpg' );
      setAnimate( true );
      flashSound.play();
      setButtonText('Prime flash!');
    }
    else if( count === 2 ) {
      setImageSrc( 'images/reveal-black.jpg' );
      setAnimate( false );
      switchSound.play();
      setButtonText('Again!');
    }
    else if( count === 3 ) {
      setImageSrc( 'images/reveal-face.jpg' );
      setAnimate( true );
      flashSound.play();
      setButtonText('Prime flash!');
    }
    else {
      setImageSrc( 'images/reveal-black.jpg' );
      setAnimate( false );
      switchSound.play();
      setCount(0);
      setButtonText('Pull the trigger!');
    }
  }, [count, imageSrc]);

  useEffect(()=>{
    console.log(`imageSrc updated to: ${ imageSrc }`);
  }, [imageSrc])

  return (
    <div className="Revealer">
      <span className={`image-reveal ${ animate ? 'animate-reveal' : '' }`}>
        <img 
          className="page-image" 
          alt="Karellen revealed" 
          src={process.env.PUBLIC_URL + imageSrc} />
      </span>
      <div class="button button--trigger" onClick={reveal}>{ buttonText }</div>
    </div>
  );
}