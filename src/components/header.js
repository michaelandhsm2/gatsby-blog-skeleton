import React from "react";
import Link from "gatsby-link";
import {
  Container,
  Menu,
  Segment,
  Responsive,
  Dropdown
} from 'semantic-ui-react'

const dropdownStyle = {
  color:'rgba(0, 0, 0, .87)'
}

export default class extends React.Component {
  render() {
    const { title, pages } = this.props;

    const mobileMenu = (
      <Menu fixed='top' inverted>
        <Container text>
          <Menu.Item header>
            <Link to="/">{title}</Link>
          </Menu.Item>
          <Dropdown item text="Menu">
            <Dropdown.Menu >
              <Dropdown.Item >
                <Link to="/blog" style={dropdownStyle}>Blog</Link>
              </Dropdown.Item>
              {pages.map(({ node }) => (
                <Dropdown.Item key={node.fields.slug}>
                  <Link to={node.fields.slug}  style={dropdownStyle}>{node.frontmatter.title}</Link>
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>
    )

    const notMobileMenu = (
      <Menu fixed='top' inverted>
        <Container text>
          <Menu.Item header>
            <Link to="/">{title}</Link>
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
    )

    return(
      <header>
        <Responsive as={Segment} {...Responsive.onlyMobile}>
          {mobileMenu}
        </Responsive>
        <Responsive as={Segment} {...Responsive.onlyTablet}>
          {notMobileMenu}
        </Responsive>
        <Responsive as={Segment} {...Responsive.onlyComputer}>
          {notMobileMenu}
        </Responsive>
      </header>
    );
  }
}
