import React from "react";
import Link from "gatsby-link";

const ListItem =  props =>
  <span key={props.index}>
    {props.index>0 && <span>, </span>}
    <Link to={"/tags/"+props.item+"/"}>{props.item}</Link>
  </span>

export default class extends React.Component {
  render() {

    const { post, path } = this.props;
    const { next, prev } = path;

    return(
      <div style={{marginBottom:`3rem` }}>
        <p style={{marginBottom:`0.5rem` }}>Tags:{" "}{
          post.frontmatter.tags.map((item, i) => (
            <ListItem index={i} item={item} />
          ))
        }</p>
        {prev &&
          <span style={{float: `left` }}>
            Previous: <Link  to={prev.fields.slug}>
            {prev.frontmatter.title} </Link>
          </span>}
        {next &&
          <span style={{float: `right` }}>
            Next: <Link  to={next.fields.slug}>
            {next.frontmatter.title} </Link>
          </span>}
      </div>
    );
  }
}
