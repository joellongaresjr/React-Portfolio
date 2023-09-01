import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="sticky top-0 w-full h-[80px] flex justify-between items-center px-r bg-[#000000] text-white" >
      <div>
        <ul className="flex">
          <li><Link to="/">Home</Link> </li>
          <li><Link to="/aboutme">AboutMe</Link> </li>
          <li><Link to="/portfolio">Portfolio</Link> </li>
          <li><Link to="/contact">Contact</Link> </li>
          <li><Link to="/resume">Resume</Link> </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
