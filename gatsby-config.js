module.exports = {
  siteMetadata: {
    title: `Michael's Personal Website`,
    siteUrl: `http://michaelandhsm2.me`,
    description: `A static personal blog built with react.`,
  },

  plugins: [
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/content/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
  ],

};
