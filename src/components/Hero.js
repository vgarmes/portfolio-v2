import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import useHasMounted from '../hooks/useHasMounted';
import FadeIn from './FadeIn';
import SocialLink from './SocialLink';
import socialLinks from '../constants/social_links';

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

  .decorative {
    color: var(--color-decorative);
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
    ${({ theme }) => theme.mixins.flexBetween};
    width: 15rem;
    margin-top: 50px;
  }
`;

const Hero = () => {
  const hasMounted = useHasMounted();

  const textContent = (
    <h1 className="big-heading">
      <span>
        Hi there, I'm <span className="decorative">Victor</span>. <br />
      </span>
      <span>
        Front End Developer. <br />
      </span>
    </h1>
  );

  const contactButton = (
    <Link to="/#contact" className="contact-btn">
      contact me
    </Link>
  );

  const social = (
    <div className="social-links">
      {socialLinks.map(link => (
        <SocialLink key={link.id} {...link} />
      ))}
    </div>
  );

  const items = [textContent, contactButton, social];

  if (!hasMounted) {
    return <StyledHeroSection />;
  }

  return (
    <StyledHeroSection>
      {items.map((item, i) => (
        <FadeIn key={i} animationName="up" duration={1000} delay={i * 100}>
          {item}
        </FadeIn>
      ))}
    </StyledHeroSection>
  );
};

export default Hero;
