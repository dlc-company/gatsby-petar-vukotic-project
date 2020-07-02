import React, { Component } from "react"
import Title from '../Title'
import Img from "gatsby-image"
import styles from '../../css/blog-card.module.css'
import { Link } from 'gatsby'
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

const getCategories = items => {
 let tempItems = items.map(items => {
  return items.node.category
 })
 let tempCategories = new Set(tempItems)
 let categories = Array.from(tempCategories)
 categories = ["all", ...categories]
 return categories
}

export default class Menu extends Component {
 constructor(props) {
  super(props)
  this.state = {
   items: props.items.edges,
   projectItems: props.items.edges,
   categories: getCategories(props.items.edges),
  }
 }
 handleItems = category => {
  let tempItems = [...this.state.items]
  if (category === "all") {
   this.setState(() => {
    return { projectItems: tempItems }
   })
  } else {
   let items = tempItems.filter(({ node }) => node.category === category)
   this.setState(() => {
    return { projectItems: items }
   })
  }
 }
 render() {
  if (this.state.items.length > 0) {
   return (
    <section className="menu py-5">
     <div className="container">
      <Title title="our menu" />
      {/* categories */}
      <div className="row mb-5">
       <div className="col-10 mx-auto text-center">
        {this.state.categories.map((category, index) => {
         return (
          <button
           type="button"
           key={index}
           className="btn btn-yellow text-capitalize m-3"
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
      <div className="row">
       {this.state.projectItems.map(({ node }) => {
        return (
         <div
          key={node.id}
          className="col-11 col-md-6 my-3  mx-auto"//d-flex deleted
         >
          <div className={styles.imgContainer}>
           <Img fluid={node.image.fluid} className={styles.img} />
           <Link className={styles.link} to={`/projekat/${node.slug}`}>
            procitajte vise
          </Link>
          </div>
          
          {/* item text */}
          <div className="flex-grow-1 px-3">
           <div className="d-flex justify-content-between">
            <h6 className="mb-0">
             <small>{node.title}</small>
            </h6>
            
           </div>

           
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