import React from "react";

const divStyle = {
  maxWidth: 800,
  padding: `0 1rem`,
  margin: `1.5rem auto 0 auto`
};

export default ({ children }) => (
  <div style={divStyle}>
    {children}
  </div>
);
