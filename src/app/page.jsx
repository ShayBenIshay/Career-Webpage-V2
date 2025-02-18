"use client";
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import TimeLine, { TimeLineItem } from "../Components/TimeLine/TimeLine";
import Freelance from "../Components/TimeLine/Freelance/Freelance";
import Amdocs from "../Components/TimeLine/Amdocs/Amdocs";
import Technion from "../Components/TimeLine/Technion/Technion";
import Skills from "../Components/Skills/Skills";
import Contact from "../Components/Contact/Contact";
import Footer from "../Components/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero title="SHAY BEN ISHAY" />
      <TimeLine>
        <TimeLineItem years="2024 - 2025">
          <Freelance />
        </TimeLineItem>
        <TimeLineItem years="2021 - 2023">
          <Amdocs />
        </TimeLineItem>
        <TimeLineItem years="2017 - 2021">
          <Technion />
        </TimeLineItem>
      </TimeLine>
      <Skills />
      <Contact />
      <Footer />
    </>
  );
};

export default HomePage;
