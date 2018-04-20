module.exports = {
  siteMetadata: {
    title: `Michael's Website`,
    siteUrl: `http://michaelandhsm2.me`,
    description: `A static personal blog built with react.`,
    landing:{
      title: "Hi, I'm Michael.",
      subtitle: "Currently a undergrad, studing CS in Taipei Tech",
      callToAction: "Enter My Blog"
    }
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-prismjs`,
          `gatsby-plugin-sharp`,
          `gatsby-plugin-catch-links`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-responsive-iframe`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 800,
            },
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography.js`,
    //   },
    // },
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
