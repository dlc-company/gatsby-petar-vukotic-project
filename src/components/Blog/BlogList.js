import React from 'react'
import BlogCard from './BlogCard'
import Title from '../Title'
import { useStaticQuery, graphql } from 'gatsby'
import styles from '../../css/blog.module.css'
import OwlCarousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"

const getPosts = graphql`
  query {
    posts: allContentfulBiomasa(
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
    loop:true,
          margin:5,
          items:5,           
          dotsEach:true,
          autoplay:true,
          autoplayTimeout:5000,
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

        }
    },
};

const BlogList = () => {
    const {posts} = useStaticQuery(getPosts);
    
    return (
      <section className={styles.blog}>
        <Title title="najnovije" subtitle="vesti" />
        <OwlCarousel className="owl-theme" {...options}>
          {posts.edges.map(({ node }) => {            
            return <BlogCard  key={node.id} blog={node} />
          })}
        </OwlCarousel>
      </section>
    )
}

export default BlogList
