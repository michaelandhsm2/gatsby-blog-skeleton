import React from "react";
import Helmet from 'react-helmet';
import Container from "../components/container";
import Header from "../components/header";
import Footer from "../components/footer";

require("prismjs/themes/prism-tomorrow.css");

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
        <div>
          <Helmet>
            <title>TBD</title>
          </Helmet>
          <Container>
            <div style={{margin:`0`}}>
              <Header style={{marginTop: `1.25rem`}} title={data.site.siteMetadata.title} pages={data.allMarkdownRemark.edges}/>
              {children()}
            </div>
            <Footer/>
          </Container>
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
