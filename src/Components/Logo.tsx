import React from 'react'
import { useNavigate } from 'react-router-dom';
import "../Css/Logo.css"

function Logo({...props}) {
    const scrolled:boolean = props.scrolled;
    let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/`; 
    navigate(path);
  }
    return (
        <div className="Logo" onClick={routeChange}>
            <div className={scrolled? "Logo-text Logo-scrolled": "Logo-text"}>
                <span className="Logo-text-left">the</span>
                <span className="Logo-pop">V</span>
                <span className="Logo-margin"></span>
                <span className="Logo-text-right">initgupta</span>
            </div>
        </div>
    )
}

export default Logo
