import React from "react";
import Link from "gatsby-link";
import {
  Container,
  Menu,
  Segment
} from 'semantic-ui-react'

export default class extends React.Component {
  render() {
    const { title, pages } = this.props;
    return(
      <header>
        <Segment>
          <Menu fixed='top' inverted>
            <Container text>
              <Menu.Item header>
                <Link to="/blog/">{title}</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to="/blog">Blog</Link>
              </Menu.Item>
              {pages.map(({ node }) => (
                <Menu.Item key={node.fields.slug}>
                  <Link to={node.fields.slug} >{node.frontmatter.title}</Link>
                </Menu.Item>
              ))}
            </Container>
          </Menu>
        </Segment>
      </header>
    );
  }
}
