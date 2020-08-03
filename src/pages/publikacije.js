import React from 'react'
import Layout from "../components/Layout"
import Pdf from '../components/Publication/Pdf'
import Audio from '../components/Publication/Audio'
import Video from '../components/Publication/Video'
import StyledHero from "../components/StyledHero"
import BiomasAbout from "../components/NavbarBiomasa"
import Services from "../components/Home/Services"
import services from "../constants/publication-services"

const publikacije = ({data}) => {
 return (
   <Layout>
     <StyledHero img={data.blogBcg.childImageSharp.fluid} />
     <BiomasAbout />
     <Services services = {services}/>   
   </Layout>
 )
}

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "Zelena oblast - publikacije 1519x438.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default publikacije
