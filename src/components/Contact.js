import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import Title from "./Title"
import sr from "../utils/sr"
import { srConfig } from "../utils"
import usePrefersReducedMotion from "../hooks/usePrefersReducedMotion"

const StyledContactSection = styled.section`
  text-align: center;
  max-width: 600px;
  .contact-btn {
    ${({ theme }) => theme.mixins.bigButtonOutline};
    margin-top: 50px;
  }
`

const Contact = () => {
  const sectionRef = useRef(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  useEffect(() => {
    if (prefersReducedMotion) {
      return
    }
    sr.reveal(sectionRef.current, srConfig(200))
  }, [prefersReducedMotion])
  return (
    <StyledContactSection ref={sectionRef} id="contact">
      <Title title="Contact me" />
      <p>
        I'm currently looking for new opportunities, so if you think I'm a good
        fit for your next project my inbox is open! If you have a question or
        just want to say hi you are also more than welcome.
      </p>

      <a className="contact-btn" href="mailto:vgmestre@gmail.com">
        say hello
      </a>
    </StyledContactSection>
  )
}

export default Contact
