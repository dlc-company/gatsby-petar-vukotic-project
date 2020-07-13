import React from 'react'
import Layout from "../components/Layout"
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import BlogListProject from '../components/BlogProject/BlogListProject'
import Menu from '../components/Home/Menu'
import 'bootstrap/dist/css/bootstrap.min.css'

const projekat = ({data}) => {
 return (
  <Layout>
   <StyledHero img={data.projectbcg.childImageSharp.fluid} />
   <Menu items={data.menu} />
   {/* <BlogListProject /> */}
  </Layout>
 )
}

export const query = graphql`
         query {
           projectbcg: file(
             relativePath: { eq: "octavian-dan-b21Ty33CqVs-unsplash.jpg" }
           ) {
             childImageSharp {
               fluid(quality: 90, maxWidth: 4160) {
                 src
               }
             }
           }
           menu: allContentfulProjectItem {
             edges {
               node {
                 slug
                 id
                 title
                 category
                 published(formatString: "DD.MM.YYYY")
                 image {
                   fluid {
                     ...GatsbyContentfulFluid
                   }
                 }
               }
             }
           }
         }
       `

export default projekat
