import React from 'react'
import Layout from "../components/Layout"
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'
import BloglistRecycle from '../components/BlogRecycle/BlogListRecycle'
import ReciklazaAbout from '../components/Home/ReciklazaAbout'
import ProjectsSection from "../components/Home/ProjectsSection"
import img from "../images/servies_recycle.jpg"

const reciklaza = ({data}) => {
    return (
      <Layout>
        <StyledHero img={data.blogBcg.childImageSharp.fluid} />
        <ReciklazaAbout />
        <BloglistRecycle />
        <ProjectsSection
          title="projekti"
          subtitle="upravljanje otpadom"
          text="Pogledajte naše projekte iz oblasti Upravljanja Otpadom."
          subtext=""
          img={img}
          prevPath="upravljanje otpadom"
        ></ProjectsSection>
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
