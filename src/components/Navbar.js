import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import logo from '../assets/images/android-chrome-192x192.png';
import pageLinks from '../constants/links';
import { Link } from 'gatsby';
import useHasMounted from '../hooks/useHasMounted';
import useScrollDirection from '../hooks/useScrollDirection';
import Sidebar from './Sidebar';
import FadeIn from './FadeIn';
import DarkToggle from './DarkToggle';

const navBarShadow = {
  small: `
    0.5px 1px 1px hsl(var(--shadow-color) / 0.7)
  `,
  medium: `
    1px 2px 2px hsl(var(--shadow-color) / 0.333),
    2px 4px 4px hsl(var(--shadow-color) / 0.333),
    3px 6px 6px hsl(var(--shadow-color) / 0.333)
  `,
};

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: var(--color-blurred-background);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: padding var(--transition-effect);
  --shadow-color: 0deg 0% 50%;
  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }
  @media (prefers-reduced-motion: no-preference) {
    ${props =>
      props.scrollDirection === 'up' &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        box-shadow: ${navBarShadow.medium};
      `};
    ${props =>
      props.scrollDirection === 'down' &&
      !props.scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: ${navBarShadow.small};
      `};
  }
`;

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
  .control {
    ${({ theme }) => theme.mixins.flexBetween};
  }
  .dark-toggle {
    @media (max-width: 768px) {
      display: none;
    }
    margin-left: 5rem;
  }
`;
/* Media query is down to the <a> element so FadeIn is the parent component 
and thus fade in animations will take effect only on first load.
On window resize, the opacity transition in the main component will take effect. */
const StyledLinks = styled.div`
  ${({ theme }) => theme.mixins.flexEnd};
  opacity: 1;
  transition: opacity var(--transition-effect);
  @media (max-width: 768px) {
    opacity: 0;
  }
  ul {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;
    li {
      margin: 0 5px;
      position: relative;
      font-weight: 700;
      font-size: var(--fz-md);
      a {
        @media (max-width: 768px) {
          display: none;
        }
        text-transform: capitalize;
        padding: 10px;
      }
    }
  }

  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`;

const Navbar = ({ isHome }) => {
  const hasMounted = useHasMounted();
  const scrollDirection = useScrollDirection('down');
  const [scrolledToTop, setScrolledToTop] = useState(true);

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Logo = (
    <div className="logo">
      <Link to="/" aria-label="home">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );

  if (!hasMounted) {
    return <StyledHeader />;
  }

  return (
    <StyledHeader
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
    >
      <StyledNav>
        <FadeIn isDisabled={!isHome}>{Logo}</FadeIn>

        <div className="control">
          <StyledLinks>
            <ul>
              {pageLinks.map(({ id, text, url }, index) => {
                return (
                  <li key={id}>
                    <FadeIn
                      name="down"
                      duration={500}
                      delay={index * 50}
                      isDisabled={!isHome}
                    >
                      <Link to={url}>{text}</Link>
                    </FadeIn>
                  </li>
                );
              })}
            </ul>
          </StyledLinks>

          <div className="dark-toggle">
            <DarkToggle />
          </div>

          <FadeIn isDisabled={!isHome}>
            <Sidebar />
          </FadeIn>
        </div>
      </StyledNav>
    </StyledHeader>
  );
};

export default Navbar;
