import React from "react";
import "./Navbar.css";
import menuicon from "../../assets/menuicon.svg";
import closeicon from "../../assets/closeicon.png";

const Navbar = () => {
  return (
    <>
      <nav>
        <a href="#" className="logo">
          Sound<span className="red">Design</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#info">About</a>
          </li>
          <li>
            <a href="#topics">Course Details</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#testimonials">Testimonial</a>
          </li>
        </ul>

        <div className="menu-icon">
          <img src={menuicon} alt="" />
        </div>
      </nav>

      <div className="mobile-menu-container">
        <div className="close-icon">
          <img src={closeicon} alt="" />
        </div>

        <ul className="menu-items">
          <li>
            <a href="#info">About</a>
          </li>
          <li>
            <a href="#topics">Course Details</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#testimonials">Testimonial</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
