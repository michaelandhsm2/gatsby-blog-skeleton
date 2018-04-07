import React from "react";
import Link from "gatsby-link";

const linkStyle = {
  backgroundImage: `none`,
  textShadow: `none`
};

const listStyle = {
  listStyle: `none`,
  float: `right`
};

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default class extends React.Component {
  render() {
    const { title, pages } = this.props;
    return(
      <header>
        <Link to="/blog/" style={linkStyle}>
          <h2 style={{display:`inline`}}>{title}</h2>
        </Link>
        <ul style={listStyle}>
          <ListLink to="/blog/">Home</ListLink>
          {pages.map(({ node }) => (
            <ListLink to={node.fields.slug}  key={node.fields.slug}>{node.frontmatter.title}</ListLink>
          ))}
        </ul>
      </header>
    );
  }
}
