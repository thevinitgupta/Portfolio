import React from 'react'
import "../Css/WorkCard.css"

function WorkCard({...props}) {
  const name:string = props.name;
  const github : string = props.github;
  //const live:string  = props.live;

  function redirectTo(url:string){
    window.open(url);
  }
  const icon =  require(`../Assets/Work/${name}.png`);
  return (
    <div className='WorkCard' onClick={()=>{redirectTo(github)}}>
        <div className='WorkCard-img'>
          <img src={icon} alt='work'/>
        </div>
        <div className='WorkCard-overlay'>
          <span className='WorkCard-link'>Github &#10138;</span>
        </div>
    </div>
  )
}

export default WorkCard