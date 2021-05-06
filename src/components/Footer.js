import React from "react"
import social_links from "../constants/social_links"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="footer-links social-links">
          {social_links.map(link => {
            return (
              <a href={link.url} key={link.id} className="social-link">
                {link.icon}
              </a>
            )
          })}
        </div>
        <h4>
          {new Date().getFullYear()}
          <span> Victor Garcia Mestre</span>
        </h4>
      </div>
    </footer>
  )
}

export default Footer
