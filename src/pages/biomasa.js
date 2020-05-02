import React, {Component} from 'react'
import Layout from "../components/Layout"
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import BlogList from '../components/Blog/BlogList'
const biomasa = ({ data }) => {
    return (
        <Layout>
            <StyledHero img={data.blogBcg.childImageSharp.fluid} />
            <BlogList />
        </Layout>
    )
}

export const query = graphql`
query{
    blogBcg:file(relativePath:{eq:"biomassBcg.jpg"}){
      childImageSharp{
        fluid(quality:90, maxWidth:4160){
            ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default biomasa
