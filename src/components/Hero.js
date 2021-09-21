import React, { useState, useEffect } from "react"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import styled from "styled-components"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
import { StaticImage } from "gatsby-plugin-image"
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion"
import { navigationDelay, loaderDelay } from "../utils"

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 50px 0 0 0;
  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }
  h1 {
    margin: 0 0 15px 4px;
    font-family: var(--ff-secondary);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;
    @media (max-width: 480px) {
      margin: 0 0 10px 2px;
    }
  }
  h3 {
    margin-top: 10px;
    color: var(--clr-primary-2);
    line-height: 0.9;
  }
  p {
    margin: 20px 0 0;
    max-width: 540px;
  }
  .contact-btn {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
  .social-links {
    margin-top: 3rem;
    width: 15rem;
    display: flex;
    justify-content: space-between;
  }
  .social-link {
    font-size: 1.25rem;
    color: var(--clr-primary-2-lighter);
    transition: var(--transition);
    opacity: 0.85;
  }
  .social-link:hover {
    opacity: 1;
    transform: scale(1.2, 1.2);
    color: var(--clr-primary-2-lightest);
  }
`

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false)
  const prefersReducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    const timeout = setTimeout(() => setIsMounted(true), navigationDelay)
    return () => clearTimeout(timeout)
  }, [])

  const textContent = (
    <>
      <h1>Hi, i'm</h1>
      <h2 className="big-heading">Victor Garcia.</h2>
      <h3 className="big-heading">web developer</h3>
    </>
  )

  const contactButton = (
    <Link to="/contact" className="contact-btn">
      contact me
    </Link>
  )

  const social = (
    <div className="social-links">
      {socialLinks.map(link => {
        return (
          <a href={link.url} key={link.id} className="social-link">
            {link.icon}
          </a>
        )
      })}
    </div>
  )

  const items = [textContent, contactButton, social]

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  )
}

export default Hero
