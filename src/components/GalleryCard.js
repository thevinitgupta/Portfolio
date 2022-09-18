import React from 'react'
import "../Css/GalleryCard.css"

function GalleryCard({
    backgroundColor, 
    image,
    text="",
    desc,
    url,
    height,
    width
}) {
    const style = {
        backgroundColor,
        height,
        width
    }
    
    const img = image.length>0 ? require(`../Images/Patterns/${image}.svg`) : null;

    return (
    <div className='gallery-card' style={style}>
        <div className={!img ? "card-cover back" : "card-cover back pattern" }>
           {img && <img className='card-image' src={img} alt="card place" />}
        </div>
        <div className="page6 project">
            {desc}
            <div className='case-study'>
                Case Study
            </div>
            <div className='live-link'><a href={url} target="_blank" rel="noreferrer">Live</a></div>
        </div>
        <div className="page5"></div>
        <div className="page4"></div>
        <div className="page3"></div>
        <div className="page2"></div>
        <div className="page1"></div>
        <div className={!img ? "card-cover front" : "card-cover front pattern" }>
            {img && <img className='card-image' src={img} alt="card place" />}
            <div className='card-head'>{text}</div>
        </div>
    </div>
  )
}

export default GalleryCard