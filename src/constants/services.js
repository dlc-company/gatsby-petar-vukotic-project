import React from 'react'
import {  FaTree,  FaRecycle } from 'react-icons/fa'
import { GiSprout } from 'react-icons/gi'
import { TiTree } from 'react-icons/ti'
import AniLink from "gatsby-plugin-transition-link/AniLink"

// import img from '../images/jude-beck-syPEv7Xzn4w-unsplash.jpg'  img: <img src={img}/>,

export default [
  {
    link: (
      <AniLink fade to="/biomasa" className="btn-white">
        biomasa
      </AniLink>
    ),
    icon: <TiTree />,
    title: "biomasa",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    button: "read more",
    href: "/biomasa",
    image: (
      <img
        src={require("../images/Bio masa 1920x1080.jpg")}
        style={{ width: "100%" }}
      />
    ),
    // image:  background: linear-gradient(rgba(63, 208, 212, 0.5), rgba(0, 0, 0, 0.5)),
    // url("../images/adobestock_108028733_billionphotos.jpeg") center/cover no-repeat;
  },
  {
    link: (
      <AniLink fade to="/reciklaza" className="btn-white">
        upravljanje otpadom
      </AniLink>
    ),
    icon: <FaRecycle />,
    title: "reciklaza",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    button: "read more",
    href: "/reciklaza",
    image: (
      <img
        src={require("../images/Reciklaza 1920x1080.jpg")}
        style={{ width: "100%" }}
      />
    ),
  },
  {
    link: (
      <AniLink fade to="/energetskaEfikasnost" className="btn-white">
energetska efikasnost      </AniLink>
    ),
    icon: <FaTree />,
    title: "energetska efikasnost",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    button: "read more",
    href: "/contact",
    image: (
      <img
        src={require("../images/Energetska efikasnost 1920x1080.jpg")}
        style={{ width: "100%" }}
      />
    ),
  },
]