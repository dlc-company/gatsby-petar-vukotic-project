import React from 'react'
import BlogCardProject from './BlogCardProject'
import Title from '../Title'
import { useStaticQuery, graphql } from 'gatsby'
import styles from '../../css/blog.module.css'

const getProjectItemPosts = graphql`
  query {
    projectitemposts: allContentfulProjectItem(
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
const BlogListProject = () => {
 const { projectitemposts } = useStaticQuery(getProjectItemPosts)

 return (
  <section className={styles.blog}>

   <div className={styles.center}>


    {projectitemposts.edges.map(({node})=>{
     return <BlogCardProject key={node.id} blog={node} />
    })}


   </div>

  </section>
 )
}

export default BlogListProject
