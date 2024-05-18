import React from 'react'
// import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Content = () => {
  let mouseenter = (e) => {
    gsap.to('.cursor', {
      scale: 5,
      background: "#80808078",
      opacity: 1
    })
  }
  let mouseleave = (e) => {
    gsap.to('.cursor', {
      scale: 1,
      background: "#A9A9A9",
      opacity: 0
    })
  }


  return (
    <div className="main w-full  h-[100vh] bg-[#050c0f] flex items-center justify-center">
      <div onMouseEnter={mouseenter} onMouseLeave={mouseleave}
        className="image w-[60%] h-[60%] bg-slate-200 relative ">
        <div className="overlay z-[999] w-[100%] h-[100%] bg-transparent absolute"></div>
        <img className="h-[100%] w-[100%] object-cover " src="https://images.unsplash.com/photo-1714227329153-433a22882346?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </div>
  )
}

export default Content