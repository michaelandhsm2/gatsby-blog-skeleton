import React from "react"
import Link from "gatsby-link";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Responsive,
  Icon,
  Sidebar,
  Button
} from 'semantic-ui-react'


const style = {
  backgroundColor: `#f7f7f7`
};


/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */


export default class extends React.Component {
  render() {
    const fixed = false
    return (
      <div style={style}>
        <FixedMenuLayout/>
      </div>
    );
  }
};



const FixedMenuLayout = () => (
  <div>
    <Segment>
      <Menu fixed='top' inverted>
        <Container>
           <Menu.Item as='a' header>
            <Image
              size='mini'
              src='//react.semantic-ui.com/logo.png'
              style={{ marginRight: '1.5em' }}
            />
            Project Name
          </Menu.Item>
          <Menu.Item as='a'>Home</Menu.Item>

          <Dropdown item simple text='Dropdown'>
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Header Item</Dropdown.Header>
              <Dropdown.Item>
                <i className='dropdown icon' />
                <span className='text'>Submenu</span>
                <Dropdown.Menu>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>
    </Segment>
    <Container text textAlign='justified' style={{ paddingTop: '7em' }}>
      <Header as='h1'>Semantic UI React Fixed Template 我看看</Header>
      <p>This is a basic fixed menu template using fixed size containers.</p>
      <p>A text container is used for the main container, which is useful for single column layouts.</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur malesuada vestibulum dignissim. Fusce vulputate condimentum arcu. Pellentesque nunc enim, porttitor ut magna in, efficitur sollicitudin tortor. Sed quam ipsum, pulvinar tempor congue quis, ultrices mollis arcu. Phasellus consequat justo eget dapibus volutpat. Curabitur diam turpis, tempor eu velit a, tempus iaculis velit. Proin finibus est ut eros vehicula vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <p>Pellentesque vitae magna nec massa luctus ultrices eget id augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis eu egestas ipsum. Fusce vitae mi vel lorem vehicula ultrices ut sit amet ante. Nulla iaculis ut velit et aliquet. Aliquam vel laoreet libero, at placerat turpis. Donec a commodo odio. Curabitur porta consectetur nisi, ut bibendum lectus pharetra a. Donec egestas molestie arcu, eget suscipit dolor pretium pharetra. Curabitur in mi sit amet nisl faucibus tempus. Nullam condimentum turpis nec dui iaculis, sit amet eleifend nisi dictum. Nulla venenatis a metus sit amet blandit. Quisque iaculis lobortis venenatis. Mauris est tortor, vulputate sit amet mauris a, eleifend mollis justo. Donec nunc ipsum, pharetra a dui non, porta tincidunt nibh. Vestibulum dignissim sagittis faucibus.</p>

      <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi vitae dui pulvinar libero mollis luctus. Proin quis rutrum massa. Vivamus eget erat sit amet dui posuere dignissim ac eu eros. In pharetra dolor vel lorem venenatis maximus. Donec euismod ut urna nec mollis. In laoreet ullamcorper sem ac convallis. Pellentesque egestas vel augue at hendrerit. Duis blandit accumsan dolor, vitae viverra lectus euismod et. Duis est mauris, pellentesque non iaculis ut, suscipit nec augue. Nulla congue felis ligula, non facilisis dui eleifend ut. Maecenas at rhoncus est. Sed sit amet placerat arcu. Nam consequat, mi vel congue hendrerit, tellus felis consequat diam, in ullamcorper ipsum ante et turpis. Donec faucibus nulla sapien, finibus venenatis nisl tempor nec.</p>

      <p>Etiam quis maximus massa, vitae mollis ipsum. Duis malesuada odio vitae magna fringilla, sit amet viverra justo vulputate. Vivamus odio libero, convallis quis facilisis a, aliquet non turpis. Aenean egestas porta nulla ac gravida. Vestibulum euismod enim et nunc finibus faucibus. Maecenas rutrum, tellus sed tempus porttitor, nunc arcu sagittis purus, non tincidunt quam arcu eget quam. Mauris at tortor sed nisi elementum suscipit eget quis tellus. Fusce turpis eros, luctus eu imperdiet eget, sagittis a metus. Aliquam congue venenatis nisl ac tincidunt. Vestibulum non fringilla erat. Praesent et faucibus leo, quis dapibus felis. Etiam eu magna lorem.</p>

      <p>Cras mattis, dolor at pellentesque gravida, erat massa iaculis nisi, a hendrerit nunc nibh vel nunc. Integer pretium sed tortor non pretium. Quisque consectetur vestibulum mollis. Proin aliquet ac arcu a sodales. In in massa id ligula laoreet eleifend fringilla eget arcu. Praesent porttitor tellus eu dolor lobortis sollicitudin. Donec iaculis quis enim at imperdiet. Etiam libero magna, lobortis ut vehicula nec, dignissim a diam. Nunc nec viverra tortor, at consequat quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras ante velit, pulvinar vel est non, ornare suscipit dui.</p>
    </Container>

    <Segment vertical
    style={{ paddingTop: '2em' }} >
      <Container textAlign='center'>
        <Grid columns='equal' divided stackable  verticalAlign='middle'>
          <Grid.Row only='computer tablet'>
            <Grid.Column
            style={{ padding: '1em 0em' }}>
              <Header as='h4' content='Previous in this Category' />
              <List horizontal link>
                <List.Item><Link to='/test'>The Previous Post</Link></List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={6}
            style={{ padding: '1em 0em' }}>
              <Header as='h4' content="Tags" />
              <List horizontal link>
                <List.Item><Link to='/test'>NULL</Link></List.Item>
                <List.Item><Link to='/test'>TestTag</Link></List.Item>
                <List.Item><Link to='/test'>Other Tag</Link></List.Item>
                <List.Item><Link to='/test'>Econ2016</Link></List.Item>
              </List>
            </Grid.Column>
            <Grid.Column
            style={{ padding: '1em 0em' }}>
              <Header as='h4' content='Next in this Category' />
              <List horizontal link>
                <List.Item><Link to='/test'>The Next Post</Link></List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row only="mobile">
            <Grid.Column>
              <Header as='h4' content="Tags" />
              <List horizontal link>
                <List.Item><Link to='/test'>NULL</Link></List.Item>
                <List.Item><Link to='/test'>TestTag</Link></List.Item>
                <List.Item><Link to='/test'>Other Tag</Link></List.Item>
                <List.Item><Link to='/test'>Econ2016</Link></List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Header as='h4' content='Previous in this Category' />
              <List horizontal link>
                <List.Item as='a' href='#'>The Previous Post</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column >
              <Header as='h4' content='Next in this Category' />
              <List horizontal link>
                <List.Item as='a' href='#'>The Next Post</List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>

    <Segment inverted vertical>
      <Container text textAlign='center'>
        <List horizontal inverted link >
          <List.Item>
          </List.Item>
          <List.Item as='a' href='//www.google.com'><Icon size='large'  name='mail' /></List.Item>
          <List.Item as='a' href='#'><Icon size='large'  name='facebook f' /></List.Item>
          <List.Item as='a' href='#'><Icon size='large'  name='twitter' /></List.Item>
          <List.Item as='a' href='#'><Icon size='large'  name='github' /></List.Item>
        </List>
      </Container>
    </Segment>
  </div>
)
