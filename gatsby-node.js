const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
  query{
    posts: allContentfulBiomasa {
      edges {
        node {
          slug
        }
      }
    }
    recycleposts:allContentfulReciklaza{
      edges{
        node{
          slug
        }
      }
    }
    projectitemposts:allContentfulProjectItem{
    edges{
      node{
        slug
        }
      }
    }
  }
  `)

  data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `biomasa/${node.slug}`,
      component: path.resolve("./src/templates/blog-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
  data.recycleposts.edges.forEach(({ node }) => {
    createPage({
      path:`reciklaza/${node.slug}`,
      component: path.resolve("./src/templates/blog-recycle-template.js"),
      context:{
        slug:node.slug,
      },
    })
  })
  data.projectitemposts.edges.forEach(({ node })=>{
    createPage({
      path: `projekat/${node.slug}`,
      component: path.resolve("./src/templates/blog-project-template.js"),
      context: {
        slug:node.slug
      }
    })
  })
}