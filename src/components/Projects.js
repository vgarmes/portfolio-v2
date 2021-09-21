import React, { useEffect, useRef } from "react"
import Title from "./Title"
import Project from "./Project"
import sr from "../utils/sr"
import { srConfig } from "../utils"
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion"

const Projects = ({ title, projects }) => {
  const titleRef = useRef(null)
  const projectsRef = useRef([])
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    sr.reveal(titleRef.current, srConfig())
    projectsRef.current.forEach((ref, i) => sr.reveal(ref, srConfig()))
  }, [])

  return (
    <section id="projects">
      <Title title={title} titleRef={titleRef} />

      {projects.map((project, index) => {
        return (
          <Project
            key={project.id}
            index={index}
            projectRef={el => (projectsRef.current[index] = el)}
            {...project}
          />
        )
      })}
    </section>
  )
}

export default Projects
