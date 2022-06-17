module.exports = {
  siteMetadata: {
    title: `Linda Benson Interiors`,
    siteUrl: `https://www.lindabensoninteriors.com`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
