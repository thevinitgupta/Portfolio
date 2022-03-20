import React from 'react'
import "../Css/Work.css"
import WorkCard from './WorkCard'

function Work() {
    return (
        <div className='Work'>
            <header className='Work-head'>
                Turning tags to Websites
            </header>
            <div className='Work-list'>
                <WorkCard/>
                <WorkCard/>
                <WorkCard/>
            </div>
        </div>
    )
}

export default Work
