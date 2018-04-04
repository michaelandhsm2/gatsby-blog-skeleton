import React from "react"

export default ({ data }) => {
  console.log(data);
  return (
    <div>
      <h2>{data.allMarkdownRemark.totalCount} Posts</h2>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.frontmatter.title} — {node.frontmatter.date}
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </div>
  );
};

export const query = graphql`
  query PostQuery {
    allMarkdownRemark(
      filter: {fileAbsolutePath: {regex: "/posts/"}},
      sort: {fields: [frontmatter___date], order: DESC}
    ){
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              date(formatString: "DD MMMM YYYY")
              category
            }
            excerpt
            timeToRead
          }
        }
    }
  }
`
