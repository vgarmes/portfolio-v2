import React from "react"
import styled, { keyframes } from "styled-components"

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
}

const Fade = ({
  direction = "in",
  duration = 300,
  delay = 0,
  isDisabled = false,
  children,
  ...delegated
}) => {
  const Wrapper = styled.div`
    @media (prefers-reduced-motion: no-preference) {
      animation-name: ${animations[direction]};
      animation-fill-mode: backwards;
    }
  `
  if (isDisabled) {
    return React.cloneElement(children, { ...delegated })
  }

  return (
    <Wrapper
      {...delegated}
      style={{
        ...(delegated.style || {}),
        animationDuration: `${duration}ms`,
        animationDelay: `${delay}ms`,
      }}
    >
      {children}
    </Wrapper>
  )
}

export default Fade
