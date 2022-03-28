import React from 'react'
import "../Css/Work.css"
import WorkCard from './WorkCard'

function Work() {
    function openWorkPage(){
        //reroute to all work page
    }
    return (
        <div className='Work'>
            <header className='Work-head'>
                Turning tags to Websites
            </header>
            <div className='Work-list'>
                <div className='Work-col'>
                    <WorkCard name="typr" github="http://thevinitgupta.me/Typr/" />
                    <div className='Work-name'>
                        Typr
                    </div>
                </div>
                <div className='Work-col'>
                    <WorkCard name="souviktalks" github="https://souviktalks-2021.web.app/" />
                    <div className='Work-name'>
                        Souvik Talks
                    </div>
                </div>
                <div className='Work-col'>
                    <WorkCard name="moviefling" github="https://moviefling.netlify.app/" />
                    <div className='Work-name'>
                        Movie Fling
                    </div>
                </div>
            </div>
            <div className='Work-all'>
                <span onClick={()=>{
                    openWorkPage();
                }} id="work-link">See All </span>
            </div>
        </div>
    )
}

export default Work
