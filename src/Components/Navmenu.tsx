import React, { useState } from 'react'
import "../Css/Navmenu.css"

import { Link } from 'react-router-dom';

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
                    <Link to="/about" className="Navmenu-text"><span>About</span></Link>
                </li>


                <li className="Navmenu-skills" onMouseOver={()=>{
                    setSkillsHovered(true);
                }} 
                onMouseOut={()=>{setSkillsHovered(false)}}
                >
                    <Link to="/skills" className="Navmenu-text"> <span>Skills</span> </Link>
                </li>


                <li className="Navmenu-blog" onMouseOver={()=>{
                    setBlogHovered(true);
                }} 
                onMouseOut={()=>{setBlogHovered(false)}}
                >
                    <Link to="/blog" className="Navmenu-text"> <span>Blog</span> </Link>
                </li>
            </ul> 
        </div>
    )
}

export default Navmenu
