import React, { Component } from 'react'
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import { graphql } from 'gatsby'
import BlogListUdruzenjaSumovlasnika from "../components/BlogUdruzenjaSumovlasnika/BlogListUdruzenjaSumovlasnika"
import UdruzenjaSumovlasnikaAbout from '../components/Home/UdruzenjaSumovlasnikaAbout'
import NavbarBiomasa from '../components/NavbarBiomasa'
const udruzenjaSumovlasnika = ({ data }) => {
 return (
   <Layout>
     <StyledHero img={data.blogBcg.childImageSharp.fluid} />
     <NavbarBiomasa />
     <UdruzenjaSumovlasnikaAbout />
     <div id="blogList">
       <BlogListUdruzenjaSumovlasnika />
     </div>
   </Layout>
 )
}

export const query = graphql`
         query {
           blogBcg: file(relativePath: { eq: "udruzenje_sumovlasnika_cover.jpg" }) {
             childImageSharp {
               fluid(quality: 90, maxWidth: 4160) {
                 ...GatsbyImageSharpFluid_withWebp
               }
             }
           }
         }
       `

export default udruzenjaSumovlasnika
