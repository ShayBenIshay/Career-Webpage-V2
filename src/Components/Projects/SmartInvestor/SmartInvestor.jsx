import "./smartInvestor.css";
import smartInvestorScreenshots from "../../../../public/content/smart-investor-screenshots.png";
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
      <Image
        className="smartInvestor__img"
        src={smartInvestorScreenshots}
        alt="Smart Investor"
      />
    </div>
  );
};

export default SmartInvestor;
