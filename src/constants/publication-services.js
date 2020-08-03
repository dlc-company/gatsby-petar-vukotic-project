import React from "react"
import { FaTree, FaRecycle } from "react-icons/fa"
import { TiTree } from "react-icons/ti"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default [
  {
    link: (
      <AniLink fade to="/pdf" className="btn-white">
        Dokumenta
      </AniLink>
    ),
    icon: <TiTree />,
    title: "Dokumenta",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    button: "read more",
    href: "/pdf",
    image: (
      <img
        src={require("../images/Zelena oblast - PDF 1519x438.jpg")}
        style={{ width: "100%" }}
      />
    ),
    // image:  background: linear-gradient(rgba(63, 208, 212, 0.5), rgba(0, 0, 0, 0.5)),
    // url("../images/adobestock_108028733_billionphotos.jpeg") center/cover no-repeat;
  },
  {
    link: (
      <AniLink fade to="/tv" className="btn-white">
        TV emisije
      </AniLink>
    ),
    icon: <FaRecycle />,
    title: "TV emisije",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    button: "read more",
    href: "/tv",
    image: (
      <img
        src={require("../images/Zelena oblast - TV 1519x438.jpg")}
        style={{ width: "100%" }}
      />
    ),
  },
  {
    link: (
      <AniLink fade to="/radio" className="btn-white">
        Radio emisije
      </AniLink>
    ),
    icon: <FaTree />,
    title: "Radio emisije",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    button: "read more",
    href: "/radio",
    image: (
      <img
        src={require("../images/Zelena oblast - RADIO 1519x438.jpg")}
        style={{ width: "100%" }}
      />
    ),
  },
]
