import "./smartInvestor.css";
import smartInvestorScreenshot1 from "../../../../public/content/smartInvestorScreenshot1.png";
import smartInvestorScreenshot2 from "../../../../public/content/smartInvestorScreenshot2.png";
import smartInvestorScreenshot3 from "../../../../public/content/smartInvestorScreenshot3.png";
import Image from "next/image";

const SmartInvestor = () => {
  return (
    <div className="container smartInvestor">
      <h2>Smart Investor Platform, Intelligent Portfolio Management.</h2>
      <p>
        A platform that allows users to manage their portfolio, set future
        buy/sell orders, and analyze their portfolio.
      </p>
      <ul className="smartInvestor__ul">
        <li>
          Features: Portfolio management, AI trading agent, trades
          documentation, portfolio analysis.
        </li>
        <li>Frontend: Next.js, CSS / SCSS.</li>
        <li>
          Backend: Node.js, FeathersJS Services, Flask Services, MongoDB,
          Javascript / Typescript.
        </li>
      </ul>
      <button
        className="smartInvestor__button-primary"
        onClick={() => window.open("https://smart-investor.onrender.com")}
      >
        Smart Investor Platform
      </button>
      <button
        className="smartInvestor__button-secondary"
        onClick={() =>
          window.open("https://github.com/ShayBenIshay/Smart-Investor")
        }
      >
        Check Source Code
      </button>
      <div className="smartInvestor__img-container">
        <Image src={smartInvestorScreenshot1} alt="Smart Investor" />
        <Image src={smartInvestorScreenshot2} alt="Smart Investor" />
        <Image src={smartInvestorScreenshot3} alt="Smart Investor" />
      </div>
      {/* src={smartInvestorScreenshots}
        alt="Smart Investor"
      /> */}
    </div>
  );
};

export default SmartInvestor;
