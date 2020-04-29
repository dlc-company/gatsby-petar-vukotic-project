import React from 'react'
import {  FaTree,  FaRecycle } from 'react-icons/fa'
import { GiSprout } from 'react-icons/gi'
import { TiTree } from 'react-icons/ti'
 
// import img from '../images/jude-beck-syPEv7Xzn4w-unsplash.jpg'  img: <img src={img}/>,

export default [
    {
        icon: <TiTree/>,
        title: "biomasa",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        button: 'read more',
        href: "/biomasa",
        image: <img src={require("../images/adobestock_108028733_billionphotos (2).jpeg")}  style={{width:"100%"}}/>
        // image:  background: linear-gradient(rgba(63, 208, 212, 0.5), rgba(0, 0, 0, 0.5)),
        // url("../images/adobestock_108028733_billionphotos.jpeg") center/cover no-repeat;
    },
    {
        icon: <FaRecycle/>,
        title: "reciklaza",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        button: 'read more',
        href: "/reciklaza",
        image: <img src={require("../images/Image20200429205350.jpg")}  style={{width:"100%"}}/>
    },
    {
        icon: <FaTree/>,
        title: "energetska efikasnost",
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        button: 'read more',
        href: "/contact",
        image: <img src={require("../images/gustavo-quepon-pF_2lrjWiJE-unsplash (1).jpg")}  style={{width:"100%"}}/>
    },

]