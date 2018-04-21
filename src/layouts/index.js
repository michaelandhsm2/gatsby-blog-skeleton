import React from "react";
import Helmet from 'react-helmet';
import {Container} from 'semantic-ui-react';
import Header from "../components/header";
import Footer from "../components/footer";
import favicon from './favicon.ico';

require ("semantic-ui-css/semantic.min.css");

const bodyStyle = {
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  backgroundColor: `#f7f7f7`
};

export default class extends React.Component {
  render() {
    const { children, location, data } = this.props;

    const mainText = (location.pathname=='/') ? (
      <span style={bodyStyle}>{children()}</span>
    ) : (
      <div style={bodyStyle}>
        <Header title={data.site.siteMetadata.title} pages={data.allMarkdownRemark.edges}/>
        <Container style={{flex: 1, padding: '2rem'}} text>
          {children()}
        </Container>
        <Footer/>
      </div>
    )

    return(
      <div style={bodyStyle}>
        <Helmet>
          <title>{data.site.siteMetadata.title}</title>
          <link rel="shortcut icon" type="image/png" href={favicon} />
        </Helmet>
        {mainText}
      </div>
    );
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
      filter:{fields:{sourceName:{eq:"pages"}}},
      sort: {fields: [frontmatter___title], order: ASC},
    ){
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
