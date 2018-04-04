import React from "react";
import Link from "gatsby-link";

const ListLink = props =>
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default class extends React.Component {
  render() {
    const { children, location, data } = this.props;
    if(location.pathname == "/"){
      return(
        <div>
        {children()}
        </div>
      );
    }else{
      return(

        <div style={{ textAlign:`justify` }}>
          <header style={{ margin: `0 auto`, maxWidth: 800, paddingTop: `1.25rem`}}>
            <Link to="/blog/" style={{ textShadow: `none`, backgroundImage: `none` }}>
              <h2 style={{ display: `inline` }}>{data.site.siteMetadata.title}</h2>
            </Link>
            <ul style={{ listStyle: `none`, float: `right` }}>
              <ListLink to="/blog/">Home</ListLink>
              {data.allMarkdownRemark.edges.map(({ node }) => (
                <ListLink to={node.fields.slug}>{node.frontmatter.title}</ListLink>
              ))}
            </ul>
          </header>
          <div style={{ margin: `1rem auto`, maxWidth: 800}}>
            {children()}
          </div>
          <footer style={{ margin: `2.5rem auto 0 auto`, maxWidth: 800, textAlign:`center`, padding: `1.25rem 0`, borderTop: `1px solid #c5c5c5`}}>
              <span>© 2018 by Michael Fu</span>
              <ul style={{ listStyle: `none`, marginBottom: `0`, paddingBottom: `0`}}>
                <ListLink to="/blog/">Home</ListLink>
                <ListLink to="/about/">About</ListLink>
                <ListLink to="/test/">Test</ListLink>
              </ul>
          </footer>
        </div>
      );
    }
  }
}

export const query = graphql`
  query SiteNameQuery{
    site{
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      filter:{fields:{sourceName:{eq:"pages"}}}){
      edges{
        node{
          frontmatter{
            title
          }
          fields{
            slug
          }
        }
      }
    }
  }
`
