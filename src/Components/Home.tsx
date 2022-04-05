import React from 'react'
import Navbar from './Navbar'
import "../Css/Home.css"
import Hero from './Hero'
import Work from './Work'

function Home() {
    return (
        <div className="Home">  
            <Hero/>
            <Work/>
        </div>
    )
}

export default Home
