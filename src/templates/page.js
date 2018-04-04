import React from "react";

export default ({ data }) => {
  const post = data.markdownRemark;
  return (
    <div>
      <div  style={{margin:`1.5rem 0`}} dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
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
