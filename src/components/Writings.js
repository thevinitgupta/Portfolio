import React, { useEffect, useState } from 'react'
import Typewriter from "../Images/typewrite.png"
import "../Css/Writings.css"

function Writings() {
  const [blogs,setBlogs] = useState([]);
  const fetchBlogs = async () =>{
    try{
      const data = await fetch("https://dev.to/api/articles?username=thevinitgupta");
      const resp = await data.json();
      setBlogs(resp);
    }
    catch(e){
      console.log(e);
      setBlogs([]);
    }

  }

  useEffect(()=>{
    fetchBlogs();
  },[])
  return (
    <div className='writings'>
        <div className='writings-head'>Writings</div>
        <div className='writings-body'>
            {blogs.length>0 && 
              blogs.map((blog,index)=>{
                return (
                  <div key={index+2} className='writing'>
                    {blog.title}
                  </div>
                )
              })
            }
        </div>
    </div>
  )
}

export default Writings