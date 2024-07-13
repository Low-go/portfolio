import React from 'react';
import Navbar from './components/Navbar';
import Resume from './components/Resume';
import Projects from './components/Projects';
import ContactMe from './components/ContactMe';
import Main from './components/Main'; 
import './App.css'

function App() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Projects/>
      <Resume/>
      <ContactMe/>
    </div>
  )
}

export default App
