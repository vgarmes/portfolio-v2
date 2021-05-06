/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Victor Garcia Portfolio`,
    description: `Personal web development porfolio of Victor Garcia Mestre`,
    titleTemplate: `%s | Victor Garcia Portfolio`,
    url: ``,
    twitterUsername: `@vgmestre`,
    image: ``,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images],
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`jobs`, `project`],
        // singleTypes: [`about`],
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["400", "700"],
            },
            {
              family: "Open Sans",
            },
          ],
        },
      },
    },
  ],
}
