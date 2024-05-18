import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);


const Video = () => {
let mousein=(e)=>{
  gsap.to(".cursor",{
    scale: 5,
      background: "#80808078",
      opacity:1
  })
}
let mouseout=(e)=>{
  gsap.to('.cursor', {
    scale: 1,
    background: "#A9A9A9",
    opacity:0
  })
}
  return (
    <div className='cont w-full h-screen bg-[#050c0f] flex items-center justify-center'>
        <div  className="video_container w-[90vw] h-[90vh] bg-slate-500">
        <div onMouseEnter={mousein} onMouseLeave={mouseout} className="overlay z-[999] w-[90%] h-[100%] bg-transparent absolute"></div>
            <video autoPlay loop muted className='w-[100%] h-[100%] object-cover' src="video.mp4"></video>
        </div>
    </div>
  )
}

export default Video