import React from "react"
import Page from "../components/pageTemplate"

export default () => {
  const node = {
    frontmatter:{
      title: "Error 404"
    },
    html: "<p>The page you are looking for does not exist.</p>"
  }
  return (
    <Page post={node} />
  );
};
