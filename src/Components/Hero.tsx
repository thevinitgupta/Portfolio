import React, { useState } from 'react'
import "../Css/Hero.css"
import BoldBtn from './BoldBtn';
import Bouncy from './Bouncy'

function Hero() {
    const [awesomeHovered, setAwesomeHovered] = useState(false);
    const heroHead = "Vinit_Gupta.".split("");
    return (
        <div className="Hero">
            <div className="Hero-left">
            {/* <p className="Hero-head">&#60; Web Developer &#47; &#62;</p> */}
            <div className="Hero-name">
                
            {heroHead.map((char, index)=>{
                    if(char==='_') return <span className="space" key={index}> </span>;
                    else 
                        return <Bouncy letter={char} key={index}/>
                })}
                </div>
            <div className="Hero-body">
                <div className="Hero-body-header">
                    Making the Web 
                    <span className={awesomeHovered?"awesome awesome-hovered" :"awesome"} 
                    onMouseEnter={()=>{
                        setAwesomeHovered(true);
                    }} 
                    
                    onMouseLeave={()=>{
                        setAwesomeHovered(false);
                    }}
                    >{awesomeHovered? "Versatile": "Awesome"}</span>
                </div>
                <div className="Hero-body-text">
                    <p>I am a Budding Web Developer based in India, cooking up websites. Currently developing websites of Medicinal value at 
                    <a id="current-job" href="https://tablt.com/" target="_blank" rel="noreferrer"
                    >
                        {/* <div className="underline" style={{width : `${linkHovered}px`}}></div> */}
                        Tablt Tech
                    </a></p>
                </div>
                <div className="Hero-body-cta">
                    <BoldBtn text="Hire Me" url="https://www.linkedin.com/in/thevinitgupta/"/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Hero
