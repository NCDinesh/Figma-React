import React, { useState } from "react";
import "./Navbar.css";
import menuicon from "../../assets/menuicon.svg";
import closeicon from "../../assets/closeicon.png";

const Navbar = () => {
  const [Isactive, setIsactive] = useState(false);
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

        <div onClick={() => setIsactive(true)} className="menu-icon">
          <img src={menuicon} alt="" />
        </div>
      </nav>

      <div className={`mobile-menu-container ${Isactive ? "active" : ""}`}>
        <div onClick={() => setIsactive(false)} className="close-icon">
          <img src={closeicon} alt="" />
        </div>

        <ul className="menu-items">
          <li>
            <a onClick={() => setIsactive(false)} href="#info">
              About
            </a>
          </li>
          <li>
            <a onClick={() => setIsactive(false)} href="#topics">
              Course Details
            </a>
          </li>
          <li>
            <a onClick={() => setIsactive(false)} href="#blog">
              Blog
            </a>
          </li>
          <li>
            <a onClick={() => setIsactive(false)} href="#testimonials">
              Testimonial
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
