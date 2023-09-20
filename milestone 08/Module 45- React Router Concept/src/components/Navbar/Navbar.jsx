import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="flex gap-x-10 justify-center mt-5">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact Us</NavLink>
        <NavLink to="/users">User</NavLink>
        <NavLink to="/comments">Comments</NavLink>
      </nav>
    </div>
  );
};

export default Navbar;
