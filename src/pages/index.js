import React from "react"
import Link from "gatsby-link";

export default class extends React.Component {
  render() {
    return (
      <div>
        <Link to="/blog/">Home</Link>
      </div>
    );
  }
};
