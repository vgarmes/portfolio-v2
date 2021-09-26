import React from "react"
import social_links from "../constants/social_links"
import SocialLink from "./SocialLink"
import styled from "styled-components"

const StyledFooter = styled.section`
  text-align: center;
  display: grid;
  place-items: center;
  margin-bottom: 3rem;
  max-width: 100%;
  padding: 10px;
  margin-bottom: 0;

  background: linear-gradient(
    0deg,
    var(--color-homepage-light),
    var(--color-homepage-dark)
  );

  h4 {
    margin-top: 0.5rem;
    color: var(--color-gray-700);
    font-weight: normal;
    text-transform: capitalize;
  }
  h4 span {
    margin-left: 0.5em;
  }
  .social-links {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-top: 3rem;
    width: 15rem;
  }
`

const Footer = () => {
  return (
    <StyledFooter>
      <div className="social-links">
        {social_links.map(link => {
          return <SocialLink key={link.id} {...link} />
        })}
      </div>
      <h4>
        &copy;{new Date().getFullYear()}
        <span>Victor Garcia Mestre</span>
      </h4>
    </StyledFooter>
  )
}

export default Footer
