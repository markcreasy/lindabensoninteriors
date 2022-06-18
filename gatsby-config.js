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
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 100,
          breakpoints: [1080, 1366, 1920],
          backgroundColor: `transparent`,
        }
      }
    },
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images/portfolio`,
      }
    },
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
