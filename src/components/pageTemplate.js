import React from "react";
import PostTitle from "../components/postTitle"
import PostEnding from "../components/postEnding"

require("prismjs/themes/prism-tomorrow.css");
require("./github.css");

export default class extends React.Component {
  render() {

    const { post, path } = this.props;

    return(
      <div>
        <PostTitle node={post}/>

        <div style={{margin:`1.5rem 0`}} className="markdown-body" dangerouslySetInnerHTML={{ __html: post.html }} />
        {path &&
          <PostEnding post={post} path={path}/>
        }
      </div>
    );
  }
}
