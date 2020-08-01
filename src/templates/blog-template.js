import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styles from '../css/single-blog.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { FaChevronDown } from 'react-icons/fa'
import { FaChevronUp } from 'react-icons/fa'
import { FaClone } from 'react-icons/fa'
import { FaFilePdf } from 'react-icons/fa'
import { FaDownload } from 'react-icons/fa'
import { FaFile } from 'react-icons/fa'


const Blog = ({data}) => {
const {title,published,text:{json}} = data.post
const [showDocument, setShowDocument] = React.useState('')
const showHideDocument = (id) => {
    if (showDocument == id) {
        id = '';
    }
    setShowDocument(showDocument => id)
}
const options = {
    renderNode:{
        "embedded-asset-block":(node)=>{
            //Image
            if (
              node.data.target.fields.file["en-US"].contentType ===
                "image/jpeg" ||
              node.data.target.fields.file["en-US"].contentType === "image/png"
            ) {
              return (
                <div className={styles.image}>
                  <img
                    width="490"
                    src={node.data.target.fields.file["en-US"].url}
                  />
                </div>
              )
            }
            //PDF
            else if (
              node.data.target.fields.file["en-US"].contentType ===
              "application/pdf"
            ) {
              const documentUrl = node.data.target.fields.file["en-US"].url
              return (
                <div className={styles.document}>
                  <div className={styles.documentControls}>
                    <FaFilePdf size={35} className={styles.pdfIcon} />
                    <p className={styles.documentName}>
                      {node.data.target.fields.title["en-US"]}
                    </p>
                    <button
                      type="button"
                      className={styles.roundedButton}
                      onClick={() => showHideDocument(documentUrl)}
                    >
                      {showDocument == documentUrl ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </button>
                    <button type="button" className={styles.roundedButton}>
                      <a
                        className={styles.documentButton}
                        href={documentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaClone />
                      </a>
                    </button>
                  </div>
                  <div
                    className={
                      showDocument == documentUrl
                        ? `${styles.documentWindow}`
                        : `${styles.documentWindowHidden}`
                    }
                  >
                    <object
                      className={styles.objectPdf}
                      data={documentUrl}
                      type="application/pdf"
                    ></object>
                  </div>
                </div>
              )
            } else if (
                     node.data.target.fields.file["en-US"].contentType ===
                       "application/CDFV2" ||node.data.target.fields.file["en-US"].contentType ===
                       "application/zip"                     
                   ) {
                     const documentUrl =
                       node.data.target.fields.file["en-US"].url
                     return (
                       <div className={styles.documentWord}>
                         <div className={styles.documentControls}>
                           <FaFile size={35} className={styles.wordIcon} />
                           <p className={styles.documentName}>
                             {node.data.target.fields.title["en-US"]}
                           </p>
                           <button
                             type="button"
                             className={styles.roundedButton}
                           >
                             <a
                               className={styles.documentButton}
                               href={documentUrl}
                             >
                               <FaDownload />
                             </a>
                           </button>
                         </div>
                       </div>
                     )
                   }                                
        },
        // EMBEDDED VIDEO
        "hyperlink": (node) => {  
            if (node.data.uri.includes('https://www.youtube.com/embed/')){
                    return(
                        <div className={styles.questionSection}>
                            <p>{node.content[0].value}</p>
                            <iframe className ={styles.video} src={node.data.uri} frameBorder="0" allowFullScreen></iframe>
                        </div> )
            }
        }                   
        
    }
}
    return (
      <Layout>
        <section className={styles.blog}>
          <div className={styles.center}>
            <h1 className={styles.title}>{title}</h1>
            <hr></hr>
            <h5 className={styles.published}>objavljeno : {published}</h5>
            <hr></hr>
            <article className={styles.post}>
              {documentToReactComponents(json, options)}
            </article>
            <div className={styles.allBlogsButton}>
              <AniLink fade to="/biomasa" className="btn-primary">
                svi clanci
              </AniLink>
            </div>
          </div>
        </section>
      </Layout>
    )
}



export const query = graphql`
         query getPost($slug: String!) {
           post: contentfulBiomasa(slug: { eq: $slug }) {
             title
             published(formatString: "DD.MM.YYYY")
             text {
               json
             }
           }
         }
       `


export default Blog
