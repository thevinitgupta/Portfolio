import React, {useState,useEffect,useRef} from 'react'
import Logo from './Logo'
import "../Css/Navbar.css"
import Navmenu from './Navmenu'
let instance = 0;
function Navbar() {
    const [sticky, setSticky] = useState(false);
    const [firstRender, setFirstRender] = useState(false)
    useEffect(() => {
        setFirstRender(instance === 0)
        instance++;
        return () => { instance-- }
    }, [])

    const navRef = useRef<HTMLDivElement>(null)
    const handleScroll = () => {
        const refBottom = navRef?.current?.getBoundingClientRect()?.bottom?? 0;
        window.scrollY > refBottom ? setSticky(true) : setSticky(false);
      }

      function debounce( wait=40,immediate = true){
        if(immediate){
            handleScroll();
        }
        else {
            const timeId = setTimeout(()=>{
                handleScroll();
            },wait)
            clearTimeout(timeId)
            window.removeEventListener("scroll",()=>{
                return handleScroll()
            })
        }
      }
    
        window.addEventListener("scroll", ()=>{
            if(window.scrollY===0) setSticky(false)
            if(window.scrollY>100)
            debounce(40,firstRender);
        });
    return (
        <div ref={navRef} className={sticky ? "Navbar Navbar-sticky" : "Navbar"}>
            <Logo scrolled={sticky}/>
            <Navmenu scrolled={sticky}/>
        </div>
    )
}

export default Navbar
