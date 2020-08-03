import React from 'react'
import BlogCardRecycle from './BlogCardRecycle'
import Title from '../Title'
import { useStaticQuery, graphql } from 'gatsby'
import styles from '../../css/blog.module.css'

const getRecyclePosts = graphql`
  query {
    recycleposts: allContentfulReciklaza(
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

const BlogListRecycle = () => {
    const {recycleposts} = useStaticQuery(getRecyclePosts)
    
    return (
        <section className={styles.blog}>
            
            <div className={styles.center}>
                {recycleposts.edges.map(({node})=>{
                    return <BlogCardRecycle key={node.id} blog={node} />
                })}
            </div>
        </section>
    )
}

export default BlogListRecycle
