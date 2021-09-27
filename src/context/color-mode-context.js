import React, { useState } from 'react';
import getInitialColorMode from '../utils/get-initial-color-mode';

export const ColorModeContext = React.createContext();

export const ColorModeProvider = ({ children }) => {
  const [colorMode, rawSetColorMode] = useState(getInitialColorMode);

  const setColorMode = value => {
    rawSetColorMode(value);

    // Persist it on update
    window.localStorage.setItem('color-mode', value);
  };

  return (
    <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};
