import React from 'react'
import Layout from "../components/Layout"
import Pdf from '../components/Publication/Pdf'
import Audio from '../components/Publication/Audio'
import Video from '../components/Publication/Video'
const publikacije = () => {
 return (
  <Layout>
   <Pdf/>
   <Audio/>
   <Video/>
  </Layout>
 )
}

export default publikacije
