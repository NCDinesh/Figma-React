import React from "react";
import "./Info.css";
import studenticon from "../../assets/student-icon.svg";
import videoicon from "../../assets/video-icon.svg";
import group2 from "../../assets/Group2.svg";

const Info = () => {
  return (
    <section id="info" className="dark-gray">
      <div className="wrapper">
        <div className="content-container">
          <div className="info-content">
            <img src={studenticon} alt="" />
            <div className="amount">23,000+</div>
            <div className="type">Students</div>
          </div>

          <div className="info-content">
            <img src={videoicon} alt="" />
            <div className="amount">26 Hrs</div>
            <div className="type">Video Content</div>
          </div>
        </div>

        <img src={group2} className="bg-element-2" alt="" />
      </div>
    </section>
  );
};

export default Info;
