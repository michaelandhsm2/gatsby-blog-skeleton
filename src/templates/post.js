import React from "react"
import Page from "../components/pageTemplate"

export default ({ data, pathContext}) => {
  return (
    <Page post={data.markdownRemark} path={pathContext}/>
  );
};

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY-MM-DDTHH:mm:ssZ")
        category
        tags
      }
      timeToRead

    }
  }
`
