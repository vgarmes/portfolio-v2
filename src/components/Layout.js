import React, { useState, useEffect } from "react"
import styled, { ThemeProvider } from "styled-components"
import GlobalStyle from "../styles/GlobalStyle"
import theme from "../styles/theme"
// import "../assets/css/main.css"
import Navbar from "./Navbar"
import Footer from "./Footer"

// Smooth Scrolling: https://medium.com/@chrisfitkin/how-to-smooth-scroll-links-in-gatsby-3dc445299558
/*
if (typeof window !== "undefined") {
  // eslint-disable-next-line global-require
  require("smooth-scroll")('a[href*="#"]')
}
*/

const Layout = ({ children, location }) => {
  const isHome = location.pathname === "/"

  // Sets target="_blank" rel="noopener noreferrer" on external links
  const handleExternalLinks = () => {
    const allLinks = Array.from(document.querySelectorAll("a"))
    if (allLinks.length > 0) {
      allLinks.forEach(link => {
        if (link.host !== window.location.host) {
          link.setAttribute("rel", "noopener noreferrer")
          link.setAttribute("target", "_blank")
        }
      })
    }
  }

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1) // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView()
          el.focus()
        }
      }, 0)
    }

    handleExternalLinks()
  }, [])

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navbar isHome={isHome} />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default Layout
