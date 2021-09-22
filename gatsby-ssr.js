const React = require("react")
const Layout = require("./src/components/Layout").default
const { ThemeProvider } = require("styled-components")
const theme = require("./src/styles/theme").default
const GlobalStyle = require("./src/styles/GlobalStyle").default

exports.wrapRootElement = ({ element }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {element}
    </ThemeProvider>
  )
}

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}
