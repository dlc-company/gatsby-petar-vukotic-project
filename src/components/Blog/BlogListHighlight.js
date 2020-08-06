import React from "react"
import BlogCard from "./BlogCard"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../css/blog.module.css"
import Title from "../Title"

const getHighlightPosts = graphql`
  query {
    posts: allContentfulBiomasa(
      sort: { fields: published, order: DESC }
      filter: { highlight: { eq: true } }
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

const BlogListHighlight = () => {
  const { posts } = useStaticQuery(getHighlightPosts)

  return (
    <section className={styles.blogSecondaryBackground}>
     <Title title="istaknuti" subtitle="članci"/>
      <div className={styles.center}>
        {posts.edges.map(({ node }) => {
          return <BlogCard key={node.id} blog={node} />
        })}
      </div>
    </section>
  )
}

export default BlogListHighlight
