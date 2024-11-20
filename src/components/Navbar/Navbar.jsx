import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav>
      <a href="#" className="logo">
        Sound<span className="red">Design</span>
      </a>
      <ul className="nav-links">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Course Details</a>
        </li>
        <li>
          <a href="#">Blog</a>
        </li>
        <li>
          <a href="#">Testimonial</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
