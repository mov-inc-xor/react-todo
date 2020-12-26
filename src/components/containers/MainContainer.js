import React from "react";

function MainContainer({ children }) {
  const style = {
    width: "500px",
    padding: '20px',
    height: '100%'
  };

  return <div style={style}>{children}</div>;
}

export default MainContainer;
