import React from "react"
import Page from "../components/pageTemplate"

export default ({ data }) => {
  return (
    <Page post={data.markdownRemark} />
  );
};

export const query = graphql`
  query PageQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
