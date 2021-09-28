import React from 'react';
import Layout from './src/components/Layout';
import { ThemeProvider } from 'styled-components';
import theme from './src/styles/theme';
import GlobalStyle from './src/styles/GlobalStyle';
import {
  COLORS,
  COLOR_MODE_KEY,
  INITIAL_COLOR_MODE_CSS_PROP,
} from './src/styles/colors';

// Dark Mode needs to update HTML during SSR
function setColorsByTheme() {
  const colors = 'dummyColors';
  const colorModeKey = 'dummyColorModeKey';
  const colorModeCssProp = 'dummyColorModeCssProp';

  const mql = window.matchMedia('(prefers-color-scheme: dark)');
  const prefersDarkFromMQ = mql.matches;
  const persistedPreference = localStorage.getItem(colorModeKey);

  let colorMode = 'light';

  const hasUsedToggle = typeof persistedPreference === 'string';

  if (hasUsedToggle) {
    colorMode = persistedPreference;
  } else {
    colorMode = prefersDarkFromMQ ? 'dark' : 'light';
  }

  let root = document.documentElement;

  root.style.setProperty(colorModeCssProp, colorMode);

  Object.entries(colors[colorMode]).forEach(([name, themeColor]) => {
    const cssVarName = `--color-${name}`;

    root.style.setProperty(cssVarName, themeColor);
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

  const cssVariableString = Object.entries(COLORS.light).reduce(
    (acc, [name, themeColor]) => {
      return `${acc}\n--color-${name}: ${themeColor};`;
    },
    ''
  );

  const wrappedInSelector = `html { ${cssVariableString} }`;

  return <style>{wrappedInSelector}</style>;
};

export const onRenderBody = ({ setPreBodyComponents, setHeadComponents }) => {
  setHeadComponents(<FallbackStyles key="fallback-styles" />);
  setPreBodyComponents(<MagicScriptTag key="magic-script-tag" />);
};

export const wrapPageElement = ({ element, props }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout {...props}>{element}</Layout>{' '}
    </ThemeProvider>
  );
};
