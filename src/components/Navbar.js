import React from 'react'
import "../Css/Navbar.css"

function Navbar() {
  return (
    <div className='navbar'>
        <div className='navmenu'>
            <div className='navlink git'>Github</div>
            <div className='navlink write'>Writings</div>
            <div className='navlink linked'>LinkedIn</div>
            <div className='navlink leet'>Leetcode</div>
        </div>
    </div>
  )
}

export default Navbar