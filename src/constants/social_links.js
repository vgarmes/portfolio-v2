import React from "react"
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineMedium,
} from "react-icons/ai"

const data = [
  {
    id: 1,
    icon: <AiFillGithub />,
    url: "https://github.com/vgarmes",
  },
  {
    id: 2,
    icon: <AiFillLinkedin />,
    url: "https://www.linkedin.com/in/vgmestre",
    color: "#007bb6",
  },
  {
    id: 3,
    icon: <AiOutlineTwitter />,
    url: "https://www.twitter.com/vgmestre",
    color: "#00acee",
  },
  {
    id: 4,
    icon: <AiFillInstagram />,
    url: "https://www.instagram.com/vgmestre",
    color: "#dc297b",
  },
  {
    id: 5,
    icon: <AiOutlineMedium />,
    url: "https://vgmestre.medium.com/",
  },
]

export default data
