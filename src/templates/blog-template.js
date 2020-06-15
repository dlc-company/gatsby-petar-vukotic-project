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

const Blog = ({data}) => {
const {title,published,text:{json}} = data.post
const [showDocument, setShowDocument] = React.useState('')
const showHideDocument = (id) => {
    if (showDocument == id) {
        id = '';
    }
    setShowDocument(showDocument => id)
}
console.log(showDocument);
const options = {
    renderNode:{
        "embedded-asset-block":(node)=>{
            //Image
            if (node.data.target.fields.file['en-US'].contentType === 'image/jpeg') {
                return <div className = {styles.image}>                    
                    <img width="490" src={node.data.target.fields.file['en-US'].url} />
                </div>
            }
            //PDF
            else if (node.data.target.fields.file['en-US'].contentType === 'application/pdf') { 
                const documentUrl = node.data.target.fields.file['en-US'].url;             
                return (
                <div className={styles.document}>                    
                    <div className = {styles.documentControls}>
                            <FaFilePdf size={35} className={styles.pdfIcon}/>
                            <p className={styles.documentName}>{node.data.target.fields.title['en-US']}</p>  
                            <button type="button" className={styles.roundedButton} onClick={() => showHideDocument(documentUrl)} >
                                {showDocument == documentUrl ? <FaChevronUp /> : <FaChevronDown />}
                            </button>  
                            <button type="button" className={styles.roundedButton} >
                                <a className={styles.documentButton} href={documentUrl} target="_blank"><FaClone /></a>                                
                            </button>                      
                    </div>
                        <div className={showDocument == documentUrl ? `${styles.documentWindow}`:`${styles.documentWindowHidden}`}>
                            <object className={styles.objectPdf} data={documentUrl} type="application/pdf"></object>                           
                        </div>                                                                     
                </div>)
            }                                    
        },
        "paragraph": (node) => {                       
            if (node.content[1] != undefined){
                // Embedded video
                if (node.content[1].nodeType === "hyperlink") {
                    return(
                        <div className={styles.questionSection}>
                            <p>{node.content[1].content[0].value}</p>
                            <iframe className ={styles.video} src={node.content[1].data.uri} frameBorder="0" allowFullScreen></iframe>
                        </div> )
                }
                // Text with marks (bold, italic ...)
                else
                {
                    let text = ``;
                    for (let index = 0; index < node.content.length; index++) {
                        if (node.content[index].marks.length != 0){
                            if (node.content[index].marks[0].type == 'bold'){
                                text += '<b>' + node.content[index].value + '</b>';
                            }                            
                        }
                        else{
                            text += node.content[index].value;
                        }
                    }
                    return (
                        <div className={styles.text}>
                            <p dangerouslySetInnerHTML={{ __html: text }}/>
                        </div>
                    )
                }
            }  
            // Simple text
            else{  
                if (node.content[0].marks.length != 0) {     
                    return (
                        <div className={styles.text}>
                            <p><b>{node.content[0].value}</b></p>
                        </div>
                    )
                   }  
                   else{
                    return (
                        <div className={styles.text}>
                            <p>{node.content[0].value}</p>
                        </div>
                    ) 
                   }                           
            }                     
        }
    }
}
    return (
        <Layout>
            <section className={styles.blog}>
                <div className={styles.center}>
                    <h1 className={styles.title}>{title}</h1>
                    <h5 className={styles.published}>Objavljeno : {published}</h5>
                    <article className={styles.post}>
                        {documentToReactComponents(json, options)}
                    </article>
                    <div className={styles.allBlogsButton}>
                        <AniLink fade to='/biomasa' className='btn-primary'>
                            svi clanci
                    </AniLink>
                    </div>                   
                </div>
            </section>
        </Layout>
    )
}



export const query = graphql`
query getPost($slug:String!){
    post:contentfulBiomasa(slug:{eq: $slug}){
      title
      published(formatString:"MMMM Do, YYYY")
      text{
        json
      }
    }
  }
`


export default Blog
