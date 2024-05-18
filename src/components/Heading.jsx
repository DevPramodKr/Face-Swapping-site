// import React from 'react'
// import { useRef } from 'react';
// import gsap from 'gsap';
// import {useGSAP} from '@gsap/react';

//  gsap.registerPlugin(useGSAP);

const Heading = () => {
  // const boxx=useRef()
  // useGSAP(()=>{
  //   let t=gsap.timeline();
    
  // },{scope:boxx})
  return (
    <div className=' txt w-full h-[80vh] bg-[#050c0f]'>
        <div className="heading_content w-[100%] h-[75%] flex flex-col items-center relative top-28 ">
        <h1 className='text-4xl uppercase'>The Impressionist</h1>
        <h3 className='txt text-8xl uppercase font-semibold tracking-tighter'>Unmasking Reality</h3>
        <p className='absolute left-11 top-[60%] w-[40vw]'>Experience the cutting-edge technology of face swapping AI! Our innovative feature seamlessly exchanges faces in photos, creating fun and surreal transformations. Unlock endless creative possibilities and redefine your visual storytelling with ease.</p>
        </div>
    </div>
  )
}

export default Heading