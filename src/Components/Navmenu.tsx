import React, { useState } from 'react'
import "../Css/Navmenu.css"
import About from "../Assets/Icons/about.gif";
import Blog from "../Assets/Icons/blog.gif";
import Skills from "../Assets/Icons/skills.gif";

function Navmenu({...props}) {
    const scrolled:boolean = props.scrolled;
    const [aboutHovered,setAboutHovered] = useState(false);
    const [skillsHovered,setSkillsHovered] = useState(false);
    const [blogHovered,setBlogHovered] = useState(false);
    
    return (
        <div className={scrolled ? "Navmenu Navmenu-scrolled" : "Navmenu"}>
           <ul>
                <li className="Navmenu-about" onMouseOver={()=>{
                    setAboutHovered(true);
                }} 
                onMouseOut={()=>{setAboutHovered(false)}}
                >
                    <img alt="about" className="Navmenu-img" style={{display : !aboutHovered?"none" : "block"}} src={About}/>
                    
                    <span className="Navmenu-text" style={{display : aboutHovered?"none" : "block"}}>About</span>
                </li>


                <li className="Navmenu-skills" onMouseOver={()=>{
                    setSkillsHovered(true);
                }} 
                onMouseOut={()=>{setSkillsHovered(false)}}
                >
                    <img alt="about" className="Navmenu-img" style={{display : !skillsHovered?"none" : "block"}} src={Skills}/>
                    <span className="Navmenu-text" style={{display : skillsHovered?"none" : "block"}}> Skills </span>
                </li>


                <li className="Navmenu-blog" onMouseOver={()=>{
                    setBlogHovered(true);
                }} 
                onMouseOut={()=>{setBlogHovered(false)}}
                >
                    <img alt="skills" className="Navmenu-img" style={{display : !blogHovered?"none" : "block"}} src={Blog}/>
                    <span className="Navmenu-text" style={{display : blogHovered?"none" : "block"}}> Blog </span>
                </li>
            </ul> 
        </div>
    )
}

export default Navmenu
