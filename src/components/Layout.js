import React, { useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children, location }) => {
  const {
    allSite: {
      nodes: [{ pathPrefix }],
    },
  } = useStaticQuery(graphql`
    {
      allSite {
        nodes {
          pathPrefix
        }
      }
    }
  `)
  // if there is a pathPrefix in gatsby-config, the home page of built site will end with this prefix
  const isHome =
    location.pathname === "/" || location.pathname === `${pathPrefix}/`

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
    handleExternalLinks()
  }, [])

  return (
    <>
      <Navbar isHome={isHome} />
      <div id="content">{children}</div>
      <Footer />
    </>
  )
}

export default Layout
