import React from "react"
import styled from "styled-components"

const Box = styled.div`
  ${({ theme }) => theme.mixins.flexCenter}
  color: var(--color-text);
  opacity: 0.7;
  p {
    margin-left: 0.5em;
    margin-bottom: 0;
  }
`

const StackIcon = ({ name, icon, size = "1em" }) => {
  return (
    <Box>
      {React.cloneElement(icon, {
        size,
      })}
      <p>{name}</p>
    </Box>
  )
}

export default StackIcon
