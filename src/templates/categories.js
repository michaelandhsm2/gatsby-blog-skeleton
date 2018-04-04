
import React from "react"
import Link from "gatsby-link"

export default ({ data, pathContext}) => {
  console.log(data)
  console.log(pathContext)

  const { category } = pathContext;
  const categoryHeader = `${data.allMarkdownRemark.totalCount} post${
    data.allMarkdownRemark.totalCount === 1 ? "" : "s"
  } in "${category}"`
  const edges = data.allMarkdownRemark.edges
  return (
    <div style={{margin:`1.5rem 0`}}>
      <h2 >{categoryHeader}</h2>
      <ul style={{margin:`1.5rem 0`, padding:`0 2rem`}} >
        {edges.map(({ node }) => {
          console.log(node)
          return (
            <li key={node.fields.slug}>
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export const query = graphql`
  query category($category: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
          }
          fields{
            slug
          }
        }
      }
    }
  }
`
