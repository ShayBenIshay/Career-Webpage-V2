"use client";
import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
import "./projects.css";
import Hero from "../Hero/Hero";
import Header from "../Header/Header";
import MatrixAgent from "./MatrixAgent/MatrixAgent";
import SurgicalClinic from "./SurgicalClinic/SurgicalClinic";
import SmartInvestor from "./SmartInvestor/SmartInvestor";
import Footer from "../Footer/Footer";

const Projects = () => {
  const handleLeave = (origin, destination, direction) => {
    // console.log(origin, destination, direction);
  };

  const anchors = ["Hero", "MatrixAgent", "SurgicalClinic", "SmartInvestor"];

  return (
    <ReactFullpage
      licenseKey="3xXu3&L^u5"
      scrollingSpeed={1000}
      autoScrolling={true}
      scrollHorizontally={true}
      navigation={false}
      onLeave={handleLeave}
      navigationTooltips={anchors}
      sectionsColor={["#fffcf3", "#2b2e2a", "#385b63", "#9e6d40"]}
      anchors={anchors}
      render={({ state, fullpageApi }) => (
        <div id="fullpage">
          <div className="section">
            <Header />
            <Hero title="PROJECTS" />
          </div>
          <div className="section page1">
            <Header />
            <div className="section-content">
              <MatrixAgent />
            </div>
          </div>
          <div className="section page2">
            <Header />
            <div className="section-content">
              <SurgicalClinic />
            </div>
          </div>
          <div className="section page3" id="section-include-footer">
            <Header />
            <div className="section-content">
              <SmartInvestor />
            </div>
            <Footer />
          </div>
        </div>
      )}
    />
  );
};

export default Projects;
