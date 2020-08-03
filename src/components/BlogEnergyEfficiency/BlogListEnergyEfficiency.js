import React from 'react'
import BlogCardEnergyEfficiency from './BlogCardEnergyEfficiency'
import Title from '../Title'
import { useStaticQuery, graphql } from 'gatsby'
import styles from '../../css/blog.module.css'

const getPosts = graphql`
  query {
    EEposts: allContentfulEnergetskaEfikasnost(
      sort: { fields: published, order: DESC }
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

const BlogListEnergyEfficiency = () => {
 const { EEposts } = useStaticQuery(getPosts);

 return (
  <section className={styles.blog}>

   <div className={styles.center}>
    {EEposts.edges.map(({ node }) => {
     return <BlogCardEnergyEfficiency key={node.id} blog={node} />
    })}
   </div>
  </section>
 )
}

export default BlogListEnergyEfficiency
