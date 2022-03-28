import React from 'react'
import "../Css/Logo.css"

function Logo({...props}) {
    const scrolled:boolean = props.scrolled;
    return (
        <div className="Logo">
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
