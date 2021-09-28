import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const DarkToggle = () => {
  const [colorMode, setColorMode] = useDarkMode();

  if (!colorMode) {
    return null;
  }

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
