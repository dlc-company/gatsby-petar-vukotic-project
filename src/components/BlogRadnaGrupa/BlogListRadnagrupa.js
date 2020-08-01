import React from 'react'
import BlogCardRadnaGrupa from './BlogCardRadnaGrupa'
import Title from '../Title'
import { useStaticQuery, graphql } from 'gatsby'
import styles from '../../css/blog.module.css'

const getProjectItemPosts = graphql`
query{
  projectitemposts:allContentfulRadnaGrupaPost(sort:
    {fields:published, order:DESC}){
    edges{
      node{
        published(formatString:"MMMM Do, YYYY")
        title
        slug
        id:contentful_id
        image{
          fluid{
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`
const BlogListRadnaGrupa = () => {
 const { projectitemposts } = useStaticQuery(getProjectItemPosts)
return(
 <section className={styles.blog}>
  <div className={styles.center}>
   {projectitemposts.edges.map(({ node }) => {
    return <BlogCardRadnaGrupa key={node.id} blog={node} />
   })}
  </div>
 </section>
)
}

export default BlogListRadnaGrupa