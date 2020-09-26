import React from 'react'
import styles from '../../css/blog-card.module.css'
import Image from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { Link } from "gatsby"


const BlogCardEnergyEfficiency = ({ blog }) => {
 const { slug, title, image, published } = blog
 return (
   <article className={styles.news}>
     <div className={styles.newsImageContainer}>
       <Image
         fluid={image.fluid}
         className={styles.newsImage}
         alt="single post"
       />
       <Link className={styles.newsLink} to={`/energetskaEfikasnost/${slug}`}>
         procitajte vise
       </Link>
       {/* <h6 className={styles.date}>{published}</h6> */}
     </div>
     <div className={styles.newsTitle}>
       <p>{title}</p>
     </div>
   </article>
 )
}

export default BlogCardEnergyEfficiency
