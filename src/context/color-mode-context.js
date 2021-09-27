import React, { useState, useEffect } from 'react';
import { COLORS, COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP } from '../styles';

export const ColorModeContext = React.createContext();

export const ColorModeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState(undefined);

  useEffect(() => {
    const root = window.document.documentElement;

    const initialColorValue = root.style.getPropertyValue(
      INITIAL_COLOR_MODE_CSS_PROP
    );

    rawSetColorMode(initialColorValue);
  }, []);

  function setColorMode(newValue) {
    const root = window.document.documentElement;

    // 1. Update React color-mode state
    rawSetColorMode(newValue);

    // 2. Update localStorage
    localStorage.setItem('color-mode', newValue);

    // 3 Update each color
    root.style.setProperty(
      '--color-text',
      newValue === 'light' ? COLORS.light.text : COLORS.dark.text
    );
    root.style.setProperty(
      '--color-background',
      newValue === 'light' ? COLORS.light.background : COLORS.dark.background
    );
    root.style.setProperty(
      '--color-primary',
      newValue === 'light' ? COLORS.light.primary : COLORS.dark.primary
    );
  }

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};
