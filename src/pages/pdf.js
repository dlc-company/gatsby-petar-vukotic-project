import React from "react"
import Layout from "../components/Layout"
import Pdf from "../components/Publication/Pdf"
import StyledHero from "../components/StyledHero"

const pdf = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid} />      
      <Pdf />  
      <div style={{height:"70px",width:"100%"}}></div>   
    </Layout>
  )
}

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "cover_pdf.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default pdf
