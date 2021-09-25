import React, { useEffect, useRef } from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion"
import sr from "../utils/sr"
import { srConfig } from "../utils"
import Title from "./Title"
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiGatsby,
  SiNodeDotJs,
  SiRuby,
  SiRails,
  SiMongodb,
  SiPostgresql,
} from "react-icons/si"

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

  .skills-list li span {
    visibility: hidden;
    width: 120px;
    background-color: var(--clr-grey-9);
    color: var(--clr-grey-1);
    text-align: center;
    border-radius: var(--radius);
    padding: 5px 0;
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    margin-left: -60px;
  }

  .skills-list li span::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5px;
    border-width: 5px;
    border-style: solid;
    border-color: var(--clr-grey-9) transparent transparent transparent;
  }

  .skills-list li:hover span {
    visibility: visible;
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

  const icons = [
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React", icon: <SiReact /> },
    { name: "Gatsby", icon: <SiGatsby /> },
    { name: "Node JS", icon: <SiNodeDotJs /> },
    { name: "Ruby", icon: <SiRuby /> },
    { name: "Rails", icon: <SiRails /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
  ]

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
            and developing my personal projects. Some technologies I've been
            working with are:
          </p>
        </div>
        <ul className="skills-list">
          {icons.map(({ name, icon }, index) => (
            <li key={index}>
              {React.cloneElement(icon, {
                key: index,
                size: "1.5em",
              })}
              <span>{name}</span>
            </li>
          ))}
        </ul>
      </StyledAboutContainer>
    </section>
  )
}

/*
<div className="about-img-container">
          <StaticImage
            className="about-img"
            placeholder="blurred"
            src="../assets/images/profile.jpg"
            alt="profile picture"
          />
        </div>
        */

export default About
