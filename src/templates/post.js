import React from "react"
import Link from "gatsby-link"

export default ({ data, pathContext}) => {
  const post = data.markdownRemark;
  const { next, prev } = pathContext;
  console.log(pathContext)
  return (
    <div>
      <h2>{post.frontmatter.title}</h2>
      <p style={{margin: "0.5em 0", color: "#888888"}}>
        <span title={post.frontmatter.date}>{post.frontmatter.date}</span> &mdash;{" "}
        {post.timeToRead} mins read &mdash; In{" "}
        {
          post.frontmatter.category.map((item, i) => (
            <span key={i}>
              {i>0 && <span>, </span>}
              <Link to='\'>{item}</Link>
            </span>
          ))
        }
      </p>
      <div style={{margin:`1.5rem 0`}} dangerouslySetInnerHTML={{ __html: post.html }} />

      <div style={{paddingBottom:`0.5rem` }}>
        <p>Tags:{" "}{
          post.frontmatter.tags.map((item, i) => (
            <span key={i}>
              {i>0 && <span>, </span>}
              <Link to={"/tags/"+item+"/"}>{item}</Link>
            </span>
          ))
        }</p>
        {prev &&
          <span style={{float: `left` }}>
            Previous Post: <Link  to={prev.fields.slug}>
            {prev.frontmatter.title} </Link>
          </span>}
        {next &&
          <span style={{float: `right` }}>
            Next Post: <Link  to={next.fields.slug}>
            {next.frontmatter.title} </Link>
          </span>}
      </div>
    </div>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        category
        tags
      }
      timeToRead

    }
  }
`
