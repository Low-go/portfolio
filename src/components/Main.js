import React from 'react';
import { Element } from 'react-scroll';
import '../componentsCss/Main.css';
import videoSource from 'C:\\Users\\lorran\\Documents\\portfolio_site\\src\\images\\USA.mp4';

function Main() {
  return (
    <Element name="main" className='main-container'>
      <video autoPlay loop muted className='backgroundVideo'>
        <source src={videoSource} type='video/mp4' />
      </video> 
      <h1>Lorran Alves Galdino</h1>
    </Element>
  );
}

export default Main;