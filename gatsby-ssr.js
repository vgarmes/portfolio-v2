const React = require('react');
const Layout = require('./src/components/Layout').default;
const { ThemeProvider } = require('styled-components');
const { ColorModeProvider } = require('./src/context/color-mode-context');
const theme = require('./src/styles/theme').default;
const GlobalStyle = require('./src/styles/GlobalStyle').default;
const { COLORS } = require('./src/styles/index');

/*
This makes SSR render during a short time the site without any styles applied (flash of unstyled content):
https://github.com/spences10/ama/issues/11

exports.wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  )
}*/

exports.wrapPageElement = ({ element, props }) => {
  return (
    <ThemeProvider theme={theme}>
      <ColorModeProvider>
        <GlobalStyle />
        <Layout {...props}>{element}</Layout>{' '}
      </ColorModeProvider>
    </ThemeProvider>
  );
};

// Color Mode updating HTML
const MagicScriptTag = () => {
  const codeToRunOnClient = `
  (function() {
    function getInitialColorMode() {
      const persistedColorPreference = window.localStorage.getItem('color-mode');
      const hasPersistedPreference = typeof persistedColorPreference === 'string';
      if (hasPersistedPreference) {
        return persistedColorPreference;
      }
      const mql = window.matchMedia('(prefers-color-scheme: dark)');
      const hasMediaQueryPreference = typeof mql.matches === 'boolean';

      if (hasMediaQueryPreference) {
        return mql.matches ? 'dark' : 'light';
      }
      return 'light';
    }

    const colorMode = getInitialColorMode();

    const root = document.documentElement;

    root.style.setProperty(
      '--color-text',
      colorMode === 'light'
        ? '${COLORS.light.text}'
        : '${COLORS.dark.text}'
    );
    root.style.setProperty(
      '--color-background',
      colorMode === 'light'
        ? '${COLORS.light.background}'
        : '${COLORS.dark.background}'
    );
    root.style.setProperty(
      '--color-primary',
      colorMode === 'light'
        ? '${COLORS.light.primary}'
        : '${COLORS.dark.primary}'
    );

    root.style.setProperty('--initial-color-mode', colorMode);
  })()`;

  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
  // this is injected at compile-time, so there is no danger
  // that users slip malicious code into it
};

// Gatsby will run this function when generating our HTML
// during the build process (onRenderBody is a Gatsby lifecycle method)
exports.onRenderBody = ({ setPreBodyComponents }) => {
  // injects React element above everything but within <body> tags
  setPreBodyComponents(<MagicScriptTag />);
};
