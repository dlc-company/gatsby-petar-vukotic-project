import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import styles from '../css/single-blog.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink' 
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';


const BlogRecycle = ({ data }) => {
const {title,published,text:{json},} = data.recyclepost

const options = {
    renderNode:{
        "embedded-asset-block":(node) =>{
            if (node.data.target.fields.file['en-US'].contentType == 'image/jpeg') {
                return <div>
                    <h1>promena</h1>
                    <img width="400" src={node.data.target.fields.file['en-US'].url} />
                </div>
            }
            else if (node.data.target.fields.file['en-US'].contentType == 'application/pdf') {
                return <div>
                    <div>
                        <h3>{node.data.target.fields.title['en-US']}</h3>
                        <button className='btn-primary'><a href={node.data.target.fields.file['en-US'].url} target="_blank">Open</a></button>
                    </div>
                </div>
            }
            else if (node.data.target.fields.file['en-US'].contentType == 'text/html; charset=utf-8') {
                return <div>
                    <h3>{node.data.target.fields.title['en-US']}</h3>
                    <button className='btn-primary'><a href={node.data.target.fields.file['en-US'].url} target="_blank">Open video</a></button>
                </div>
            }                
        },
    },
}
    return (
        <Layout>
            <section className={styles.blog}>
                <div className={styles.center}>
                    <h1 className={styles.title}>{title}</h1>
                    <h4 className={styles.published}>published at : {published}</h4>
                    <article className={styles.post}>
                        {documentToReactComponents(json,options)}
                    </article>
                    <AniLink fade to='/reciklaza' className="btn-primary">
                        svi clanci
                    </AniLink>
                </div>
            </section>
        </Layout>
    )
}


export const query = graphql`
query getRecyclePost($slug: String!) {
    recyclepost: contentfulReciklaza(slug: {eq: $slug}) {
      title
      published(formatString:"MMMM Do, YYYY")
      text {
        json
      }
    }
  }
`

export default BlogRecycle
