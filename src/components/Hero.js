import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import socialLinks from "../constants/social_links"
import useHasMounted from "../hooks/useHasMounted"
import FadeIn from "./FadeIn"

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  padding: 50px 0 0 0;
  @media (max-width: 480px) and (min-height: 700px) {
    padding-bottom: 10vh;
  }
  h2 {
    margin-bottom: 15px;
    font-family: var(--ff-primary);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 600;
    @media (max-width: 480px) {
      margin-bottom: 2em;
    }
  }
  h3 {
    margin-top: 10px;
    color: var(--clr-primary-4-lightest);
    line-height: 0.9;
  }

  .big-heading {
    margin: 0;
    font-size: clamp(40px, 7vw, 60px);
  }

  .subtitle {
    margin-top: 1em;
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
    transition: var(--transition);
    opacity: 0.85;
  }
  .social-link:hover {
    opacity: 1;
    transform: scale(1.2, 1.2);
    color: var(--clr-white);
  }
`

const Hero = () => {
  const hasMounted = useHasMounted()

  const textContent = (
    <h1 className="big-heading">
      <span>
        Hi there, I'm Victor. <br />
      </span>
      <span>
        Front End Developer. <br />
      </span>
    </h1>
  )

  const contactButton = (
    <Link to="/#contact" className="contact-btn">
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

  if (!hasMounted) {
    return <StyledHeroSection />
  }

  return (
    <StyledHeroSection>
      {items.map((item, i) => (
        <FadeIn key={i} direction="up" duration={1000} delay={i * 100}>
          {item}
        </FadeIn>
      ))}
    </StyledHeroSection>
  )
}

export default Hero
