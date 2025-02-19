import "./surgicalClinic.css";

import Image from "next/image";
import surgicalClinicScreenshot1 from "../../../../public/content/surgical-clinic-screenshot1.png";
import surgicalClinicScreenshot2 from "../../../../public/content/surgical-clinic-screenshot2.png";
import surgicalClinicScreenshot3 from "../../../../public/content/surgical-clinic-screenshot3.png";

const SurgicalClinic = () => {
  return (
    <div className="container surgicalClinic">
      <h2>Surgical Clinic</h2>
      <p>A modern website for a surgical Oncology surgery.</p>
      <ul className="surgicalClinic__ul">
        <li>Figma</li>
        <li>WordPress</li>
        <li>CSS</li>
        <li>JavaScript</li>
      </ul>
      <button
        className="surgicalClinic__button"
        onClick={() => window.open("https://offirsurg.shaytechsolutions.com")}
      >
        Visit Website
      </button>
      <div className="surgicalClinic__img-container">
        <Image src={surgicalClinicScreenshot1} alt="Surgical Clinic" />
        <Image src={surgicalClinicScreenshot2} alt="Surgical Clinic" />
        <Image src={surgicalClinicScreenshot3} alt="Surgical Clinic" />
      </div>
    </div>
  );
};

export default SurgicalClinic;
