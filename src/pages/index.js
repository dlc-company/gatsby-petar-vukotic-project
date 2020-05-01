import React from "react"
import Layout from "../components/Layout"
import Banner from '../components/Banner'
import Services from '../components/Home/Services'

import PartnerLogos from '../components/Home/PartnerLogos'
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";

export default ({data}) => (

    <Layout>
        <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid} >
            <Banner title="radni naslov" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id.">
                <AniLink fade to="/" className="btn-white">link text</AniLink>
            </Banner>
        </StyledHero>
       
        <Services/>


        <PartnerLogos/>

    </Layout>
)

export const query = graphql`
query{
    defaultBcg:file(relativePath:{eq:"octavian-dan-b21Ty33CqVs-unsplash.jpg"}){
      childImageSharp{
        fluid(quality:90, maxWidth:4160){
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`