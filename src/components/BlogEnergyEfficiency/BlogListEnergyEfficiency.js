import React from 'react'
import BlogCardEnergyEfficiency from './BlogCardEnergyEfficiency'
import Title from '../Title'
import { useStaticQuery, graphql } from 'gatsby'
import styles from '../../css/blog.module.css'
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"
import loadable from "@loadable/component"

const OwlCarousel = loadable(() => import("react-owl-carousel"))

const getPosts = graphql`
  query {
    EEposts: allContentfulEnergetskaEfikasnost(
      sort: { fields: published, order: DESC }
      filter: { highlight: { eq: false } }
    ) {
      edges {
        node {
          published(formatString: "DD.MM.YYYY")
          title
          slug
          id: contentful_id
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

const options = {
  responsiveClass: true,
  loop: true,
  margin: 5,
  items: 5,
  dotsEach: true,
  autoplay: true,
  autoplayTimeout: 5000,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    700: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
}

const BlogListEnergyEfficiency = () => {
 const { EEposts } = useStaticQuery(getPosts);

 return (
   <section className={styles.blog}>
     <Title title="najnovije" subtitle="vesti" />
     <OwlCarousel className="owl-theme" {...options}>
       {EEposts.edges.map(({ node }) => {
         return <BlogCardEnergyEfficiency key={node.id} blog={node} />
       })}
     </OwlCarousel>
   </section>
 )
}

export default BlogListEnergyEfficiency
