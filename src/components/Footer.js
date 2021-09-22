import React from "react"
import social_links from "../constants/social_links"
import styled from "styled-components"

const StyledFooter = styled.section`
  height: 5rem;
  text-align: center;
  display: grid;
  place-items: center;
  margin-bottom: 3rem;

  h4 {
    margin-top: 0.5rem;
    color: var(--clr-white);
    font-weight: normal;
    text-transform: capitalize;
  }
  h4 span {
    color: var(--clr-primary-5);
    margin-left: 0.5em;
  }
  .social-links {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-top: 3rem;
    width: 15rem;
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

const Footer = () => {
  return (
    <StyledFooter>
      <div className="social-links">
        {social_links.map(link => {
          return (
            <a href={link.url} key={link.id} className="social-link">
              {link.icon}
            </a>
          )
        })}
      </div>
      <h4>
        {new Date().getFullYear()}
        <span>Victor Garcia Mestre</span>
      </h4>
    </StyledFooter>
  )
}

export default Footer
