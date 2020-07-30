import React, { Component } from "react"
import Title from '../Title'
import Img from "gatsby-image"
import styles from '../../css/blog-card-project.module.css'
import { Link } from 'gatsby'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import AniLink from "gatsby-plugin-transition-link/AniLink" 

const getCategories = items => {
 let tempItems = items.map(items => {
  return items.node.category
 })
 let tempCategories = new Set(tempItems)
 let categories = Array.from(tempCategories)
 categories = ["sve", ...categories]
 return categories
}

export default class Menu extends Component {
 constructor(props) {  
  super(props)   
    this.state = {
      items: props.items.edges,
      projectItems: props.items.edges,
      categories: getCategories(props.items.edges),
      selectedCategory: props.selectedCategory,
    }
 }
  
 handleItems = category => {     
  let tempItems = [...this.state.items]
  if (category === "sve") {
   this.setState(() => {
    return { projectItems: tempItems, selectedCategory:category}
   })
  } else {
   let items = tempItems.filter(({ node }) => node.category === category)
   this.setState(() => {
    return { projectItems: items, selectedCategory: category }
   })
  }
 }
 render() {
  if (this.state.items.length > 0) {
   return (
    <section className="menu py-5">
     <div className="container">
      <Title title="izaberite" subtitle="kategoriju" />
      <hr></hr>
      {/* categories */}
      <div className="row mb-5">
       <div className="col-10 mx-auto text-center">
        {this.state.categories.map((category, index) => {
         return (
           <button
             type="button"
             key={index}
             className={
               this.state.selectedCategory == category
                 ? `${styles.selectedCategory}`
                 : `${styles.category}`
             }
             onClick={() => {
               this.handleItems(category)
             }}
           >
             {category}
           </button>
         )
        })}
       </div>
      </div>
      {/* items */}
      <div className={styles.blogCards}>
       {this.state.projectItems.map(({ node }) => {
        return (
          <div
            key={node.id}
            className={styles.blog} 
          >
            <div className={styles.imgContainer}>
              <Img fluid={node.image.fluid} className={styles.img} />
              <AniLink
                fade
                className={styles.link}
                to={`/projekat/${node.slug}`}
              >
                procitajte vise
              </AniLink>
              <h6 className={styles.date}>{node.published}</h6>
            </div>
            <div className={styles.footer}>
              <p>{node.title}</p>
            </div>
          </div>
        )
       })}
      </div>
     </div>
    </section>
   )
  } else {
   return (
    <section className="menu py-5">
     <div className="container">
      <Title title="our menu" />
      <div className="row">
       <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
        <h1>there are no items to diplay</h1>
       </div>
      </div>
     </div>
    </section>
   )
  }
 }
}