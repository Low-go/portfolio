import React from 'react';
import { Element } from 'react-scroll';
import '../componentsCss/Main.css';
import videoSource from '../images/UNI.mp4';


function Main() {
  return (
    <Element name="main" className='section'>
      <video autoPlay loop muted className='backgroundVideo'>
        <source src={videoSource} type='video/mp4' />
      </video>
      <h1>Lorran Alves Galdino</h1>
      <a href="your-link-here" target="_blank" rel="noopener noreferrer">
        <button>Temp</button>
      </a>
    </Element>
  )
}

export default Main;