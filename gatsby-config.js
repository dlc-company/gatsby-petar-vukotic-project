/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */


require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
}),
  // require('leaflet.control.layers.tree').config({
  //   path: `leaflet.control.layers.tree.${process.leaflet.control.layers.tree.NODE_ENV}`
  // })
  (module.exports = {
    /* Your site config here */
    plugins: [      
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `pages`,
          path: `${__dirname}/src/pages/`,
        },
      },
      `gatsby-plugin-mdx`,
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          // replace "UA-XXXXXXXXX-X" with your own Tracking ID
          trackingId: "UA-173980942-1",
        },
      },
      {
        resolve: `leaflet-sidebar-v2`,
      },
      {
        resolve: "gatsby-plugin-react-leaflet",
        options: {
          linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/images/`,
        },
      },
      {
        resolve: `gatsby-source-contentful`,
        options: {
          spaceId: process.env.CONTENTFUL_SPACE_ID,
          accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        },
      },
      {
        resolve: `gatsby-plugin-env-variables`,
      },
      `gatsby-transformer-sharp`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-transition-link`,
    ],
  })
