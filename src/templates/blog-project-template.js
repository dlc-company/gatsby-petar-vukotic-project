import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styles from '../css/single-blog.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { FaChevronDown } from "react-icons/fa"
import { FaChevronUp } from "react-icons/fa"
import { FaClone } from "react-icons/fa"
import { FaFilePdf } from "react-icons/fa"
import { FaDownload } from "react-icons/fa"
import { FaFile } from "react-icons/fa"
// import ReadMoreReact from 'read-more-react';
// import ReadMore from '@bisvarup/react-read-more'

const BlogProject = ({data}) => {
 const {
   title,
   published,
   text: { json },   
 } = data.projectitempost
 const [showDocument, setShowDocument] = React.useState("")
 const showHideDocument = id => {
   if (showDocument == id) {
     id = ""
   }
   setShowDocument(showDocument => id)
 }

 const [isOpen, setReadMore] = React.useState(true) // useState(React Hook) prima dva params: 1. true/false (false je default) 2. funkciju koja upravlja sa toggle
 const toggleReadMore = () => {
   setReadMore(isOpen => !isOpen) // ako je toggle bio false (zatvoren) onda ce funkcija setNav promeniti vrednost u true(otvoren) preko !isOpen sto vraca true
 }
 ///MAIN OPTIONS
 const options = {
   renderNode: {
     "embedded-asset-block": node => {
       //Image
       if (node.data.target.fields.file["en-US"].contentType === "image/jpeg") {
         return (
           <div className={styles.image}>
             <img width="490" src={node.data.target.fields.file["en-US"].url} />
           </div>
         )
       }
       //PDF
       else if (
         node.data.target.fields.file["en-US"].contentType === "application/pdf"
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
         "application/CDFV2"
       ) {
         const documentUrl = node.data.target.fields.file["en-US"].url
         return (
           <div className={styles.document}>
             <div className={styles.documentControls}>
               <FaFile size={35} className={styles.wordIcon} />
               <p className={styles.documentName}>
                 {node.data.target.fields.title["en-US"]}
               </p>
               <button type="button" className={styles.roundedButton}>
                 <a className={styles.documentButton} href={documentUrl}>
                   <FaDownload />
                 </a>
               </button>
             </div>
           </div>
         )
       }
     },
     hyperlink: node => {
       if (node.data.uri.includes("https://www.youtube.com/embed/")) {
         return (
           <div className={styles.questionSection}>
             <p>{node.content[0].value}</p>
             <iframe
               className={styles.video}
               src={node.data.uri}
               frameBorder="0"
               allowFullScreen
             ></iframe>
           </div>
         )
       }
     },
     "embedded-entry-block": node => {      
       const { title, image, text } = node.data.target.fields         
       var slug = node.data.target.sys.contentType.sys.contentful_id+ '/'+ node.data.target.fields.slug["en-US"];
       
       return (
         <div className={styles.embeddedBlog}>
           <div className={styles.embeddedBlogControls}>
             <img
               className={styles.pdfIcon}
               width="25"
               src={image["en-US"].fields.file["en-US"].url}
               alt=""
             />
             <p className={styles.embeddedBlogName}>{title["en-US"]}</p>             
             <AniLink target="_blank" fade to={slug} className="btn-primary small">
               procitaj vise
              </AniLink>           
           </div>
         </div>   
       )
     },
   },
 }

 return (
   <Layout>
     <section className={styles.blog}>
       <div className={styles.center}>
         <h2 className={styles.title}>{title}</h2>
         <p className={styles.published}>objavljeno : {published}</p>
         <article className={styles.post}>
           {documentToReactComponents(
             data.projectitempost.apstract.json,
             options
           )}
         </article>
         <button
           className={
             isOpen
               ? `${styles.show} ${styles.readMoreButton}`
               : `${styles.hide}`
           }
           onClick={toggleReadMore}>
           {isOpen ? "Procitaj vise" : "Prikazi manje"}
         </button>
         <div className={isOpen ? `${styles.hide}` : `${styles.show}`}>
           <article className={styles.projectDetails}>
             {documentToReactComponents(json, options)}
           </article>
         </div>
         <div className={styles.allBlogsButton}>
           <AniLink fade to="/projekat" className="btn-primary">
             svi projekti
           </AniLink>
         </div>
       </div>
     </section>
   </Layout>
 )
}

export const query = graphql`
         query getProjectItemPost($slug: String!) {
           projectitempost: contentfulProjectItem(slug: { eq: $slug }) {
             title
             published(formatString: "DD.MM.YYYY")
             apstract {
               json
             }
             text {
               json
               content {
                 data {
                   target {
                     fields {
                       image {
                         en_US {
                           fields {
                             file {
                               en_US {
                                 url
                               }
                             }
                           }
                         }
                       }
                     }
                   }
                 }
               }
             }
           }
         }
       `

export default BlogProject
