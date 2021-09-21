import React from "react"

const Title = ({ title, titleRef }) => {
  return (
    <div className="section-title" ref={titleRef}>
      <h2>{title || "default title"}</h2>
      <div className="underline"></div>
    </div>
  )
}

export default Title
