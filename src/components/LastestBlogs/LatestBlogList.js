import React from "react"
import LatestBlogCard from "./LatestBlogCard"
import Title from "../Title"
import { useStaticQuery, graphql } from "gatsby"
import styles from "../../css/blog.module.css"

const getPosts = graphql`
  query {
    biomasa: allContentfulBiomasa(
      sort: { fields: published, order: DESC }
      limit: 1
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
    energetskaEfikasnost: allContentfulEnergetskaEfikasnost(
      sort: { fields: published, order: DESC }
      limit: 1
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
    upravljanjeOtpadom: allContentfulReciklaza(
      sort: { fields: published, order: DESC }
      limit: 1
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

const BlogList = () => {
  const posts  = useStaticQuery(getPosts)
  console.log(posts)
  return (
    <section className={styles.blogSecondaryBackground}>
      <Title title="Poslednji" subtitle="članci" />
      <div className={styles.center}>
        <LatestBlogCard
          key={posts.biomasa.edges[0].node.id}
          blog={posts.biomasa.edges[0].node}
          page="biomasa"
          tag="biomasa"
        />
        <LatestBlogCard
          key={posts.upravljanjeOtpadom.edges[0].node.id}
          blog={posts.upravljanjeOtpadom.edges[0].node}
          page="reciklaza"
          tag="upravljanje otpadom"
        />
        <LatestBlogCard
          key={posts.energetskaEfikasnost.edges[0].node.id}
          blog={posts.energetskaEfikasnost.edges[0].node}
          page="energetskaEfikasnost"
          tag="energetska efikasnost"
        />
      </div>
    </section>
  )
}

export default BlogList
