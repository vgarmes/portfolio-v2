import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import navLinks from '../constants/links';
import { Link } from 'gatsby';
import useOnClickOutside from '../hooks/useOnClickOutside';
import DarkToggle from './DarkToggle';

// transition is active when page is resized
const StyledMenu = styled.div`
  opacity: 0;
  transition: var(--transition);
  @media (max-width: 768px) {
    opacity: 1;
  }
`;

const StyledHamburgerButton = styled.button`
  display: none;
  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexCenter};
    position: relative;
    cursor: pointer;
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
    background-color: ${({ isOpen }) =>
      isOpen ? `var(--color-secondary)` : `var(--color-text)`};
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
      content: '';
      display: block;
      position: absolute;
      left: auto;
      right: 0;
      width: var(--hamburger-width);
      height: 2px;
      border-radius: 4px;
      background-color: ${({ isOpen }) =>
        isOpen ? `var(--color-secondary)` : `var(--color-text)`};
      transition-timing-function: ease;
      transition-duration: 0.15s;
      transition-property: transform;
    }
    &:before {
      width: ${props => (props.isOpen ? `100%` : `120%`)};
      top: ${props => (props.isOpen ? `0` : `-10px`)};
      opacity: ${props => (props.isOpen ? 0 : 1)};
      transition: ${({ isOpen }) =>
        isOpen ? 'var(--ham-before-active)' : 'var(--ham-before)'};
    }
    &:after {
      width: ${props => (props.isOpen ? `100%` : `80%`)};
      bottom: ${props => (props.isOpen ? `0` : `-10px`)};
      transform: rotate(${props => (props.isOpen ? `-90deg` : `0`)});
      transition: ${({ isOpen }) =>
        isOpen ? 'var(--ham-after-active)' : 'var(--ham-after)'};
    }
  }
`;

const StyledSidebar = styled.aside`
  display: none;
  @media (max-width: 768px) {
    ${({ theme }) => theme.mixins.flexBetween};
    align-items: flex-start;
    flex-direction: column;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    padding: var(--nav-height) 30px;
    width: min(100%, 300px);
    height: 100vh;
    outline: 0;
    background-color: var(--color-background);
    box-shadow: -10px 0px 30px -15px black;
    z-index: 9;
    transform: translateX(${props => (props.isOpen ? 0 : 100)}vw);
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
    transition: var(--transition);
  }
  nav {
    ${({ theme }) => theme.mixins.flexBetween};
    flex-direction: column;
    width: 100%;
    color: var(--color-text);
    font-family: var(--ff-primary);
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    width: 100%;
    li {
      position: relative;
      margin: 0 auto 20px;
      font-size: var(--fz-xxl);
      font-weight: var(--font-weight-semibold);
      @media (max-width: 600px) {
        margin: 0 auto 10px;
      }
    }
    a {
      ${({ theme }) => theme.mixins.link};
      text-transform: capitalize;
      width: 100%;
      padding-bottom: 20px;
    }
  }

  .resume-link {
    ${({ theme }) => theme.mixins.bigButton};
    padding: 18px 50px;
    margin: 10% auto 0;
    width: max-content;
  }
`;

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const onResize = e => {
    if (e.currentTarget.innerWidth > 768) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  // close sidebar when clicking outside
  const wrapperRef = useRef();
  useOnClickOutside(wrapperRef, () => setIsOpen(false));

  return (
    <StyledMenu>
      <Helmet>
        <body className={isOpen ? 'blur' : ''} />
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
            <ul>
              {navLinks.map(({ id, url, text }) => (
                <li key={id}>
                  <Link to={url} onClick={() => setIsOpen(false)}>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <DarkToggle />
        </StyledSidebar>
      </div>
    </StyledMenu>
  );
};

export default Sidebar;
