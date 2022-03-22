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
                <div className='Work-col'>
                    <WorkCard name="typr" github="" />
                    <div className='Work-name'>
                        Typr
                    </div>
                </div>
                <div className='Work-col'>
                    <WorkCard name="souviktalks" github="" />
                    <div className='Work-name'>
                        Souvik Talks
                    </div>
                </div>
                <div className='Work-col'>
                    <WorkCard name="moviefling" github="" />
                    <div className='Work-name'>
                        Movie Fling
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work
