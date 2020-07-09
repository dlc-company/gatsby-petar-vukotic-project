import React from 'react'
import styles from '../../css/partnerlogos.module.css'
import Title from '../../components/Title'
import { graphql } from 'gatsby'

const Pdf = () => {
 return (
  <section className={styles.partners}>
   <Title subtitle='PDF'/>
   <div className={styles.center}>
    <div className={styles.partnerCards}>

    </div>
   </div>
  </section>
 )
}

export const query = graphql`
query getPdf {
  pdf: allContentfulPdf {
    edges {
      node {
        title
        pdf {
          file {
            url
          }
        }
      }
    }
  }
}
`

export default Pdf