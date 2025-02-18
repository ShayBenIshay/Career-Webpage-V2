import "./surgicalClinic.css";
import surgicalClinicDesign from "../../../../public/content/surgical-clinic-design.png";
import Image from "next/image";

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
      <Image
        className="surgicalClinic__img"
        src={surgicalClinicDesign}
        alt="Surgical Clinic Design"
      />
    </div>
  );
};

export default SurgicalClinic;
