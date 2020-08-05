import React from "react"
import { FaFilePdf, FaTv, FaMicrophoneAlt } from "react-icons/fa"
import { TiTree } from "react-icons/ti"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export default [
  {
    icon: <FaFilePdf />,
    title: "Dokumenta",
    text: "Pogledajte dokmenta iz oblasti Biomase.",
    button: "read more",
    href: "/pdf",
    image: (
      <img
        src={require("../images/publication_docs.jpg")}
        style={{ width: "100%" }}
      />
    ),
    primaryActionTitle: "otvori",
    secondaryActionTitle: "",
  },
  {
    icon: <FaTv />,
    title: "TV emisije",
    text: "Pogledajte TV emisije iz oblasti Biomase.",
    button: "read more",
    href: "/tv",
    image: (
      <img
        src={require("../images/publication_tv.jpg")}
        style={{ width: "100%" }}
      />
    ),
    primaryActionTitle: "otvori",
    secondaryActionTitle: "",
  },
  {
    icon: <FaMicrophoneAlt />,
    title: "Radio emisije",
    text: "Pošlušajte radio emisije iz oblasti Biomase.",
    button: "read more",
    href: "/radio",
    image: (
      <img
        src={require("../images/publication_radio.jpg")}
        style={{ width: "100%" }}
      />
    ),
    primaryActionTitle: "otvori",
    secondaryActionTitle: "",
  },
]
