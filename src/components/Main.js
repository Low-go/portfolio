import React from 'react';
import { Element } from 'react-scroll';
import '../componentsCss/Main.css';


function Main() {
  return (
    <Element name="main" className='main-container'>
      <video autoPlay loop muted className='backgroundVideo'>
        <source src={`${process.env.PUBLIC_URL}/images/USA.mp4`}/>
      </video> 
      <h1>Lorran Alves Galdino</h1>
    </Element>
  );
}

export default Main;