import React from "react"
import Title from "./Title"
import Project from "./Project"
import { graphql, useStaticQuery } from "gatsby"

const query = graphql`
  {
    allStrapiProject(filter: { featured: { eq: true } }) {
      nodes {
        id
        title
        description
        stack {
          id
          name
        }
        url
        github
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED, layout: CONSTRAINED)
            }
          }
        }
        featured
      }
    }
  }
`

const Projects = () => {
  const data = useStaticQuery(query)

  const {
    allStrapiProject: { nodes: projects },
  } = data

  return (
    <section className="section projects">
      <Title title="featured projects" />
      <div className="section-center projects-center">
        {projects.map((project, index) => {
          return <Project key={project.id} index={index} {...project} />
        })}
      </div>
    </section>
  )
}

export default Projects
