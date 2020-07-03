import React from 'react'
import Layout from "../components/Layout"
import LeafletMap from "../components/Map/LeafletMap"

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
  </Layout>
 )
}

export default map
