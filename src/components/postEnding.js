import React from "react";
import Link from "gatsby-link";
import {
  Container,
  Grid,
  Header,
  List,
  Segment
} from 'semantic-ui-react'

const computerStyle = {
  padding: '1em 1em',
  minHeight: '6em'
};


export default class extends React.Component {
  render() {

    const { post, path } = this.props;
    const { next, prev } = path;

    const tagSection = (
      <div>
        <Header as='h4' content="Tags" />
        <List horizontal link>{
          post.frontmatter.tags.map((item, i) => (
            <List.Item key={i}>
              <Link to={"/tags/"+item+"/"}>{item}</Link>
            </List.Item>
          ))
        }</List>
      </div>
    )

    const prevSection = ( prev &&
      <div>
        <Header as='h4' content='Previous in this Category' />
        <List horizontal link>
          <List.Item><Link to={prev.fields.slug}>{prev.frontmatter.title}</Link></List.Item>
        </List>
      </div>
    )

    const nextSection = ( next &&
      <div>
        <Header as='h4' content='Next in this Category' />
        <List horizontal link>
          <List.Item><Link to={next.fields.slug}>{next.frontmatter.title}</Link></List.Item>
        </List>
      </div>
    )

    return(

      <Segment vertical
      style={{ paddingTop: '2em' }} >
        <Container textAlign='center'>
          <Grid columns='equal' divided stackable  verticalAlign='middle'>

            <Grid.Row only='computer tablet'>
              <Grid.Column style={computerStyle}>
                {prevSection}
              </Grid.Column>
              <Grid.Column style={computerStyle} width={6}>
                {tagSection}
              </Grid.Column>
              <Grid.Column style={computerStyle}>
                {nextSection}
              </Grid.Column>
            </Grid.Row>

            <Grid.Row only="mobile">
              <Grid.Column>
                {tagSection}
              </Grid.Column>
              { prev &&                
                <Grid.Column>
                  {prevSection}
                </Grid.Column>
              }
              { next &&
                <Grid.Column >
                  {nextSection}
                </Grid.Column>
              }
            </Grid.Row>

          </Grid>
        </Container>
      </Segment>

    );
  }
}
