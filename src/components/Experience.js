import React, { useState } from 'react'
import UptoneImg from "../Images/uptone.svg";
import TabltImg from "../Images/tablt.svg";
import Callout from "../Images/callout.svg";
import "../Css/Experience.css"
import Bubble from './Bubble';

function Experience() {
  const [hoveredUpt,setHoveredUpt] = useState(false);
  const [hoveredTab,setHoveredTab] = useState(false);
  return (
    <div className='experience'>
        <div className='experience-head'>Experentia</div>
        <div className='experience-body'>
          <div className='experience-card' onMouseEnter={()=>{
            setHoveredTab(true);
          }} onMouseLeave={()=>{
            setHoveredTab(false);
          }}>

          {/* bubbles */}
          <Bubble text="Worked as a Software Development Intern at Tablt for 6 months" width={hoveredTab ? "250px" : "0"} height={hoveredTab ? "120px" : "0"} top="5%" left='5%' overflow={hoveredTab ? "visible":"hidden"} fontSize={hoveredTab ? "18px" : "0"} border={hoveredTab ? "#000000 solid 3px" : "none"} type="bubble-right-bottom" transitionDelay='0' />
          
          <Bubble text="Tablt is one of India's Fastest Growing Pharmaceutical Platform" width={hoveredTab ? "250px" : "0"} height={hoveredTab ? "120px" : "0"} top="45%" left='2%' overflow={hoveredTab ? "visible":"hidden"} fontSize={hoveredTab ? "18px" : "0"} border={hoveredTab ? "#000000 solid 3px" : "none"} type="bubble-right-top" transitionDelay='250ms' />

          <Bubble text="Developed various sections of their E-commerce platform using VueJS" width={hoveredTab ? "250px" : "0"} height={hoveredTab ? "120px" : "0"} fontSize={hoveredTab ? "18px" : "0"} top="5%" left='70%' overflow={hoveredTab ? "visible":"hidden"} border={hoveredTab ? "#000000 solid 3px" : "none"} type="bubble-bottom" transitionDelay='360ms'/>
          
          <Bubble text="Helped increase customer retention through various features" width={hoveredTab ? "250px" : "0"} height={hoveredTab ? "120px" : "0"} top="37%" left='60%' overflow={hoveredTab ? "visible":"hidden"} fontSize={hoveredTab ? "18px" : "0"} border={hoveredTab ? "#000000 solid 3px" : "none"} type="bubble-top" transitionDelay='500ms'/>


            <div className='card-top'>
              <img src={TabltImg} alt="tablt"/>
            </div>
            <div className='card-bottom'>
              <img src={Callout} alt="callout"/>
              Tablt
            </div>
          </div>
          <div className='experience-card' onMouseEnter={()=>{
            setHoveredUpt(true);
          }} onMouseLeave={()=>{
            setHoveredUpt(false);
          }}>

          {/* bubbles */}
          <Bubble text="Worked as a Backend Development Intern at Uptone for 4 months" width={hoveredUpt ? "250px" : "0"} height={hoveredUpt ? "120px" : "0"} top="5%" left='5%' overflow={hoveredUpt ? "visible":"hidden"} fontSize={hoveredUpt ? "18px" : "0"} border={hoveredUpt ? "#000000 solid 3px" : "none"} type="bubble-right-bottom" transitionDelay='0' />
          
          <Bubble text="Uptone is one of a kind Audio focused social media platform" width={hoveredUpt ? "250px" : "0"} height={hoveredUpt ? "120px" : "0"} top="45%" left='2%' overflow={hoveredUpt ? "visible":"hidden"} fontSize={hoveredUpt ? "18px" : "0"} border={hoveredUpt ? "#000000 solid 3px" : "none"} type="bubble-right-top" transitionDelay='250ms' />

          <Bubble text="Handled multiple user authentication and file upload functionalities with NodeJS and MongoDB" width={hoveredUpt ? "250px" : "0"} height={hoveredUpt ? "120px" : "0"} fontSize={hoveredUpt ? "18px" : "0"} top="5%" left='70%' overflow={hoveredUpt ? "visible":"hidden"} border={hoveredUpt ? "#000000 solid 3px" : "none"} type="bubble-bottom" transitionDelay='360ms'/>
          
          <Bubble text="Lead a team of Backend Interns and reported directly to CTO" width={hoveredUpt ? "250px" : "0"} height={hoveredUpt ? "120px" : "0"} top="37%" left='60%' overflow={hoveredUpt ? "visible":"hidden"} fontSize={hoveredUpt ? "18px" : "0"} border={hoveredUpt ? "#000000 solid 3px" : "none"} type="bubble-top" transitionDelay='500ms'/>



            <div className='card-top'>
              <img src={UptoneImg} alt="uptone"/>
            </div>
            <div className='card-bottom'>
              <img src={Callout} alt="callout"/>
              Uptone
            </div>
          </div>
        </div>
    </div>
  )
}

export default Experience