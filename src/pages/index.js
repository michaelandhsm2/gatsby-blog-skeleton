import React from "react"
import Link from "gatsby-link";

export default ({ data }) => {
  return (
    <div>
      <h2>{data.allMarkdownRemark.totalCount} Posts</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <Link to={node.fields.slug}>
          <h3>
            {node.frontmatter.title} — {node.frontmatter.date}
          </h3>
          </Link>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query PostQuery {
    allMarkdownRemark(
      filter: {fields: {sourceName: {eq: "posts"}}},
      sort: {fields: [frontmatter___date,frontmatter___title], order: DESC}
    ){
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM YYYY")
            }
            excerpt
            fields {
              slug
            }
          }
        }
    }
  }
`
