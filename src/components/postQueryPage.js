import React from "react";
import PostQuery from "../components/postQuery"
import Navigation from "../components/navigation"

export default class extends React.Component {
  render() {

    const { edges, totalCount, pathContext, titleConnection } = this.props;

    const style = titleConnection ? {padding:`0 2rem`, margin:`1.5rem 0`} : {margin:`1.5rem 0`}

    return(
      <div style={{}}>{titleConnection &&
        <h2 >{totalCount} post{totalCount === 1 ? "" : "s"} {titleConnection} "{pathContext.key}"</h2>
      }
        <ol style={style} >
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
