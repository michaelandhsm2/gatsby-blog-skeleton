import React from "react";
import Link from "gatsby-link";

export default class extends React.Component {
  render() {
    const { baseSlug, numPerPage, startingIndex, totalPages} = this.props.context;
    const page = Math.floor(startingIndex/numPerPage) + 1;

    return(
      <div style={{paddingBottom:`3rem` }}>
        {1 <= page - 1 &&
          <span style={{float: `left` }}>
            Previous: <Link  to={baseSlug}>
            Page {page-1} </Link>
          </span>}
        {1 < page - 1 &&
          <span style={{float: `left` }}>
            Previous: <Link  to={baseSlug+(page - 1)+"/"}>
            Page {page-1} </Link>
          </span>}
        {totalPages >= page + 1 &&
          <span style={{float: `right` }}>
            Next: <Link  to={baseSlug+(page + 1)+"/"}>
            Page {page + 1} </Link>
          </span>}
      </div>
    );
  }
}
