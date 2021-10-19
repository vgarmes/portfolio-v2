/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  pathPrefix: '/portfolio', // prefix to add to links when building for Github Pages
  siteMetadata: {
    title: `Victor Garcia Portfolio`,
    description: `Personal web development porfolio of Victor Garcia Mestre`,
    titleTemplate: `%s | Victor Garcia Portfolio`,
    siteUrl: `https://vgarmes.github.io/portfolio`, // No trailing slash allowed!
    twitterUsername: `@vgmestre`,
    image: `/ogimage.png`, // Path to the image placed in the 'static' folder, in the project's root directory.
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        collectionTypes: [`jobs`, `project`],
        // singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Roboto',
              variants: ['400', '700'],
            },
            {
              family: 'DM Serif Text',
            },
            {
              family: 'Poppins',
              variants: ['400', '500', '600', '700'],
            },
            {
              family: 'Mulish',
              variants: ['400', '500', '600', '700'],
            },
          ],
        },
      },
    },
  ],
};
