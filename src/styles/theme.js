import mixins from './mixins';
import { COLORS } from './';

const theme = {
  breakpoints: {
    mobileS: `330px`,
    mobileM: `400px`,
    mobileL: `480px`,
    tabletS: `600px`,
    tabletL: `768px`,
    desktopXS: `900px`,
    desktopS: `1080px`,
    desktopM: `1200px`,
    desktopL: `1400px`,
  },
  boxShadow: {
    small: `
    0.5px 1px 1px hsl(var(--shadow-color) / 0.7)
  `,
    medium: `
    1px 2px 2px hsl(var(--shadow-color) / 0.333),
    2px 4px 4px hsl(var(--shadow-color) / 0.333),
    3px 6px 6px hsl(var(--shadow-color) / 0.333)
  `,
    large: `
    1px 2px 2px hsl(var(--shadow-color) / 0.2),
    2px 4px 4px hsl(var(--shadow-color) / 0.2),
    4px 8px 8px hsl(var(--shadow-color) / 0.2),
    8px 16px 16px hsl(var(--shadow-color) / 0.2),
    16px 32px 32px hsl(var(--shadow-color) / 0.2)
  `,
  },
  colors: COLORS,
  mixins,
};

export default theme;
