import React from 'react'
import Contact from '../components/Contact/Contact'
import Title from '../components/Title/Title'
const ContactPage = () => {
  return (
    <div className="flex flex-col items-center p-4 md:p-16" style={{color: "var(--color-text-primary)"}}>
      <Title title="Contact Me" />
      <Contact />
    </div>
  )
}

export default ContactPage
