import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Content = () => {
  const container = useRef();
  useGSAP(() => {
    let t17 = gsap.timeline({
      scrollTrigger: {
        trigger: ".part-7",
        start: "50% 50%",
        end: "300% 50%",
        pin: true,
        // markers: true,
        scrub: 1,
      },
    });
    t17.to(".our-work-txt-div", {
      height: "60vh",
    }, 'height')
    t17.to(".our-work-txt", {
      height: "60vh",
    }, 'height')
    t17.to(".our", {
      left: "0%",
    },'height')
    t17.to(".work", {
      right: "0%",
    },'height')
    t17.to(".scroll-img", {
      marginTop: "-420%"
    })

  }, { scope: container });



  return (

    <div className="main" ref={container}>
      <div className='part-7 w-full flex justify-center items-center h-screen bg-[#050c0f]'>
        <div className="our-work-txt absolute w-[60vw] h-[0vh] z-[9] ">
          <h1 className='our absolute top-0 left-[35%] translate-x-[-20%] translate-y-[-50%] text-5xl'>Our</h1>
          <h1 className='work absolute bottom-0 right-[35%] translate-x-[20%] translate-y-[50%] text-5xl'>Works</h1>
        </div>
        <div className='our-work-txt-div relative overflow-hidden flex items-center justify-center w-[60vw] h-[0vh] bg-slate-50'>
          <div className="scroll-work w-[100%] h-[60vh] overflow-hidden bg-slate-500">
            <div className="scroll-img w-[100%] mt-[0%] transition delay-1000">
              <img className='w-[100%]' src="https://media.istockphoto.com/id/505228567/photo/little-girl-sitting-on-centennial-tree.webp?b=1&s=170667a&w=0&k=20&c=0xUp7Ez7oSC-c4m-mYoXJbEtntGLMi1l-9e_FodYsR4=" alt="" />
              <img className='w-[100%] ' src="https://images.unsplash.com/photo-1494972688394-4cc796f9e4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNtYWxsJTIwc2l6ZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
              <img className='w-[100%]' src="https://media.istockphoto.com/id/1455802888/photo/balance.webp?b=1&s=170667a&w=0&k=20&c=5dsz0tzd7M-3d1GBn1TVHPrtr8yCFNvnPIv3svXn18g=" alt="" />
              <img className='w-[100%]' src="https://media.istockphoto.com/id/157279914/photo/housing-growth.webp?b=1&s=170667a&w=0&k=20&c=GbmVVCoVUi-kN0yuvAXJoyJwW2ypDun4QxMcRFPamo0=" alt="" />
              <img className='w-[100%]' src="https://images.unsplash.com/photo-1613431812949-77b3351bb23d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c21hbGwlMjBzaXplfGVufDB8fDB8fHww" alt="" />
              <img className='w-[100%]' src="https://images.unsplash.com/photo-1542840843-3349799cded6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c21hbGwlMjBzaXplfGVufDB8fDB8fHww" alt="" />
              <img className='w-[100%]' src="https://images.unsplash.com/photo-1613946268361-6a0c37276dc1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNtYWxsJTIwc2l6ZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content

