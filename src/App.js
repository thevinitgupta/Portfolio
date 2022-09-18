
import { useState } from 'react';
import './App.css';
import Experience from './components/Experience';
import Gallery from './components/Gallery';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import PopupBtn from './components/PopupBtn'


function App() {
  
  return (
    <div className="App">
      <PopupBtn color="var(--white)" backgroundColor="var(--logo-pink)" text="Vinit Gupta" font="var(--font-logo)" shadowColor="var(--black)" width="18%" fontWeight="600" minWidth="250px" borderWidth='3px' height="2%" position= "absolute" left="4%" top="7%" zIndex="25" fontSize="1.9rem" stickyNeeded={true} transform='rotate(-0.03turn)' changeTop={true} transition="position 300ms ease-in-out" />
      <Navbar/>
      <Hero/>
      <Experience/>
      <Gallery/>
    </div>
  );
}

export default App;
