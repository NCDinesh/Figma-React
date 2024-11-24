import React from "react";
import "./Footer.css";
import { facebookicon, twitter, instagram } from "../../assets";

const Footer = () => {
  return (
    <footer className="black">
      <div className="wrapper">
        <div className="content-container">
          <div className="links">
            <a href="#" className="logo">
              Sound<span className="red">Design</span>
            </a>

            <div className="social-icons">
              <a href="#">
                <img src={facebookicon} alt="" />
              </a>

              <a href="#">
                <img src={twitter} alt="" />
              </a>

              <a href="#">
                <img src={instagram} alt="" />
              </a>
            </div>

            <div className="copyright">
              This website is designed by NCDinesh Ⓒ 2024
            </div>
          </div>

          <div className="links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                {" "}
                <a href="#">Blog</a>{" "}
              </li>
              <li>
                {" "}
                <a href="">Privacy Policy </a>
              </li>
            </ul>
          </div>

          <div className="links">
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="">Contact@gmail.com</a>
              </li>
              <li>
                {" "}
                <a href="">+977 980000000000</a>
              </li>
            </ul>
          </div>

          <div className="copyright mobile">
            This website is designed by NCDinesh Ⓒ 2024
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
