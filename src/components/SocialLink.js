import React from "react"
import styled from "styled-components"

const defaultColor = "var(--color-text)"

const Link = styled.a`
  font-size: 1.75rem;
  transition: var(--transition);
  opacity: 0.7;

  &:hover {
    opacity: 1;
    transform: scale(1.2, 1.2);
    color: ${({ color }) => color};
  }
`

const SocialLink = ({ url, color, icon, ...delegated }) => {
  return (
    <Link href={url} color={color ? color : defaultColor} {...delegated}>
      {icon}
    </Link>
  )
}

export default SocialLink
