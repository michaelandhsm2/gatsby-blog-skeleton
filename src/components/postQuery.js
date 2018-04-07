import React from "react";
import PostTitle from "../components/postTitle"

export default class extends React.Component {
  render() {

    const { node } = this.props;

    return(
      <div>
        <PostTitle node={node}/>
        <p>{node.excerpt}</p>
      </div>
    );
  }
}
