"use client";
import "./timeline.css";

const TimeLine = ({ children }) => {
  return (
    <div className="timeline">
      <div className="timeline-line"></div>
      <div className="container timeline-content">{children}</div>
      <div className="timeline-bottom"></div>
    </div>
  );
};

export const TimeLineItem = ({ years, children }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-connector"></div>
      <div className="years-box">
        <h3>{years}</h3>
      </div>
      <div className="timeline-item-content">{children}</div>
    </div>
  );
};

export default TimeLine;
