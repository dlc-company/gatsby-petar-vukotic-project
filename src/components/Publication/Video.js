import React from "react"
import styles from "../../css/video.module.css"
import { graphql, useStaticQuery } from "gatsby"
import Title from "../../components/Title"

const Video = () => {
  const data = useStaticQuery(graphql`
    query getVideo {
      video: allContentfulVideo {
        edges {
          node {
            title
            videoEmbeddUrl             
          }
        }
      }
    }
  `)
  return (
    <section className={styles.main}>
      <div className={styles.center}>
        <Title title="tv" subtitle="emisije" />
        {data.video.edges.map((article, index) => {
          return (
            <div>
              <p>
                <b>{article.node.title}</b></p>
              <iframe
                className={styles.embeddedVideo}
                src={article.node.videoEmbeddUrl}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <hr></hr>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Video
