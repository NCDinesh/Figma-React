import React, { useState } from "react";
import "./Topics.css";
import {
  post1,
  post2,
  post3,
  post4,
  post5,
  post6,
  post7,
  post8,
  bgelement1,
} from "../../assets";

const Topics = () => {
  const [currentImage, setCurrentImage] = useState(post2);
  return (
    <section id="topics" className="black">
      <div className="wrapper">
        <h2> What will you learn?</h2>
        <div className="content-container">
          <ul>
            <li onMouseEnter={() => setCurrentImage(post2)}>
              What are frequencies
            </li>
            <li onMouseEnter={() => setCurrentImage(post1)}>Using DAW</li>
            <li onMouseEnter={() => setCurrentImage(post3)}>
              Vocals Processing
            </li>
            <li onMouseEnter={() => setCurrentImage(post4)}>Mixing </li>
            <li onMouseEnter={() => setCurrentImage(post5)}>Mixing Console</li>
            <li onMouseEnter={() => setCurrentImage(post6)}>Mastering</li>
          </ul>

          <div className="topic-image">
            <img src={currentImage} alt="" />
          </div>
        </div>
        <img src={bgelement1} className="bg-element-1" alt="" />
      </div>
    </section>
  );
};

export default Topics;
