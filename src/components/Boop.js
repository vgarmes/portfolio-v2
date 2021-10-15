import React from 'react';
import { animated } from 'react-spring';
import useBoop from '../hooks/useBoop';

// credit: joshwcomeau.com/react/boop

const Boop = ({ children, ...boopConfig }) => {
  const [style, trigger] = useBoop(boopConfig);

  return (
    <animated.span onClick={trigger} style={style}>
      {children}
    </animated.span>
  );
};

export default Boop;
