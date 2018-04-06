import React from "react"
import Post from "../components/postQuery"

export default ({ data }) => {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <Post key={node.fields.slug} node={node}/>
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
            frontmatter {
              title
              date(formatString: "YYYY.MM.DD")
              category
              tags
            }
            timeToRead
            excerpt
            fields {
              slug
            }
          }
        }
    }
  }
`
