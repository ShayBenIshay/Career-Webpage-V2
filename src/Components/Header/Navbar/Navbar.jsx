import { usePathname } from "next/navigation";
import Link from "next/link";
import "./navbar.css";

const Navbar = ({ removeActive }) => {
  const pathname = usePathname();

  const getClassName = (path) => {
    if (removeActive) return "";
    return pathname === path ? "active" : "";
  };

  return (
    <div className="navbar">
      <ul>
        <li>
          <Link href="/">
            <button className={getClassName("/")}>Home Page</button>
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <button className={getClassName("/projects")}>Projects</button>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <button className={getClassName("/contact")}>Contact</button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
