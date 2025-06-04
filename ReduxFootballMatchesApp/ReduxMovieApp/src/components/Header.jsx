import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/" style={{ margin: "10px" }}>Home</Link>
      <Link to="/login" style={{ margin: "10px" }}>Login</Link>
      <Link to="/signup" style={{ margin: "10px" }}>Signup</Link>
    </nav>
  );
};

export default Header;