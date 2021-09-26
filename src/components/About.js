import React, { useEffect, useRef } from "react"
//import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion"
import sr from "../utils/sr"
import { srConfig } from "../utils"
import Title from "./Title"
import StackIcon from "./StackIcon"
import stackIcons from "../constants/stack-icons"

const StyledAboutContainer = styled.div`
  .about-text-container {
    text-align: center;
  }
  .skills-list {
    ${({ theme }) => theme.mixins.flexCenter};
    flex-wrap: wrap;
  }

  .skills-list li {
    position: relative;
    font-size: var(--fz-md);
    font-weight: 500;
    letter-spacing: 0.1em;
    padding: 1em;
    color: var(--clr-grey-9);
  }

  .about-img-container {
    display: flex;
    justify-content: center;
    align-items: flex-start; /*fixes bug that stretches picture on safari browsers*/
    border-radius: var(--radius);
  }
  .about-img {
    width: 40%;
    border-radius: var(--radius);
  }
`

const About = () => {
  const titleRef = useRef(null)
  const containerRef = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }
    sr.reveal(titleRef.current, srConfig())
    sr.reveal(containerRef.current, srConfig(200))
  }, [prefersReducedMotion])

  return (
    <section id="about" ref={containerRef}>
      <Title title="About Me" />
      <StyledAboutContainer>
        <div className="about-text-container">
          <p>
            Hello! My name is Victor. I am a multi-disciplinary engineer whose
            interest in web development started a few years ago when I was
            involved in the back-end development of a monitoring app at my old
            job.
          </p>
          <p>
            After that experience, I decided I wanted to learn more about web
            development so I started an online course on full stack development
            in Ruby on Rails. Ever since then, I have been constantly learning
            and developing my personal projects.
          </p>
          <p>Some technologies I've been working with are:</p>
        </div>
        <ul className="skills-list">
          {stackIcons.map((item, index) => (
            <li key={index}>
              <StackIcon {...item} />
            </li>
          ))}
        </ul>
      </StyledAboutContainer>
    </section>
  )
}

export default About
