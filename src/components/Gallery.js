import React from 'react'
import "../Css/Gallery.css"
import GalleryCard from './GalleryCard'

function Gallery() {
  return (
    <div className="gallery">
        <div className='gallery-head'>Galleria</div>
        <div className='gallery-body'>
            <div className='gallery-row'>
                <GalleryCard backgroundColor="#fff" height="250px" width="250px" image="circuit" text="Pigshell" desc="An image to ASCII media conversion app." url="https://pigshell.netlify.app/"/>
                <GalleryCard backgroundColor="#fff" height="250px" width="250px" image="circlines" text="Typr" desc="Typing practice website for beginners and experts." url="http://thevinitgupta.me/Typr/"/>
                <GalleryCard backgroundColor="#fff" height="250px" width="250px" image="pills" text="Moviefling" desc="Movies and series searching website" url="https://moviefling.netlify.app/"/>
            </div>
            <div className='gallery-row'>
                <GalleryCard backgroundColor="#fff" height="250px" width="250px" image="sound" text="Spotify" desc="UI clone with demo song playing functionality" url="https://github.com/thevinitgupta/Spotify-Clone" />
                <GalleryCard backgroundColor="#fff" height="250px" width="250px" image="triangles" text="JQuery Clone" desc="Minimized jQuery library with commonly used functions" url="https://github.com/thevinitgupta/jQuery-clone" />
                <GalleryCard backgroundColor="#fff" height="250px" width="250px" image="yinyang" text="Piachar" desc="A piano simulation wesbite with various keys" url="http://thevinitgupta.me/PiaChar/"/>
            </div>
        </div>
    </div>
  )
}

export default Gallery