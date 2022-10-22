import React from 'react'
import Record from "../Images/record.png"
import "../Css/Skills.css"
import Note from './Note'

function Skills() {
  return (
    <div className='skills'>
      <div className='skills-head'>Skills</div>
      <div className='skills-body'>
        <img className='skills-record' src={Record} alt="record"/>
        <Note text="Javascript" img="1" position="absolute" top="7%" left="10%" transform="rotate(0.03turn)"/>
        <Note text="ReactJS" img="2" position="absolute" top="67%" left="1%" />
        <Note text="NodeJS" img="3" position="absolute" top="38%" left="11%"/>
        <Note text="MongoDB" img="4" position="absolute" top="12%" left="74%" />
        <Note text="Java" img="5" position="absolute" top="45%" left="87%" />
        <Note text="VueJS" img="3" position="absolute" top="79%" left="78%"  />
      </div>
    </div>
  )
}

export default Skills