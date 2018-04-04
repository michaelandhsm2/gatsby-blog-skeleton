import React from "react"
import Link from "gatsby-link"

export default ({ data }) => {
  return (
    <div>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>

          <Link to={node.fields.slug}>
            <h1 style={{marginBottom: "0"}}>{node.frontmatter.title}</h1>
          </Link>
          <p style={{margin: "0.5em 0", color: "#888888"}}>
            <span title={node.frontmatter.date}>{node.frontmatter.date}</span> &mdash;{" "}
            {node.timeToRead} Min Read &mdash; In{" "}
            {
              node.frontmatter.category.map((item, i) => (
                <span>
                  {i>0 && <span>, </span>}
                  <Link to='\'>{item}</Link>
                </span>
              ))
            }
          </p>
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
              date(formatString: "YYYY.MM.DD")
              category
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
