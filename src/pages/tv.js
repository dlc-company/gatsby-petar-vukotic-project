import React from "react"
import Layout from "../components/Layout"
import Video from "../components/Publication/Video"
import StyledHero from "../components/StyledHero"

const tv = ({ data }) => {
  return (
    <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid} />
      <Video />
      <div style={{ height: "70px", width: "100%" }}></div>
    </Layout>
  )
}

export const query = graphql`
  query {
    blogBcg: file(relativePath: { eq: "tv_cover.png" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default tv
