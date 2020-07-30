import React from 'react'
import Layout from "../components/Layout"
import StyledHero from '../components/StyledHero'
import { StaticQuery,graphql } from "gatsby"
import Menu from '../components/Home/Menu'
import 'bootstrap/dist/css/bootstrap.min.css'



export default function projekat(props) {
  const prevPage = (props.location.state.prevPath != undefined)? props.location.state.prevPath.substring(1): "sve";  
                 return (
                   <StaticQuery
                     query={graphql`
                       query {
                         projectbcg: file(
                           relativePath: {
                             eq: "octavian-dan-b21Ty33CqVs-unsplash.jpg"
                           }
                         ) {
                           childImageSharp {
                             fluid(quality: 90, maxWidth: 4160) {
                               src
                             }
                           }
                         }
                         menu: allContentfulProjectItem {
                           edges {
                             node {
                               slug
                               id
                               title
                               category
                               published(formatString: "DD.MM.YYYY")
                               image {
                                 fluid {
                                   ...GatsbyContentfulFluid
                                 }
                               }
                             }
                           }
                         }
                       }
                     `}
                     render={data => (
                       <Layout>
                         <StyledHero
                           img={data.projectbcg.childImageSharp.fluid}
                         />
                         <Menu items={data.menu} selectedCategory={prevPage} />
                       </Layout>
                     )}
                   />
                 )
               }

// const projekat = ({data}) => {
//   console.log(data)
//  return (
//    <Layout>
//      <StyledHero img={data.projectbcg.childImageSharp.fluid} />
//      <Menu items={data.menu} selectedCategory="biomasa" />
//      {/* <BlogListProject /> */}
//    </Layout>
//  )
// }

// export const query = graphql`
//          query {
//            projectbcg: file(
//              relativePath: { eq: "octavian-dan-b21Ty33CqVs-unsplash.jpg" }
//            ) {
//              childImageSharp {
//                fluid(quality: 90, maxWidth: 4160) {
//                  src
//                }
//              }
//            }
//            menu: allContentfulProjectItem {
//              edges {
//                node {
//                  slug
//                  id
//                  title
//                  category
//                  published(formatString: "DD.MM.YYYY")
//                  image {
//                    fluid {
//                      ...GatsbyContentfulFluid
//                    }
//                  }
//                }
//              }
//            }
//          }
//        `

// export default projekat
