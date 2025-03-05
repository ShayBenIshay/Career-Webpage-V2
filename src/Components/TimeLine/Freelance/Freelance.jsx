import "./freelance.css";
import Works from "./Works/Works";
import Card from "./Works/Card/Card";

import image1 from "../../../../public/surgical-clinic/figma-one.png";
import image2 from "../../../../public/surgical-clinic/Figma2.png";
import image3 from "../../../../public/surgical-clinic/Figma3.png";

const Freelance = () => {
  return (
    <section className="freelance">
      <h2>Web Design & Development, Freelance</h2>
      <ul className="freelance__ul">
        <li>Business, E-Commerce pages</li>
        <li>AI Solutions</li>
        <li>Web Services</li>
      </ul>
      <p>
        I Design and Develop custom solutions for my customers suited for their
        needs.
      </p>
      <button
        className="freelance__button"
        onClick={() => window.open("https://shaytechsolutions.com")}
      >
        Shay Tech Solutions Website
      </button>
      <Works>
        <Card
          title="BUSINESS WEBSITE"
          subtitle="Surgical Clinic"
          url="https://offirsurg.shaytechsolutions.com"
          images={[image1, image2, image3]}
        />
        <Card title="E-COMMERCE WEBSITE" subtitle="Jewelry Store" />
      </Works>
    </section>
  );
};

export default Freelance;
