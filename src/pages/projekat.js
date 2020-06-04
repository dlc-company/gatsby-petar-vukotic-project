import React from 'react'
import Layout from "../components/Layout"
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import BlogListProject from '../components/BlogProject/BlogListProject'

const projekat = ({data}) => {
 return (
  <Layout>
   <StyledHero img={data.projectbcg.childImageSharp.fluid} />
   <BlogListProject />
  </Layout>
 )
}

export const query = graphql`
query{
  projectbcg:file(relativePath:{eq:"octavian-dan-b21Ty33CqVs-unsplash.jpg"}){
    childImageSharp{
      fluid(quality:90, maxWidth:4160){
        src
      }
    }
  }
}
`

export default projekat
