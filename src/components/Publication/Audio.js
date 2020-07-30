import React from "react"
import styles from "../../css/audio.module.css"
import { graphql, useStaticQuery } from "gatsby"
import Title from "../../components/Title"

const Audio = () => {
  const data = useStaticQuery(graphql`
    query getAudio {
      audio: allContentfulAudio {
        edges {
          node {
            title
            audio {
              file {
                url
              }
            }
          }
        }
      }
    }
  `) 
  return (
    <section className={styles.main}>
      <div className={styles.center}>
        <Title subtitle="Radio emisije" />        
        {data.audio.edges.map((article, index) => {
          return (
            <div>
              <p>{article.node.title}</p>
              <audio controls="controls">
                <source src={article.node.audio.file.url}></source>
              </audio>
            </div>
          )
        })}       
      </div>
    </section>
  )
}

export default Audio
