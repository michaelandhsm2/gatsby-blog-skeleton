import React from "react"
import Link from "gatsby-link";
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'
import Footer from "../components/footer";

const bodyStyle = {
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  backgroundColor: `#1B1C1D`
};

export default class extends React.Component {
  render() {
    const {landing} = this.props.data.site.siteMetadata;

    const notMobileLanding = (
      <Container text style={{flex:1}}>
        <Header
          as='h1'
          content={landing.title}
          inverted
          style={{
            fontSize: '4em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '3em',
          }}
        />
        <Header
          as='h2'
          content={landing.subtitle}
          inverted
          style={{
            fontSize: '1.7em',
            fontWeight: 'normal',
            margin: '1.7em 0em',
          }}
        />
        <Link to='/blog'>
          <Button primary size='huge'>
            {landing.callToAction}
            <Icon name='right arrow' />
          </Button>
        </Link>
      </Container>
    )

    const mobileLanding = (
      <Container text>
        <Header
          as='h1'
          content={landing.title}
          inverted
          style={{
            fontSize: '3em',
            fontWeight: 'normal',
            marginBottom: 0,
            marginTop: '2em',
          }}
        />
        <Header
          as='h2'
          content={landing.subtitle}
          inverted
          style={{
            fontSize: '1.6em',
            fontWeight: 'normal',
            margin: '2.4em 0',
          }}
        />
        <Link to='/blog'>
          <Button primary size='huge'>
            {landing.callToAction}
            <Icon name='right arrow' />
          </Button>
        </Link>
      </Container>
    )

    return (
      <div style={bodyStyle}>
        <div style={{flex:1}}>
          <Responsive as={Segment} inverted textAlign='center'
             vertical maxWidth={600}>
            {mobileLanding}
          </Responsive>
          <Responsive as={Segment} inverted textAlign='center'
            style={{ padding: '1em 0em'}} vertical minWidth={600}>
            {notMobileLanding}
          </Responsive>
        </div>
        <Footer/>
      </div>
    );
  }
};

export const query = graphql`
  query landingPageQuery{
    site{
      siteMetadata {
        landing{
          title,
          subtitle,
          callToAction
        }
      }
    }
  }
`
