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
            if (node.data.target.fields.file['en-US'].contentType == 'image/jpeg') {
                return <div className = {styles.image}>                    
                    <img width="400" src={node.data.target.fields.file['en-US'].url} />
                </div>
            }
            else if (node.data.target.fields.file['en-US'].contentType == 'application/pdf') {
                return <div>
                    <div>
                        <h3>{node.data.target.fields.title['en-US']}</h3>
                        <button className='btn-primary'><a href={node.data.target.fields.file['en-US'].url} target="_blank">Open document</a></button>
                    </div>
                </div>
            }                                      
        },
        "paragraph": (node) => {                       
            if (node.content[1] != undefined){
                if (node.content[1].nodeType == "hyperlink") {
                    return(
                        <div className={styles.question}>
                        <h3>{node.content[1].content[0].value}</h3>
                        <iframe className ={styles.video} width="420" height="300" src={node.content[1].data.uri} frameBorder="0" allowFullScreen></iframe>
                    </div> )
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
                    <h4 className={styles.published}>objavljeno : {published}</h4>
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
