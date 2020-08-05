import React from "react"
import Layout from "../components/Layout"
import Banner from '../components/Banner'
import Services from '../components/Home/Services'
import PartnerLogos from '../components/Home/PartnerLogos'
import StyledHero from '../components/StyledHero'
import {graphql} from 'gatsby'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import services from "../constants/services"
import styles from "../css/index.module.css"
import Survey from '../components/Home/Survey'
import LatestBlogList from "../components/LastestBlogs/LatestBlogList"

// import Map from '../components/Map'
var projectsLink = (
  <AniLink className={styles.link} fade to="/projekat">
    pogledajte projekte
  </AniLink>
)
export default ({ data }) => (
  <Layout>
    <StyledHero
      home="true"
      img={data.defaultBcg.childImageSharp.fluid}
      children={projectsLink}
    ></StyledHero>    
    <Services services={services} title="" subtitle="oblasti"/>
    {/* <Survey /> */}
    <LatestBlogList></LatestBlogList>
    <PartnerLogos />
  </Layout>
)

export const query = graphql`
         query {
           defaultBcg: file(relativePath: { eq: "home2.jpg" }) {
             childImageSharp {
               fluid(quality: 90, maxWidth: 4160) {
                 ...GatsbyImageSharpFluid_withWebp
               }
             }
           }
         }
       `