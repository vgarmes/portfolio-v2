import React from "react"
import Hero from "../components/Hero"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import { graphql } from "gatsby"

export default ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
  } = data
  return (
    <main>
      <Hero />
      <Jobs />
      <Projects title="featured projects" projects={projects} />
    </main>
  )
}

export const query = graphql`
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
