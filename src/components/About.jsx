import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    const heading="Hello";
    const text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam incidunt natus autem vero ab, reprehenderit laboriosam nisi beatae esse dignissimos porro fugit dolores atque numquam doloremque fuga voluptates, iure quia."
    return (
    <div className='w-full h-screen bg-[#050c0f]'>
        <h1>{heading}</h1>
        <p>{text}</p>
    </div>
  )
}

export default About