import React from "react";
import Link from "gatsby-link";

const footerStyle = {
  textAlign:`center`,
  padding: `1rem 0`,
  borderTop: `1px solid #c5c5c5`
};


export default class extends React.Component {
  render() {
    return(
      <footer style={footerStyle}>
          <span>© 2018 by Michael Fu</span>
      </footer>
    );
  }
}

//
// <footer style={{ margin: `2.5rem auto 0 auto`, textAlign:`center`, padding: `1.25rem 0`, borderTop: `1px solid #c5c5c5`}}>
//     <span>© 2018 by Michael Fu</span>
//     <ul style={{ listStyle: `none`, marginBottom: `0`, paddingBottom: `0`}}>
//       <ListLink to="/blog/">Home</ListLink>
//       <ListLink to="/about/">About</ListLink>
//       <ListLink to="/test/">Test</ListLink>
//     </ul>
// </footer>
