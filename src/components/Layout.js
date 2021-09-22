import React, { useEffect } from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

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

  // Scroll into view when url contains #section
  useEffect(() => {
    /*if (location.hash) {
      const id = location.hash.substring(1) // location.hash without the '#'

      setTimeout(() => {
        const el = document.getElementById(id)
        console.log(el)
        if (el) {
          el.scrollIntoView()
          el.focus()
        }
      }, 0)
    }*/

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
