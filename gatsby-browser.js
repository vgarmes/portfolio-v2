const React = require('react');
const Layout = require('./src/components/Layout').default;
const { ThemeProvider } = require('styled-components');
const { ColorModeProvider } = require('./src/context/color-mode-context');
const theme = require('./src/styles/theme').default;
const GlobalStyle = require('./src/styles/GlobalStyle').default;

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
