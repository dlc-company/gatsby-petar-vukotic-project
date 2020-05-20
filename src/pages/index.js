import React from "react"
import Layout from "../components/Layout"
import Banner from '../components/Banner'
import Services from '../components/Home/Services'

import PartnerLogos from '../components/Home/PartnerLogos'
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";

import Survey from '../components/Home/Survey'

export default ({data}) => (

    <Layout>
        <StyledHero home="true" img={data.defaultBcg.childImageSharp.fluid} >
            <Banner title="radni naslov" info="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id.">
                
            </Banner>
        </StyledHero>
       
        <Services/>
      
        <PartnerLogos/>

        <Survey/>

    </Layout>
)

export const query = graphql`
         query {
           defaultBcg: file(relativePath: { eq: "Naslovna 1920x1080.jpg" }) {
             childImageSharp {
               fluid(quality: 90, maxWidth: 4160) {
                 ...GatsbyImageSharpFluid_withWebp
               }
             }
           }
         }
       `