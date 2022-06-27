module.exports = {
  siteMetadata: {
    title: `Linda Benson Interiors`,
    siteUrl: `https://www.lindabensoninteriors.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        // Defaults used for gatsbyImageData and StaticImage
        defaults: {},
        // Set to false to allow builds to continue on image errors
        failOnError: false,
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Linda Benson Interiors",
        short_name: "Linda Benson Interiors",
        start_url: "/",
        background_color: "#bfd4d5",
        theme_color: "#bfd4d5",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/images/contact/LindaBensonContactsPagoda.png", // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },
    `gatsby-plugin-react-helmet`
    // {
    //   resolve: `gatsby-source-mysql`,
    //   options: {
    //     connectionDetails: {
    //       host: 'localhost',
    //       user: 'db-username',
    //       password: 'db-password',
    //       database: 'world'
    //     },
    //     queries: [
    //       {
    //         statement: 'SELECT * FROM country',
    //         idFieldName: 'Code',
    //         name: 'country'
    //       }
    //     ]
    //   }
    // }
  ],
}
