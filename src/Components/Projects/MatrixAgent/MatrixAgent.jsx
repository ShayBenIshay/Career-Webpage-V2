"use client";
import "./matrixAgent.css";
import matrixSchema from "../../../../public/content/matrix-schema.png";
import Image from "next/image";

const MatrixAgent = () => {
  return (
    <div className="container matrixAgent">
      <h2>Matrix Agent, AI-Powered Financial Market Analysis Agent.</h2>
      <p>
        An AI agent that manages a portfolio, sets future buy/sell orders, and
        analyzes the portfolio.
      </p>
      <ul className="matrixAgent__ul">
        <li>
          Features: Create portfolio, manage portfolio, set future buy/sell
          orders with seamless integration to Smart Investor Platform.
        </li>
        <li>Frontend: Next.js, CSS / SCSS.</li>
        <li>Backend: Flask Framework, Numpy, OpenAI.</li>
      </ul>
      <button
        className="matrixAgent__button"
        onClick={() =>
          window.open("https://github.com/ShayBenIshay/Matrix-Agent")
        }
      >
        Check Source Code
      </button>
      <div className="matrixAgent__img-container">
        <Image src={matrixSchema} alt="Matrix Agent Schema" />
      </div>
    </div>
  );
};

export default MatrixAgent;
