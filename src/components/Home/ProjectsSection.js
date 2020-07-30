import React from 'react'
import Title from '../Title'
import styles from '../../css/about.module.css'
import styled from 'styled-components'
import AniLink from "gatsby-plugin-transition-link/AniLink"

const ProjectsSection = (props) => {
  console.log(props.prevPath);
    return (
      <section className={styles.about}>
        <Title title={props.title} subtitle={props.subtitle} />
        <div className={styles.aboutCenter}>
          <article className={styles.aboutImg}>
            <div className={styles.imgContainer}>
              <img src={props.img} alt="about organization" />
            </div>
          </article>
          <article className={styles.aboutInfo}>
            <h4>{props.title}</h4>
            <p>{props.text}</p>
            <p>{props.subtext}</p>
            <AniLink
              fade
              to="/projekat"
              state={{ prevPath: props.prevPath }}
              className="btn-primary"
            >
              pogledaj projekte
            </AniLink>
          </article>
        </div>
      </section>
    )
}

export default ProjectsSection
