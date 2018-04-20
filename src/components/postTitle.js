import React from "react";
import Link from "gatsby-link";
import {Header} from 'semantic-ui-react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'


TimeAgo.locale(en)
const timeAgo = new TimeAgo('en-US')

const titleStyle = {
  margin: `0.5em 0`
};

const ListItem =  props =>
  <span key={props.index}>
    {props.index>0 && <span>, </span>}
    <Link to={"/tags/"+props.item+"/"}>{props.item}</Link>
  </span>

export default class extends React.Component {
  render() {

    const { node } = this.props;

    const title = node.fields && node.fields.slug ? (
        <Link to={node.fields.slug} style={{color:'black'}}>
          {node.frontmatter.title}
        </Link>
    ):(
        <span>{node.frontmatter.title}</span>
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
      <Header as='h2' style={titleStyle}>
        {title}
        { node.frontmatter.date &&
        <Header.Subheader>
          {timeAgo.format(new Date(node.frontmatter.date))} &mdash;
          {" "+node.timeToRead} mins read {tagsOrCategory}
        </Header.Subheader>
        }
      </Header>
    );
  }
}
