import React from "react"
import styled from "styled-components"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"

const StyledProject = styled.article`
  display: grid;
  margin-bottom: 4rem;

  .project-img {
    border-top-left-radius: var(--radius);
    border-top-right-radius: var(--radius);
    height: 19rem;
    z-index: 1;
  }

  .project-info {
    background: var(--clr-white);
    padding: 2rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileL}) {
    .project-info {
      padding: 1rem;
    }
  }
  .project-number {
    display: inline-block;
    font-size: 1.25rem;
    color: var(--clr-primary-5);
    margin-bottom: 0.75rem;
  }
  .project-header {
    ${({ theme }) => theme.mixins.flexBetween};
    margin-bottom: 1.5rem;
  }
  .project-slug h3 {
    font-size: 1.25rem;
    text-transform: capitalize;
    color: var(--clr-grey-1);
    transition: var(--transition);
    margin-bottom: 0;
  }
  .project-slug h3:hover {
    color: var(--clr-primary-5);
  }
  .project-desc {
    word-spacing: 15px;
    color: var(--clr-grey-1);
  }
  .project-stack {
    margin-bottom: 1rem;
  }
  .project-stack span,
  .about-stack span {
    display: inline-block;
    background: var(--color-homepage-light);
    color: var(--color-gray-1000);
    margin: 0.25rem;
    padding: 0.25rem 0.5rem;
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: 2px;
    font-size: var(--fz-sm);
  }
  .about-stack span {
    margin-top: 0.5rem;
  }
  .project-links {
    ${({ theme }) => theme.mixins.flexBetween};
  }
  .project-icon {
    color: var(--clr-primary-5);
    font-size: 1.25rem;
    margin-left: 1rem;
    transition: var(--transition);
    vertical-align: middle;
  }
  .project-icon:hover {
    color: var(--clr-primary-1);
  }
  @media screen and (min-width: 576px) {
    .project-img {
      height: 19rem;
    }
  }
  @media screen and (min-width: 768px) {
    .project-img {
      height: 22rem;
    }
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(12, 1fr);
    align-items: center;

    .project-img {
      grid-column: 1 / span 8;
      /* grid-column-end: 8; */
      grid-row: 1 / 1;
      height: 30rem;
      border-radius: var(--radius);
      box-shadow: var(--dark-shadow);
    }
    .project-info {
      border-radius: var(--radius);
      box-shadow: var(--dark-shadow);

      z-index: 1;
      grid-column: 5 /12;
      grid-row: 1 / 1;
    }
    &:nth-of-type(odd) {
      .project-img {
        grid-column: 5 / -1;
        grid-row: 1 / 1;
      }
    }
    &:nth-of-type(odd) {
      .project-info {
        grid-column: 2 / span 7;
        grid-row: 1 / 1;
        text-align: left;
      }
    }
  }
`

const Project = ({
  description,
  title,
  github,
  stack,
  url,
  image,
  projectRef,
}) => {
  return (
    <StyledProject className="project" ref={projectRef}>
      <GatsbyImage
        image={getImage(image.localFile)}
        className="project-img"
        alt={title}
      />
      <div className="project-info">
        <div className="project-header">
          <a href={url} className="project-slug">
            <h3>{title}</h3>
          </a>
          <div className="project-links">
            <a href={github}>
              <FaGithubSquare className="project-icon" />
            </a>
            <a href={url}>
              <FaShareSquare className="project-icon" />
            </a>
          </div>
        </div>

        <p className="project-desc">{description}</p>
        <div className="project-stack">
          {stack.map(item => {
            return <span key={item.id}>{item.name}</span>
          })}
        </div>
      </div>
    </StyledProject>
  )
}

export default Project
