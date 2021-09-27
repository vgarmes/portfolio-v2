import React from 'react';
import { ColorModeContext } from '../context/color-mode-context';

const DarkToggle = () => {
  const { colorMode, setColorMode } = React.useContext(ColorModeContext);
  return (
    <label>
      <input
        type="checkbox"
        checked={colorMode === 'dark'}
        onChange={e => {
          setColorMode(e.target.checked ? 'dark' : 'light');
        }}
      />{' '}
      Dark
    </label>
  );
};

export default DarkToggle;
