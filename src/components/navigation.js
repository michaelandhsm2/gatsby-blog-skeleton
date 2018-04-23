import React from "react";
import Link from "gatsby-link";
import {
  Container,
  Grid,
  Header,
  List,
  Segment
} from 'semantic-ui-react'


const linkStyle = {
  color: "#818D92"
}

export default class extends React.Component {
  render() {
    const { baseSlug, numPerPage, startingIndex, totalPages} = this.props.context;
    const page = Math.floor(startingIndex/numPerPage) + 1;

    const prevSection = ( 1 <= page - 1  &&
      <div>
        <Header as='h4' content='Previous Page' />
        <List horizontal link>
          <List.Item><Link style={linkStyle}
             to={page == 2 ? baseSlug : baseSlug+(page - 1)+"/"}>Page {page-1}</Link></List.Item>
        </List>
      </div>
    )

    const nextSection = ( totalPages >= page + 1  &&
      <div>
        <Header as='h4' content='Next Page' />
        <List horizontal link>
          <List.Item><Link style={linkStyle}
             to={baseSlug+(page + 1)+"/"}>Page {page + 1}</Link></List.Item>
        </List>
      </div>
    )

    return(
      <Segment vertical>{ (1 <= page - 1 || totalPages >= page + 1 ) &&
        <Container style={{ paddingTop: '1em' }} textAlign='center'>
          <Grid columns='equal' stackable  verticalAlign='middle'>

            <Grid.Row only='computer tablet'>
              <Grid.Column>
                {prevSection}
              </Grid.Column>
              <Grid.Column>
                {nextSection}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row only="mobile">
              { 1 <= page - 1  &&
                <Grid.Column>
                  {prevSection}
                </Grid.Column> }
              { totalPages >= page + 1  &&
                <Grid.Column>
                  {nextSection}
                </Grid.Column> }
            </Grid.Row>

          </Grid>
        </Container>}
      </Segment>

    );
  }
}
