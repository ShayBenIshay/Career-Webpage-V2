"use client";

import { useState } from "react";
import "./header.css";
import Navbar from "./Navbar/Navbar";
import PdfButton from "./PdfButton/PdfButton";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="header"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Navbar removeActive={isHovered} />
      <PdfButton />
    </div>
  );
};

export default Header;
