import React from 'react'
import Project from '../components/Project/Project'
import Title from '../components/Title/Title'

const ProjectPage = () => {
  return (
    <div className="flex flex-col items-center p-4 md:p-16" style={{ color: "var(--color-text-primary)" }}>
      <Title title="My Projects" />
      <Project />
    </div>
  )
}

export default ProjectPage
