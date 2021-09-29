import React from 'react';
import styled, { keyframes } from 'styled-components';

const animations = {
  in: keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`,
  up: keyframes`
  from {
    transform: translateY(30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,
  down: keyframes`
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`,
};

const Wrapper = styled.div`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${({ name }) => animations[name]};
    animation-direction: ${({ direction }) => direction};
    animation-fill-mode: backwards;
  }
`;

const FadeIn = ({
  name = 'in',
  direction = 'normal',
  duration = 300,
  delay = 0,
  isDisabled = false,
  children,
  ...delegated
}) => {
  if (isDisabled) {
    return React.cloneElement(children, { ...delegated });
  }

  return (
    <Wrapper
      {...delegated}
      name={name}
      direction={direction}
      style={{
        ...(delegated.style || {}),
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </Wrapper>
  );
};

export default FadeIn;
