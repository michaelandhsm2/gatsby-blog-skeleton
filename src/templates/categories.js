import React from "react"
import Post from "../components/postQuery"

export default ({ data, pathContext}) => {
  const totalCount = data.allMarkdownRemark.totalCount
  return (
    <div style={{margin:`1.5rem 0`}}>
      <h2 >{totalCount} post{totalCount === 1 ? "" : "s"} in "{pathContext.category}"</h2>
      <ol style={{margin:`1.5rem 0`, padding:`0 2rem`}} >
        {data.allMarkdownRemark.edges.map(({ node }) => {
          return (
            <Post key={node.slug} node={node}/>
          );
        })}
      </ol>
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
            date(formatString: "YYYY.MM.DD")
            tags
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
