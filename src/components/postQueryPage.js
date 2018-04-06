import React from "react";
import PostQuery from "../components/postQuery"
import Navigation from "../components/navigation"

export default class extends React.Component {
  render() {

    const { edges, totalCount, pathContext, titleConnection } = this.props;

    return(
      <div style={{margin:`1.5rem 0`}}>{titleConnection &&
        <h2 >{totalCount} post{totalCount === 1 ? "" : "s"} {titleConnection} "{pathContext.key}"</h2>
      }
        <ol style={{margin:`1.5rem 0`, padding:`0 2rem`}} >
          {edges.map(({ node }) => {
            return (
              <PostQuery key={node.fields.slug} node={node}/>
            );
          })}
        </ol>
        <Navigation context={pathContext}/>
      </div>
    );
  }
}
