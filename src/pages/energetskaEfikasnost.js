import React from 'react'
import Layout from "../components/Layout"
import BlogListEnergyEfficiency from '../components/BlogEnergyEfficiency/BlogListEnergyEfficiency'
import EEAbout from '../components/Home/EEAbout'
import StyledHero from '../components/StyledHero'
import ProjectsSection from "../components/Home/ProjectsSection"
import img from "../images/Energetska efikasnost 1920x1080.jpg"
import {graphql} from 'gatsby'

const energetskaEfikasnost = ({data}) => {
    return (
      <Layout>
        <StyledHero img={data.blogBcg.childImageSharp.fluid} />
        <EEAbout />
        <BlogListEnergyEfficiency />
        <ProjectsSection
          title="projekti"
          subtitle="energetska efikasnost"
          text="Pogledajte naše projekte iz oblasti Energetske Efikasnosti."
          subtext=""
          img={img}
          prevPath="energetska efikasnost"
        ></ProjectsSection>
      </Layout>
    )
}

export const query = graphql`
         query {
           blogBcg: file(
             relativePath: { eq: "Zelena oblast - EN EFIKASNOST 1519x438.jpg" }
           ) {
             childImageSharp {
               fluid(quality: 90, maxWidth: 4160) {
                 ...GatsbyImageSharpFluid_withWebp
               }
             }
           }
         }
       `

export default energetskaEfikasnost