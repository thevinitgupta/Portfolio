import React from 'react'
import "../Css/Note.css"

function Note({img, text, position, top, left, right, bottom, transform}) {
  const noteImg = require("../Images/Notes/"+img+".svg");
  const style={
    position,
    top,
    left,
    right,
    bottom
  }
  const imgStyle = {
    transform
  }
  return (
    <div className={`note note${img}`} style={style} >
      <img className='note-img' src={noteImg} alt="note" style={imgStyle}/>
      <div className='note-text'>{text}</div>
    </div>
  )
}

export default Note