import "./skills.css";
import backend1 from "../../../public/backend/backend-1.png";
import backend2 from "../../../public/backend/backend-2.png";
import backend3 from "../../../public/backend/backend-3.png";
import backend4 from "../../../public/backend/backend-4.png";
import backend5 from "../../../public/backend/backend-5.png";
import backend6 from "../../../public/backend/backend-6.png";
import backend7 from "../../../public/backend/backend-7.png";
import frontend1 from "../../../public/frontend/frontend-1.png";
import frontend2 from "../../../public/frontend/frontend-2.png";
import frontend3 from "../../../public/frontend/frontend-3.png";
import frontend4 from "../../../public/frontend/frontend-4.png";
import frontend5 from "../../../public/frontend/frontend-5.png";
import frontend6 from "../../../public/frontend/frontend-6.png";
import frontend7 from "../../../public/frontend/frontend-7.png";
import tools1 from "../../../public/tools/tools-1.png";
import tools2 from "../../../public/tools/tools-2.png";
import tools3 from "../../../public/tools/tools-3.png";
import tools4 from "../../../public/tools/tools-4.png";
import tools5 from "../../../public/tools/tools-5.png";
import tools6 from "../../../public/tools/tools-6.png";
import tools7 from "../../../public/tools/tools-7.png";
import tools8 from "../../../public/tools/tools-8.png";
import Image from "next/image";

const Skills = () => {
  return (
    <section className="container skills">
      <h3>Backend knowledge</h3>
      <div className="skills-backend">
        <div className="skills-backend-item">
          <img src={backend1} alt="backend1" />
          <p>Node.js</p>
        </div>
        <div className="skills-backend-item">
          <img src={backend2} alt="backend2" />
          <p>Feathers</p>
        </div>
        <div className="skills-backend-item">
          <img src={backend3} alt="backend3" />
          <p>Flask</p>
        </div>
        <div className="skills-backend-item">
          <img src={backend4} alt="backend4" />
          <p>OpenAI</p>
        </div>
        <div className="skills-backend-item">
          <img src={backend5} alt="backend5" />
          <p>MongoDB</p>
        </div>
        <div className="skills-backend-item">
          <img src={backend6} alt="backend6" />
          <p>Express</p>
        </div>
        <div className="skills-backend-item">
          <img src={backend7} alt="backend7" />
          <p>Spring</p>
        </div>
      </div>
      <h3>Frontend knowledge</h3>
      <div className="skills-frontend">
        <div className="skills-frontend-item">
          <img src={frontend1} alt="frontend1" />
          <p>Next.js</p>
        </div>
        <div className="skills-frontend-item">
          <img src={frontend2} alt="frontend2" />
          <p>React</p>
        </div>
        <div className="skills-frontend-item">
          <img src={frontend3} alt="frontend3" />
          <p>CSS</p>
        </div>
        <div className="skills-frontend-item">
          <img src={frontend4} alt="frontend4" />
          <p>HTML</p>
        </div>
        <div className="skills-frontend-item">
          <img src={frontend5} alt="frontend5" />
          <p>Figma</p>
        </div>
        <div className="skills-frontend-item">
          <img src={frontend6} alt="frontend6" />
          <p>WordPress</p>
        </div>
        <div className="skills-frontend-item">
          <img src={frontend7} alt="frontend7" />
          <p>Elementor</p>
        </div>
      </div>
      <h3>Tools and Languages </h3>
      <div className="skills-tools">
        <div className="skills-tools-item">
          <img src={tools1} alt="tools1" />
          <p>Python</p>
        </div>
        <div className="skills-tools-item">
          <img src={tools2} alt="tools2" />
          <p>Java</p>
        </div>
        <div className="skills-tools-item">
          <img src={tools3} alt="tools3" />
          <p>Javascript</p>
        </div>
        <div className="skills-tools-item">
          <img src={tools4} alt="tools4" />
          <p>Git</p>
        </div>
        <div className="skills-tools-item">
          <img src={tools5} alt="tools5" />
          <p>Postman</p>
        </div>
        <div className="skills-tools-item">
          <img src={tools6} alt="tools6" />
          <p>Bitbucket</p>
        </div>
        <div className="skills-tools-item">
          <img src={tools7} alt="tools7" />
          <p>Kubernetes</p>
        </div>
        <div className="skills-tools-item">
          <img src={tools8} alt="tools8" />
          <p>Maven</p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
