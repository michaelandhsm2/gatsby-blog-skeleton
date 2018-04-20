import React from "react";
import Link from "gatsby-link";
import {
  Container,
  List,
  Segment,
  Icon,
} from 'semantic-ui-react'

export default class extends React.Component {
  render() {
    return(
      <Segment inverted vertical textAlign='center'>
        <List horizontal inverted link >
          <List.Item as='a' href='//www.google.com'><Icon size='large'  name='mail' /></List.Item>
          <List.Item as='a' href='#'><Icon size='large'  name='facebook f' /></List.Item>
          <List.Item as='a' href='#'><Icon size='large'  name='twitter' /></List.Item>
          <List.Item as='a' href='#'><Icon size='large'  name='github' /></List.Item>
        </List>
      </Segment>
    );
  }
}
