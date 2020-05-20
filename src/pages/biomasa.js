import React, {Component} from 'react'
import Layout from "../components/Layout"
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import BlogList from '../components/Blog/BlogList'
import BiomasAbout from '../components/Home/BiomasaAbout'
import NavbarBiomasa from '../components/NavbarBiomasa'
const biomasa = ({ data }) => {
    return (
        <Layout>
            <StyledHero img={data.blogBcg.childImageSharp.fluid} />
            <NavbarBiomasa/>
            <BiomasAbout/>
            <BlogList />
        </Layout>
    )
}

export const query = graphql`
         query {
           blogBcg: file(relativePath: { eq: "Bio masa 1920x1080.jpg" }) {
             childImageSharp {
               fluid(quality: 90, maxWidth: 4160) {
                 ...GatsbyImageSharpFluid_withWebp
               }
             }
           }
         }
       `

export default biomasa
