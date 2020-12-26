import React from "react";

import "./Header.css";

function Header({ children }) {
  return <header className="app-header">{children}</header>;
}

export default Header;
