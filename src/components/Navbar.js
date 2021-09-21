import React, { useState, useEffect } from "react"
import styled, { css } from "styled-components"
import { CSSTransition, TransitionGroup } from "react-transition-group"
import logo from "../assets/images/android-chrome-192x192.png"
import pageLinks from "../constants/links"
import { Link } from "gatsby"
import useScrollDirection from "../hooks/useScrollDirection"
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion"
import Sidebar from "./Sidebar"

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: var(--clr-primary-1-trans);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);
  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
  @media (prefers-reduced-motion: no-preference) {
    ${props =>
      props.scrollDirection === "up" &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: var(--clr-primary-1-trans);
        box-shadow: 0 10px 30px -10px var(--clr-primary-1);
      `};
    ${props =>
      props.scrollDirection === "down" &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px black;
      `};
  }
`

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  counter-reset: item 0;
  z-index: 12;
  .logo {
    ${({ theme }) => theme.mixins.flexCenter};
    a {
      width: 42px;
      height: 42px;

      img {
        height: 100%;
        transition: var(--transition);
      }
    }
  }
`

const StyledLinks = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    display: none;
  }
  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-md);
      a {
        text-transform: capitalize;
        padding: 10px;
        &:before {
          content: "0" counter(item) ".";
          margin-right: 5px;
          color: var(--clr-primary-4);
          font-size: var(--fz-xs);
          text-align: right;
        }
      }
    }
  }
  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`

const Navbar = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome)
  const scrollDirection = useScrollDirection("down")
  const [scrolledToTop, setScrolledToTop] = useState(true)
  const prefersReducedMotion = usePrefersReducedMotion()

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50)
  }

  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }

    const timeout = setTimeout(() => {
      setIsMounted(true)
    }, 100)

    window.addEventListener("scroll", handleScroll)

    return () => {
      clearTimeout(timeout)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const timeout = isHome ? 2000 : 0
  const fadeClass = isHome ? "fade" : ""
  const fadeDownClass = isHome ? "fadedown" : ""

  const Logo = (
    <div className="logo">
      <Link to="/" aria-label="home">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  )
  return (
    <StyledHeader
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
      <StyledNav>
        {prefersReducedMotion ? (
          <>
            {Logo}

            <StyledLinks>
              <ol>
                {pageLinks.map(({ id, text, url }) => {
                  return (
                    <li key={id}>
                      <Link to={url}>{text}</Link>
                    </li>
                  )
                })}
              </ol>
            </StyledLinks>
          </>
        ) : (
          <>
            <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition classNames={fadeClass} timeout={timeout}>
                  <>{Logo}</>
                </CSSTransition>
              )}
            </TransitionGroup>

            <StyledLinks>
              <ol>
                <TransitionGroup component={null}>
                  {isMounted &&
                    pageLinks.map(({ id, url, text }) => (
                      <CSSTransition
                        key={id}
                        classNames={fadeDownClass}
                        timeout={timeout}
                      >
                        <li
                          key={id}
                          style={{
                            transitionDelay: `${isHome ? id * 100 : 0}ms`,
                          }}
                        >
                          <Link to={url}>{text}</Link>
                        </li>
                      </CSSTransition>
                    ))}
                </TransitionGroup>
              </ol>
            </StyledLinks>
            <Sidebar />
          </>
        )}
      </StyledNav>
    </StyledHeader>
  )
}

/* <nav className="navbar">
          <div className="nav-center">
            <div className="nav-header">
              <img src={logo} alt="logo" />
              <button
                type="button"
                className="toggle-btn"
                onClick={toggleSidebar}
              >
                <FaAlignRight />
              </button>
            </div>
            <div className="nav-links">
              {pageLinks.map(link => {
                return (
                  <Link key={link.id} to={link.url}>
                    {link.text}
                  </Link>
                )
              })}
            </div>
          </div>
        </nav>
        */

export default Navbar
