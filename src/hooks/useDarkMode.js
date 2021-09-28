import React, { useState, useEffect, useMemo } from 'react';
import { COLORS, COLOR_MODE_KEY, INITIAL_COLOR_MODE_CSS_PROP } from '../styles';

function useDarkMode() {
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

    // Update localStorage
    localStorage.setItem(COLOR_MODE_KEY, newValue);

    // Update properties
    Object.entries(COLORS).forEach(([name, colorByTheme]) => {
      const cssVarName = `--color-${name}`;

      root.style.setProperty(cssVarName, colorByTheme[newValue]);
    });

    // Update React color-mode state
    rawSetColorMode(newValue);
  }

  return [colorMode, setColorMode];
}

export default useDarkMode;
