import React from "react"
import BlogCardRecycleThemes from "./BlogCardRecycleThemes"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../css/blog.module.css"
import Title from "../Title"

const getHighlightPosts = graphql`
 {
  posts: allContentfulReciklaza(
   sort: {fields: published, order: DESC}, 
    filter: {highlight: {eq: true}}
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



const BlogListRecycleThemes = () => {
 const { posts } = useStaticQuery(getHighlightPosts)

 return (
  <section className={styles.blogSecondaryBackground}>
   <Title title="" subtitle="teme" />
   <div className={styles.center}>
    {posts.edges.map(({ node }) => {
     return <BlogCardRecycleThemes key={node.id} blog={node} />
    })}
   </div>
  </section>
 )
}

export default BlogListRecycleThemes