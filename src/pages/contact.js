import React from 'react'
import Layout from "../components/Layout"
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'
import Contact from '../components/Contact/Contact'
const contact = ({data}) => {
    return (
        <Layout>
            <StyledHero img={data.contactBcg.childImageSharp.fluid} />
            <Contact />
        </Layout>
    )
}

export const query = graphql`
query{
    contactBcg:file(relativePath:{eq:"Zelena oblast - KONTAKT 1519x438.jpg"}){
      childImageSharp{
        fluid(quality:90, maxWidth:4160){
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default contact
