import React, { useState, useRef } from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import navLinks from "../constants/links"
import socialLinks from "../constants/social_links"
import { Link } from "gatsby"
import { FaTimes, FaAlignRight } from "react-icons/fa"
import useOnClickOutside from "../hooks/useOnClickOutside"

const StyledMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`

const StyledHamburgerButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexCenter};
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
  }
  .ham-box {
    display: inline-block;
    position: relative;
    width: var(--hamburger-width);
    height: 24px;
  }
  .ham-box-inner {
    position: absolute;
    top: 50%;
    right: 0;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: var(--border-radius);
    background-color: var(--clr-primary-4);
    transition-duration: 0.22s;
    transition-property: transform;
    transition-delay: ${props => (props.isOpen ? `0.12s` : `0s`)};
    transform: rotate(${props => (props.isOpen ? `225deg` : `0deg`)});
    transition-timing-function: cubic-bezier(
      ${props =>
        props.isOpen ? `0.215, 0.61, 0.355, 1` : `0.55, 0.055, 0.675, 0.19`}
    );
    &:before,
    &:after {
      content: "";
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: var(--hamburger-width);
      height: 2px;
      border-radius: 4px;
      background-color: var(--clr-primary-4);
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }
    &:before {
      width: ${props => (props.isOpen ? `100%` : `120%`)};
      top: ${props => (props.isOpen ? `0` : `-10px`)};
      opacity: ${props => (props.isOpen ? 0 : 1)};
      transition: ${({ isOpen }) =>
        isOpen ? "var(--ham-before-active)" : "var(--ham-before)"};
    }
    &:after {
      width: ${props => (props.isOpen ? `100%` : `80%`)};
      bottom: ${props => (props.isOpen ? `0` : `-10px`)};
      transform: rotate(${props => (props.isOpen ? `-90deg` : `0`)});
      transition: ${({ isOpen }) =>
        isOpen ? "var(--ham-after-active)" : "var(--ham-after)"};
    }
  }
`

const StyledSidebar = styled.aside`
  display: none;
  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexCenter};
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: 50px 10px;
    width: min(75vw, 400px);
    height: 100vh;
    outline: 0;
    background-color: var(--clr-primary-5);
    box-shadow: -10px 0px 30px -15px black;
    z-index: 9;
    transform: translateX(${props => (props.isOpen ? 0 : 100)}vw);
    visibility: ${props => (props.isOpen ? "visible" : "hidden")};
    transition: var(--transition);
  }
  nav {
    ${({ theme }) => theme.mixins.flexBetween};
    width: 100%;
    flex-direction: column;
    color: var(--clr-white);
    font-family: var(--ff-primary);
    text-align: center;
  }
  ol {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
    li {
      position: relative;
      margin: 0 auto 20px;
      counter-increment: item 1;
      font-size: clamp(var(--fz-sm), 4vw, var(--fz-lg));
      @media (max-width: 600px) {
        margin: 0 auto 10px;
      }
      &:before {
        content: "0" counter(item) ".";
        display: block;
        margin-bottom: 5px;
        color: var(--clr-primary-4);
        font-size: var(--fz-sm);
      }
    }
    a {
      ${({ theme }) => theme.mixins.link};
      text-transform: capitalize;
      width: 100%;
      padding: 3px 20px 20px;
    }
  }
  .resume-link {
    ${({ theme }) => theme.mixins.bigButton};
    padding: 18px 50px;
    margin: 10% auto 0;
    width: max-content;
  }
`

const Sidebar = ({}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  // close sidebar when clicking outside
  const wrapperRef = useRef()
  useOnClickOutside(wrapperRef, () => setIsOpen(false))

  return (
    <StyledMenu>
      <Helmet>
        <body className={isOpen ? "blur" : ""} />
      </Helmet>

      <div ref={wrapperRef}>
        <StyledHamburgerButton
          onClick={toggleSidebar}
          isOpen={isOpen}
          aria-label="Menu"
        >
          <div className="ham-box">
            <div className="ham-box-inner" />
          </div>
        </StyledHamburgerButton>

        <StyledSidebar isOpen={isOpen} aria-hidden={!isOpen}>
          <nav>
            <ol>
              {navLinks.map(({ id, url, text }) => (
                <li key={id}>
                  <Link to={url} onClick={() => setIsOpen(false)}>
                    {text}
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </StyledSidebar>
      </div>
    </StyledMenu>
  )
}

export default Sidebar
