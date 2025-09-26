import React from 'react'
import About from './../components/About/About'
import Title from '../components/Title/Title'
const AboutPage = () => {
  return (
    <div className="flex flex-col items-center p-4 md:p-16" style={{color: "var(--color-text-primary)"}}>
      <Title title="About Me" />
      <About />
    </div>
  ) 
}

export default AboutPage
