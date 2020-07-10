import React from "react"
import styles from "../../css/pdf.module.css"
import { FaFilePdf } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"

const Pdf = () => {
  const data = useStaticQuery(graphql`
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
  `)
  return (
    <section className={styles.main}>
      <div className={styles.center}>
        <h4 className={styles.title}>PDF Dokumenta</h4>
        {data.pdf.edges.map((article, index) => {
          return (
            <div className={styles.document}>
              <div className={styles.documentControls}>
                <FaFilePdf size={35} className={styles.pdfIcon} />
                <p className={styles.documentName}>{article.node.title}</p>
                <button type="button" className={styles.openButton}>
                  <a
                    className={styles.documentButton}
                    href={article.node.pdf.file.url}
                    target="_blank"
                  >
                    Otvori
                  </a>
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Pdf
