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
                tags
                category
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

      const pages = result.data.allMarkdownRemark.edges.filter(edge => edge.node.fields.sourceName == "pages")
      pages.forEach(({node}) => {
        console.log("    Page Created: "+node.frontmatter.title)
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug: node.fields.slug,
            sourceName: node.fields.sourceName,
          },
        })
      })

      const posts = result.data.allMarkdownRemark.edges.filter(x => !pages.includes(x))
      let tags = []
      let categories = new Map()

      posts.forEach(({ node }, index ) => {
        tags = tags.concat(node.frontmatter.tags)
        if (!categories[node.frontmatter.category]) {
            categories[node.frontmatter.category] = [];
        }
        categories[node.frontmatter.category].push(node);
      })

      tags = tags.filter( (value, index) => tags.indexOf(value) === index )

      tags.forEach(tag => {
        console.log("    Tag Created: "+tag)
        createPage({
          path: `/tags/${tag}/`,
          component: path.resolve(`./src/templates/tags.js`),
          context: {
            tag,
          },
        });
      });

      Object.keys(categories).forEach(category=>{
        console.log("    Category Created: "+category)
        createPage({
          path: `/category/${category}/`,
          component: path.resolve(`./src/templates/categories.js`),
          context: {
            category: category,
          },
        });

        categories[category].forEach((node,index) =>{
          const prev = index === 0 ? false : categories[category][index - 1]
          const next = index === categories[category].length - 1 ? false : categories[category][index + 1]
          console.log("    Post Created: "+node.frontmatter.title+" ("+ category +"), prev: "+ (prev && prev.frontmatter.title) +", next: "+ (next && next.frontmatter.title))
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
        });
      });

      resolve()
    })
  })
};
