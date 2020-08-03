import React, {Component} from 'react'
import Layout from "../components/Layout"
import StyledHero from '../components/StyledHero'
import { graphql } from 'gatsby'
import BlogList from '../components/Blog/BlogList'
import BiomasAbout from '../components/Home/BiomasaAbout'
import ProjectsSection from "../components/Home/ProjectsSection"
import NavbarBiomasa from '../components/NavbarBiomasa'
import img from "../images/services_biomasa.jpg"

const biomasa = ({ data }) => {
    return (
      <Layout>
        <StyledHero img={data.blogBcg.childImageSharp.fluid} />
        <NavbarBiomasa />
        <BiomasAbout />
        <div id="blogList">
          <BlogList />
        </div>
        <ProjectsSection
          title="projekti"
          subtitle="biomasa"
          text="Pogledajte naše projekte iz oblasti Biomase."
          subtext=""
          img={img}
          prevPath="biomasa"
        ></ProjectsSection>
      </Layout>
    )
}

export const query = graphql`
         query {
           blogBcg: file(relativePath: { eq: "Zelena oblast - OBNOVLJIVI IE 1519x438.jpg" }) {
             childImageSharp {
               fluid(quality: 90, maxWidth: 4160) {
                 ...GatsbyImageSharpFluid_withWebp
               }
             }
           }
         }
       `

export default biomasa
