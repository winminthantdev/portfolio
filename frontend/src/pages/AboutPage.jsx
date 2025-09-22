import React from 'react'
import About from './../components/About/About'
import Skill from '../components/Skill/Skill'
const AboutPage = () => {
  return (
    <div className='rounded-xl backdrop-blur-[2px] shadow' style={{ backgroundColor: "rgba(15, 23, 42, 0.9)"}}>
      <About />
      <Skill />
    </div>
  ) 
}

export default AboutPage
