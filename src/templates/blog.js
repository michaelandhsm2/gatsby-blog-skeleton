import React from "react"
import Post from "../components/postQueryPage"

export default ({ data, pathContext }) => {
  return (
    <Post edges={data.allMarkdownRemark.edges}
          pathContext={pathContext}
          />
  );
};

export const query = graphql`
  query PostQuery($numPerPage: Int, $startingIndex: Int) {
    allMarkdownRemark(
      filter: {fields: {sourceName: {eq: "posts"}}},
      sort: {fields: [frontmatter___date,frontmatter___title], order: DESC},
      skip: $startingIndex,
      limit: $numPerPage
    ){
        totalCount
        edges {
          node {
            frontmatter {
              title
              date(formatString: "YYYY-MM-DDTHH:mm:ssZ")
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
