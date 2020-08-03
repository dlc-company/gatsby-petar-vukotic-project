import React from 'react'
import Layout from "../components/Layout"
import LeafletMap from "../components/Map/LeafletMap"
import BiomasAbout from "../components/NavbarBiomasa"
// import img from "../images/prijepolje_jela.jpg"
import AboutMapCompanies from '../components/Home/AboutMapCompanies'
const map = () => {
 return (
   <Layout>
     {typeof window !== "undefined" && (
       <LeafletMap
         position={[43.853539, 19.855175]}
         zoom={16}
         markerText={"test"}
       />
     )}
     <BiomasAbout />
     
     {/* <div id="xxx">
       <img style={{width:'400px', height:'400px'}} src={img}/>
       <span>Lorem ipsum dolor sit amet.</span>
     </div> */}
     <div >
       <AboutMapCompanies />
     </div>
    
     
     
   </Layout>
 )
}

export default map
