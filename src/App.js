import React from 'react';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Main from './components/Main'; 
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import './App.css'

function App() {
  return (
    <div className='content_wrapper'>
      <Navbar/>
      <Main/>
      <AboutMe/>
      <Skills/>
      <Projects/>
      <ContactMe/>
    </div>
  )
}

export default App