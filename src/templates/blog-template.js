import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styles from '../css/single-blog.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const Blog = ({data}) => {
const {title,published,text:{json}} = data.post
const options = {
    renderNode:{
        "embedded-asset-block":(node)=>{
            if (node.data.target.fields.file['en-US'].contentType === 'image/jpeg') {
                return <div className = {styles.image}>                    
                    <img width="490" src={node.data.target.fields.file['en-US'].url} />
                </div>
            }
            else if (node.data.target.fields.file['en-US'].contentType === 'application/pdf') {
                return <div>
                    <div className = {styles.document}>
                        <h7 className = {styles.documentName}>{node.data.target.fields.title['en-US']}</h7>
                        <button className={styles.roundedButton}><a className={styles.documentButton} href={node.data.target.fields.file['en-US'].url} target="_blank">Otvori</a></button>
                    </div>
                </div>
            }                                      
        },
        "paragraph": (node) => {                       
            if (node.content[1] != undefined){
                if (node.content[1].nodeType === "hyperlink") {
                    return(
                        <div className={styles.questionSection}>
                            <h7>{node.content[1].content[0].value}</h7>
                            <iframe className ={styles.video} src={node.content[1].data.uri} frameBorder="0" allowFullScreen></iframe>
                        </div> )
                }
                else
                {
                    let text = ``;
                    for (let index = 0; index < node.content.length; index++) {
                        if (node.content[index].marks.length != 0){
                            if (node.content[index].marks[0].type == 'bold'){
                                text += '<strong>' + node.content[index].value + '</strong>';
                            }                            
                        }
                        else{
                            text += node.content[index].value;
                        }
                    }
                    return (
                        <div className={styles.text}>
                            <h7>{text}</h7>
                        </div>
                    )
                }
            }  
            else{               
                return (                   
                <div className={styles.text}>
                    <h7>{node.content[0].value}</h7>
                </div>
                )
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
