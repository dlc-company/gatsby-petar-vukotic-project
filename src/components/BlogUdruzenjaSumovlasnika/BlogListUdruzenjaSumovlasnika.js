import React from 'react'
import BlogCardUdruzenjaSumovlasnika from './BlogCardUdruzenjaSumovlasnika'
import Title from '../Title'
import { useStaticQuery, graphql } from 'gatsby'
import styles from '../../css/blog.module.css'

const getUdruzenjaSumovlasnikaPosts = graphql`
  query {
    udruzenjasumovlasnikaaposts: allContentfulUdruzenjeSumovlasnikaPost(
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

const BlogListUdruzenjaSumovlasnika = () => {
 const { udruzenjasumovlasnikaaposts } = useStaticQuery(getUdruzenjaSumovlasnikaPosts)
 return (
  <section className={styles.blog}>
   <div className={styles.center}>
    {udruzenjasumovlasnikaaposts.edges.map(({ node }) => {
     return <BlogCardUdruzenjaSumovlasnika key={node.id} blog={node} />
    })}
   </div>
  </section>
 )
}

export default BlogListUdruzenjaSumovlasnika