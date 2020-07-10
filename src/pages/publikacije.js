import React from 'react'
import Layout from "../components/Layout"
import Pdf from '../components/Publication/Pdf'
import Audio from '../components/Publication/Audio'
import Video from '../components/Publication/Video'
import StyledHero from "../components/StyledHero"
const publikacije = ({data}) => {
 return (
   <Layout>
     <StyledHero img={data.blogBcg.childImageSharp.fluid} />
     <Pdf />
     <Audio />
     <Video />
   </Layout>
 )
}

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "publication.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default publikacije
