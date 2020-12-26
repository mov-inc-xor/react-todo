import React from "react";

function CenterContainer({children}) {
  const style = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }

  return <div style={style}>{children}</div>;
}

export default CenterContainer;
