import React from "react"
import Layout from "../components/Layout"
import Banner from '../components/Banner'
import Services from '../components/Home/Services'

import PartnerLogos from '../components/Home/PartnerLogos'
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Survey from '../components/Home/Survey'

// import Map from '../components/Map'

export default ({data}) => (
    <Layout>
        <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid} >
            <Banner title="energetski održivi region" info="">
                
            </Banner>
        </StyledHero>
       
        <Services/>
      
        <Survey />
    
        <PartnerLogos/>
  
         

    </Layout>
)

export const query = graphql`
         query {
           defaultBcg: file(relativePath: { eq: "home.jpg" }) {
             childImageSharp {
               fluid(quality: 90, maxWidth: 4160) {
                 ...GatsbyImageSharpFluid_withWebp
               }
             }
           }
         }
       `