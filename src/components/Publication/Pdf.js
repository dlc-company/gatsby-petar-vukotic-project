// import React from "react"
// import styles from "../../css/pdf.module.css"
// import { FaFilePdf } from "react-icons/fa"
// import { graphql, useStaticQuery } from "gatsby"
// import Title from "../../components/Title"
// import AniLink from "gatsby-plugin-transition-link/AniLink"
// // import styles from "../../css/blog.module.css"


// const Pdf = () => {

//   // const { currentPage, numPages } = props.pageContext
//   // const isFirst = currentPage === 1
//   // const isLast = currentPage === numPages
//   // const prevPage =
//   // currentPage - 1 === 1 ? `/publikacije/` : `/publikacije/${currentPage - 1}`
//   // const nextPage = `/publikacije/${currentPage + 1}`
//   // const { data } = props

//   // const data = useStaticQuery(graphql`
//   //   query getPdf ($skip: Int!, $limit: Int!){
//   //     pdf: allContentfulPdf (
//   //     skip: $skip
//   //     limit: $limit
//   //     sort: { fields: published, order: DESC }
//   //   ){
   
//   //       edges {
//   //         node {
//   //           title
//   //           pdf {
//   //             file {
//   //               url
//   //             }
//   //           }
//   //         }
//   //       }
//   //     }
//   //   }
  
//   // `)
//   return (
//     <div>
//     <section className={styles.main}>
//       <div className={styles.center}>
//         <Title subtitle="PDF Dokumenta" />
//         {/* {data.pdf.edges.map((article, index) => { */}
//           return (
//             <div className={styles.document}>
//               <div className={styles.documentControls}>
//                 <FaFilePdf size={35} className={styles.pdfIcon} />
//                 {/* <p className={styles.documentName}>{article.node.title}</p> */}
//                 <button type="button" className={styles.openButton}>
//                   {/* <a
//                     className={styles.documentButton}
//                     href={article.node.pdf.file.url}
//                     target="_blank"
//                   >
//                     Otvori
//                   </a> */}
//                 </button>
//               </div>
//             </div>
//           )
//         )
//         <hr></hr>
//       </div>     
//     </section>
//     <section className={styles.links}>
//       {!isFirst && (
//         <AniLink fade to={prevPage} className={styles.link}>
//           Prev
//         </AniLink>
//       )}

//       {Array.from({ length: numPages }, (_, i) => {
//         return (
//           <AniLink
//             key={i}
//             fade
//             to={`/blogs/${i === 0 ? "" : i + 1}`}
//             className={
//               i + 1 === currentPage
//                 ? `${styles.link} ${styles.active}`
//                 : `${styles.link}`
//             }
//           >
//             {i + 1}
//           </AniLink>
//         )
//       })}
//       {!isLast && (
//         <AniLink fade to={nextPage} className={styles.link}>
//           Next
//         </AniLink>
//       )}
//     </section>
//     </div>
//   )
// }

// export default Pdf
