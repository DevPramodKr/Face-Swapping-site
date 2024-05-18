
import { useRef} from 'react';
import Nav from './components/Nav';
import Heading from './components/Heading';
import Video from './components/Video';
import Content from './components/Content';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(useGSAP);


function App() {


  const box = useRef();


  useGSAP(() => {
    let tl = gsap.timeline();
    tl.from('.loader h1', {
      x: 200,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
    })
    tl.to(".loader h1", {
      opacity: 0,
      x: -40,
      duration: 1,
      stagger: 0.1,
    })
    tl.to(".loader", {
      opacity: 0,
    })
    tl.to(".loader", {
      display: "none",
    })
    tl.from("h3",{
      y:100,
      opacity: 0,
      stagger: 0.1
    })
    tl.from("p", {
      y: 100,
      opacity: 0,
      stagger: 0.1
    })
  }, { scope: box })

let mousemove=(e)=>{
console.log(e)
gsap.to('.cursor',{
  x:e.clientX,
  y:e.clientY,
  duration: 1,
  ease: "back.out",
})
}

  return (
    <>
    <div className="cursor z-[999] opacity-1 w-4 h-4 bg-[#A9A9A9] rounded-[50%] fixed overflow-hidden"></div>
      <div className="page text-[#ece6d5] font-abc w-full" onMouseMove={mousemove} ref={box}>
        <div className='loader gap-x-4 text-3xl w-full h-screen bg-[#050c0f] fixed top-0 z-50 flex items-center justify-center'>
          <h1>Tommorows</h1>
          <h1>Future</h1>
          <h1>Today</h1>
        </div>
        <Nav />
        <Heading />
        <Video/>
        <Content/>
      </div>
    </>
  )
}

export default App
// bg-[#050c0f]