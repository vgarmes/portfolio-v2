import React from "react"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import { graphql } from "gatsby"

const IndexPage = ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
  } = data
  return (
    <Layout>
      <Hero />
      <Jobs />
      <Projects title="featured projects" projects={projects} />
    </Layout>
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

export default IndexPage
