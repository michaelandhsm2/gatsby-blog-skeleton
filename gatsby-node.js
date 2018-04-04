const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, boundActionCreators}) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
      const slug = createFilePath({ node, getNode, basePath: `content` })
      createNodeField({
        node,
        name: `slug`,
        value: slug,
      })
      createNodeField({
        node,
        name: `sourceName`,
        value: getNode(node.parent).sourceInstanceName,
      })
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              frontmatter{
                title
              }
              fields {
                slug
                sourceName
              }
            }
          }
        }
      }
    `
  ).then(result => {

    const posts = result.data.allMarkdownRemark.edges.filter(edge => edge.node.fields.sourceName == "posts")
    const pages = result.data.allMarkdownRemark.edges.filter(edge => edge.node.fields.sourceName == "pages")

    posts.forEach(({ node }, index ) => {
        const prev = index === 0 ? false : posts[index - 1].node;
        const next = index === posts.length - 1 ? false : posts[index + 1].node;
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/post.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
            sourceName: node.fields.sourceName,
            prev: prev,
            next: next
          },
        })
      })

      pages.forEach(({node}) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug: node.fields.slug,
            sourceName: node.fields.sourceName,
          },
        })
      })

      resolve()
    })
  })
};
