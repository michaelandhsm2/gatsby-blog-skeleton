import React from "react";
import Link from "gatsby-link";
import {Header, Segment} from 'semantic-ui-react'
import PostTitle from "../components/postTitle"
import Navigation from "../components/navigation"

const titleStyle = {
  margin: `0.5em 0`
};

export default class extends React.Component {
  render() {

    const { edges, totalCount, pathContext, titleConnection } = this.props;

    const style = titleConnection ? {padding:`0 2rem`, margin:`1.5rem 0`} : {margin:`1.5rem 0`}

    return(
      <div>{titleConnection &&
        <Header as='h2' style={titleStyle}>
          {totalCount} post{totalCount === 1 ? "" : "s"} {titleConnection} "{pathContext.key}"
        </Header>
        }
        {edges.map(({node}) => {
          return(
            <Segment vertical style={{padding:'0.5em 0rem 1.5em'}} key={node.fields.slug}>
              <PostTitle node={node}/>
              <Link to={node.fields.slug} style={{color:'rgba(0, 0, 0, .87)'}}>
                <p>{(node.frontmatter.excerpt) ? node.frontmatter.excerpt : node.excerpt}</p>
              </Link>
            </Segment>
          );
        })}
        <Navigation context={pathContext}/>
      </div>
    );
  }
}

export const query = graphql`
  fragment queryPageFragment on MarkdownRemark {
    frontmatter {
      title
      date(formatString: "YYYY-MM-DDTHH:mm:ssZ")
      excerpt
    }
    timeToRead
    excerpt
    fields{
      slug
    }
  }
`;
