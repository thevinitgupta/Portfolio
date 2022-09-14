import { useEffect, useState, useRef } from "react";
import "../Css/PopupBtn.css"


function PopupBtn({color, backgroundColor, borderWidth="2px", fontWeight="400", transform="", transition="", position="", top="", left="", zIndex="",  text, font, shadowColor="var(--black)", stickyNeeded=false, width, minWidth="", height,fontSize, changeTop=false}) {

    const [clicked,setClicked] = useState(false);

    const [logoPos, setLogoPos] = useState({x:0,y:0})
    const [sticky, setSticky] = useState(false);
    const [topPos,setTopPos] = useState(top);

    const boxRef = useRef();


    // const getPosition = () => {
    //   const rect = boxRef.current.getBoundingClientRect();
    //   const isInView = rect.top === window.innerHeight;
    //   const isAtTop = rect.top <= 10;
    //   if(stickyNeeded && isAtTop){
    //     setSticky(true);
    //   }
    //   // else {
    //   //   setSticky(false)
    //   // }
    // };

    const style = {
        color,
        backgroundColor,
        fontFamily : font,
        boxShadow : `6px 6px 0 ${shadowColor}`,
        width,
        minWidth,
        height,
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        border: `${borderWidth} solid ${shadowColor}`,
        padding : "2% 3%",
        fontSize,
        fontWeight,
        userSelect: "none",
        position : sticky===true ? "sticky" : position,
        top : sticky===true ? "10px": topPos,
        left,
        zIndex,
        transform,
        transition
    }

    const clickedStyle = {
        color,
        backgroundColor,
        fontFamily : font,
        boxShadow : `none`,
        width,
        minWidth,
        height,
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        border: `${borderWidth} solid ${shadowColor}`,
        padding : "2% 3%",
        fontSize,
        fontWeight,
        transform : `translate(4px,4px) ${transform}`,
        userSelect: "none",
        position : sticky===true ? "sticky" : position,
        top : sticky===true ? "10px": topPos,
        left,
        zIndex,
        transition
    }

   
    // useEffect(()=>{
    //   if(changeTop){
    //     window.addEventListener("scroll",getPosition);
    //   }
    // },[position])
    
  return (
    <>
        <div ref={boxRef} style={clicked ? clickedStyle : style} className="popup" onMouseDown={()=>{setClicked(true)}} onMouseUp={()=>{setClicked(false)}}>{text}</div>
    </>
  )
}

export default PopupBtn