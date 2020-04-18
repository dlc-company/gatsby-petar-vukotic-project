import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"
import './layout.css'
const Layout = ({children}) => { // Probaj sa Micom bez children
    return (
        // <> je skraceno od <React.Fragment>
        <>
         <Navbar/>
         {children}
         <Footer/>   
        </>
    )
}

export default Layout
