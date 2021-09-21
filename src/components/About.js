import React, { useEffect, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion"
import sr from "../utils/sr"
import { srConfig } from "../utils"
import Title from "./Title"

const StyledAboutContainer = styled.div`
  display: flex;
  justify-content: space-between;

  .about-text-container {
    width: 60%;
  }
  .skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
  }

  .about-img-container {
    display: flex;
    justify-content: center;
    align-items: flex-start; /*fixes bug that stretches picture on safari browsers*/
    width: 40%;
    border-radius: var(--radius);
  }
  .about-img {
    width: 60%;
    border-radius: var(--radius);
  }

  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;

    .about-text-container {
      width: 100%;
    }
    .about-img-container {
      width: 100%;
      margin-top: 0.5rem;
      margin-bottom: 1.5rem;
    }
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
  }, [])

  return (
    <section id="about" ref={containerRef}>
      <Title title="About me" />
      <StyledAboutContainer>
        <div className="about-text-container">
          <div>
            <p>
              Hello! My name is Victor. I am a multi-disciplinar engineer whose
              interest in web development started a few years ago when I was
              involved in the back-end development of a monitoring app at my old
              job.
            </p>
            <p>
              After that experience, I decided I wanted to learn more about web
              development so I started an online course on full stack
              development in Ruby on Rails. Ever since then, I have been
              constantly learning and developing my personal projects. Some
              technologies I've been working with are:
            </p>
          </div>
          <ul className="skills-list">
            <li>HTML, CSS</li>
            <li>Javascript (ES6+)</li>
            <li>React, Gatsby</li>
            <li>Node.js, Express</li>
            <li>Ruby on Rails</li>
            <li>Python</li>
            <li>SQL, MongoDB</li>
          </ul>
        </div>
        <div className="about-img-container">
          <StaticImage
            className="about-img"
            placeholder="blurred"
            src="../assets/images/profile.jpg"
            alt="profile picture"
          />
        </div>
      </StyledAboutContainer>
    </section>
  )
}

export default About
