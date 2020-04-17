import React from 'react'
import Navbar from "./Navbar"
import Footer from "./Footer"

const Layout = ({children}) => {
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
