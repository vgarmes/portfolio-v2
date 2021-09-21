import React from "react"
import styled from "styled-components"
import Hero from "../components/Hero"
import About from "../components/About"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Seo from "../components/Seo"
import { graphql } from "gatsby"

const StyledMainContainer = styled.main`
  counter-reset: section;
`

export default ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
  } = data

  return (
    <>
      <Seo title="Home" />
      <StyledMainContainer className="fillHeight">
        <Hero />
        <About />
        <Jobs />
        <Projects title="featured projects" projects={projects} />
      </StyledMainContainer>
    </>
  )
}

// page query will be executed during build process and the results passed as "data" prop
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
