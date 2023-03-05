import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div style={{ display: "flex", gap: 20 }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/auth">Auth</NavLink>
      </div>
      <hr />
    </nav>
  );
}

export default Navbar;
