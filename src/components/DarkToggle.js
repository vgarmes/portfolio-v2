import React from 'react';
import useDarkMode from '../hooks/useDarkMode';
import { HiSun, HiMoon } from 'react-icons/hi';
import styled from 'styled-components';

const Toggle = styled.button`
  ${({ theme }) => theme.mixins.iconButton};
  opacity: 0.7;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  font-size: 1.5rem;
  color: var(--color-text);
  &:hover,
  &:focus,
  &:active {
    opacity: 1;
  }
`;

const DarkToggle = () => {
  const [colorMode, setColorMode] = useDarkMode();

  if (!colorMode) {
    return null;
  }

  return (
    <Toggle
      aria-label="activate dark mode"
      onClick={() => {
        setColorMode(colorMode === 'light' ? 'dark' : 'light');
      }}
    >
      {colorMode === 'light' ? <HiSun /> : <HiMoon />}
    </Toggle>
  );
};

export default DarkToggle;
