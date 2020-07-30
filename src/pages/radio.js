import React from "react"
import Layout from "../components/Layout"
import Audio from "../components/Publication/Audio"
import StyledHero from "../components/StyledHero"

const radio = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid} />
      <Audio />
      <div style={{ height: "70px", width: "100%" }}></div>
    </Layout>
  )
}

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "radio_cover.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default radio
