import React from "react";
import Link from "gatsby-link";

const ListItem =  props =>
  <span key={props.index}>
    {props.index>0 && <span>, </span>}
    <Link to={"/tags/"+props.item+"/"}>{props.item}</Link>
  </span>

const subtitleStyle = {
  margin: `0.5em 0`,
  color: `#888888`
};

export default class extends React.Component {
  render() {

    const { node } = this.props;

    const title = node.fields && node.fields.slug ? (
        <Link to={node.fields.slug}>
          <h2 style={{marginBottom: `0`}}>{node.frontmatter.title}</h2>
        </Link>
    ):(
        <h2 style={{marginBottom: `0`}}>{node.frontmatter.title}</h2>
    )

    const tagsOrCategory = node.frontmatter.category && node.frontmatter.category!="TBD" ? (
      <span>&mdash; In{" "}
        <Link to={"/category/"+node.frontmatter.category+"/"}>{node.frontmatter.category}</Link>
      </span>
    ):(
      node.frontmatter.tags ? (
        <span>&mdash; Tagged with{" "}{
          node.frontmatter.tags.map((item, i) => (
            <ListItem item={item} key={i} index={i} />
          ))
        }</span>
      ):( false )
    )

    return(
      <div>
        {title}
        { node.frontmatter.date &&
          <p style={subtitleStyle}>
            <span title={node.frontmatter.date}>{node.frontmatter.date}</span> &mdash;
            {" "+node.timeToRead} mins read {tagsOrCategory}
          </p>
        }
      </div>
    );
  }
}
