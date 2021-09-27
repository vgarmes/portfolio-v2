import React from 'react';
import Layout from './src/components/Layout';
import { ThemeProvider } from 'styled-components';
import { ColorModeProvider } from './src/context/color-mode-context';
import theme from './src/styles/theme';
import GlobalStyle from './src/styles/GlobalStyle';
import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
} from './src/styles';

// Dark Mode needs to update HTML during SSR
function setColorsByTheme() {
  const colors = 'dummyColors';
  const colorModeKey = 'dummyColorModeKey';
  const colorModeCssProp = 'dummyColorModeCssProp';

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersDarkFromMQ = mql.matches;
  const persistedPreference = localStorage.getItem(colorModeKey);
  console.log(persistedPreference);

  let colorMode = 'light';

  const hasUsedToggle = typeof persistedPreference === 'string';

  if (hasUsedToggle) {
    colorMode = persistedPreference;
  } else {
    colorMode = prefersDarkFromMQ ? 'dark' : 'light';
  }

  let root = document.documentElement;

  root.style.setProperty(colorModeCssProp, colorMode);

  Object.entries(colors).forEach(([name, colorByTheme]) => {
    const cssVarName = `--color-${name}`;

    root.style.setProperty(cssVarName, colorByTheme[colorMode]);
  });
}
const MagicScriptTag = () => {
  const boundFn = String(setColorsByTheme)
    .replace("'dummyColors'", JSON.stringify(COLORS))
    .replace('dummyColorModeKey', COLOR_MODE_KEY)
    .replace('dummyColorModeCssProp', INITIAL_COLOR_MODE_CSS_PROP);

  const calledFunction = `(${boundFn})()`;

  // minify calledFunction here if needed

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: calledFunction }} />;
};

/**
 * If the user has JS disabled, the injected script will never fire!
 * This means that they won't have any colors set, everything will be default
 * black and white.
 * We can solve for this by injecting a `<style>` tag into the head of the
 * document, which sets default values for all of our colors.
 * Only light mode will be available for users with JS disabled.
 */
const FallbackStyles = () => {
  // Create a string holding each CSS variable:
  /*
    `--color-text: black;
    --color-background: white;`
  */

  const cssVariableString = Object.entries(COLORS).reduce(
    (acc, [name, colorByTheme]) => {
      return `${acc}\n--color-${name}: ${colorByTheme.light};`;
    },
    ''
  );

  const wrappedInSelector = `html { ${cssVariableString}}`;

  return <style>{wrappedInSelector}</style>;
};

// Gatsby will run this function when generating our HTML
// during the build process (onRenderBody is a Gatsby lifecycle method)
export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents(<FallbackStyles />);
  // injects React element above everything but within <body> tags
  // Keys just to prevent warning: Each child in a list should have a unique "key" prop.
  setPreBodyComponents(<MagicScriptTag key="magic-script-tag" />);
};

export const wrapPageElement = ({ element, props }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <GlobalStyle />
        <Layout {...props}>{element}</Layout>{' '}
      </ColorModeProvider>
    </ThemeProvider>
  );
};
