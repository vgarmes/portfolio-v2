import React from "react"
import styled from "styled-components"
import Hero from "../components/Hero"
import About from "../components/About"
import Projects from "../components/Projects"
import Contact from "../components/Contact"
import Seo from "../components/Seo"
import { graphql } from "gatsby"

const StyledMainContainer = styled.main`
  counter-reset: section;
`

const Home = ({ data }) => {
  const {
    allStrapiProject: { nodes: projects },
  } = data

  return (
    <>
      <Seo title="Home" />
      <StyledMainContainer className="fillHeight">
        <Hero />
        <About />
        <Projects title="Featured projects" projects={projects} />
        <Contact />
      </StyledMainContainer>
    </>
  )
}

// page query will be executed during build process and the results passed as "data" prop
export const query = graphql`
  {
    allStrapiProject(
      sort: { fields: featured_order, order: ASC }
      filter: { featured: { eq: true } }
    ) {
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

export default Home
