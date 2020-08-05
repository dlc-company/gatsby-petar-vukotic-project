import React from 'react'
import { FaTree, FaRecycle, FaChargingStation } from "react-icons/fa"
import AniLink from "gatsby-plugin-transition-link/AniLink"

// import img from '../images/jude-beck-syPEv7Xzn4w-unsplash.jpg'  img: <img src={img}/>,

export default [
  {
    icon: <FaTree />,
    title: "biomasa",
    text:
      "Biomasa je biorazgradivi deo proizvoda, otpada i ostataka biološkog porekla iz polјoprivrede (uklјučujući bilјne i životinjske materije), šumarstva i povezanih industrija, kao i biorazgradivi deo industrijskog i komunalnog otpada",
    button: "read more",
    href: "/biomasa",
    projectsHref: "biomasa",
    image: (
      <img
        src={require("../images/services_biomasa.jpg")}
        style={{ width: "100%" }}
      />
    ),
    primaryActionTitle: "pročitaj više",
    secondaryActionTitle: "projekti",
  },
  {
    icon: <FaRecycle />,
    title: "Upravljanje otpadom",
    text:
      "Upravljanje otpadom je sakupljanje, transport, obrada ili odlaganje, upravljanje i praćenje otpadnih materijala.",
    button: "read more",
    href: "/reciklaza",
    projectsHref: "upravljanje otpadom",
    image: (
      <img
        src={require("../images/services_recycle.jpg")}
        style={{ width: "100%" }}
      />
    ),
    primaryActionTitle: "pročitaj više",
    secondaryActionTitle: "projekti",
  },
  {   
    icon: <FaChargingStation />,
    title: "energetska efikasnost",
    text:
      "Energetska efikasnost znači iskorišćenje manje količine energije za obavlјanje nekog posla ili određene aktivnosti.",
    button: "read more",
    href: "/energetskaEfikasnost",
    projectsHref: "energetska efikasnost",
    image: (
      <img
        src={require("../images/services_ee.jpg")}
        style={{ width: "100%" }}
      />
    ),
    primaryActionTitle: "pročitaj više",
    secondaryActionTitle: "projekti",
  },
]