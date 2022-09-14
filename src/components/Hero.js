import React from 'react'
import HeroImg from "../Images/hero-img.svg"
import "../Css/Hero.css"
import PopupBtn from './PopupBtn'

function Hero() {
  return (
    <div className="hero">
        <div className='hero-left'>
        Building experiences on the WEB and occasionally sharing my experiences. Passionate about exploring new ideas.  
        <PopupBtn color="var(--black)" backgroundColor="var(--button-blue)" text="Resume" font="var(--font-head)" shadowColor="var(--black)" width="110px" borderWidth='3px' height="30px" fontSize="1.8rem" />
        </div>
        <div className='hero-right'>
          
           <div className='hero-right-div'>
                <img src={HeroImg} alt="hero face"/>
           </div>
        </div>
    </div>
  )
}

export default Hero