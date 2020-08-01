import React, { Component } from 'react'
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from 'gatsby'
import BlogListRadnaGrupa from "../components/BlogRadnaGrupa/BlogListRadnaGrupa"
import RadnaGrupaAbout from '../components/Home/RadnaGrupaAbout'
import NavbarBiomasa from '../components/NavbarBiomasa'
const radnaGrupaZaBiomasu = ({data}) => {
 return (
  <Layout>
   <StyledHero img={data.blogBcg.childImageSharp.fluid} />
   <NavbarBiomasa/>
   <RadnaGrupaAbout/>
   <BlogListRadnaGrupa/>
  </Layout>
 )
}

export const query = graphql`
         query {
           blogBcg: file(relativePath: { eq: 
            "placeholder_img.jpg" }) {
             childImageSharp {
               fluid(quality: 90, maxWidth: 4160) {
                 ...GatsbyImageSharpFluid_withWebp
               }
             }
           }
         }
       `

export default radnaGrupaZaBiomasu
