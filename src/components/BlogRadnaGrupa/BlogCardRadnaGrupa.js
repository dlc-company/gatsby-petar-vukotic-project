import React from 'react'
import styles from '../../css/blog-card.module.css'
import Image from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const BlogCardRadnaGrupa = ({ blog }) => {
 const { slug, title, image, published } = blog
 return (
  <article className={styles.blog}>
   <div className={styles.imgContainer}>
    <Image fluid={image.fluid} className={styles.img} alt="single post" />
    <AniLink fade className={styles.link} to={`/radnaGrupaZaBiomasu/${slug}`}>
     procitajte vise
    </AniLink>
    <h6 className={styles.date}>{published}</h6>
   </div>
   <div className={styles.footer}>
    <h4>{title}</h4>
   </div>
  </article>
 )
}

export default BlogCardRadnaGrupa