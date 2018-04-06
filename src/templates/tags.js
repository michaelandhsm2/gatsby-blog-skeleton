import React from "react"
import Post from "../components/postQueryPage"

export default ({ data, pathContext}) => {
  return (
    <Post totalCount={data.allMarkdownRemark.totalCount}
          edges={data.allMarkdownRemark.edges}
          pathContext={pathContext}
          titleConnection="tagged with"
          />
  );
};


export const query = graphql`
  query TagPage($key: String,$numPerPage: Int, $startingIndex: Int) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC },
      filter: { frontmatter: { tags: { in: [$key] } } },
      skip: $startingIndex,
      limit: $numPerPage
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY-MM-DDTHH:mm:ssZ")
            category
          }
          timeToRead
          excerpt
          fields{
            slug
          }
        }
      }
    }
  }
`
