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
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        var component;
        if(node.fields.sourceName == "posts"){
          component = `./src/templates/post.js`
        }else{
          component = `./src/templates/page.js`
        }
        createPage({
          path: node.fields.slug,
          component: path.resolve(component),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug,
            sourceName: node.fields.sourceName,
          },
        })
      })
      resolve()
    })
  })
};
