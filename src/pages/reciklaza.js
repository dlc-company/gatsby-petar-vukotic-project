import React from 'react'
import Layout from "../components/Layout"
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'
import BloglistRecycle from '../components/BlogRecycle/BlogListRecycle'
import ReciklazaAbout from '../components/Home/ReciklazaAbout'
const reciklaza = ({data}) => {
    return (
        <Layout>
             <StyledHero img={data.blogBcg.childImageSharp.fluid} />
             <ReciklazaAbout />
             <BloglistRecycle />
        </Layout>
    )
}

export const query = graphql`
         query {
           blogBcg: file(relativePath: { eq: "Zelena oblast - RECIKLAZA 1519x438.jpg" }) {
             childImageSharp {
               fluid(quality: 90, maxWidth: 4160) {
                 ...GatsbyImageSharpFluid_withWebp
               }
             }
           }
         }
       `

export default reciklaza
