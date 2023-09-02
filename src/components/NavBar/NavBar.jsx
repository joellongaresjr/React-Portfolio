import { Link } from "react-router-dom";
import Logo from "../../assets/images/JR LOGO.png";

const NavBar = () => {
  return (
    <div className="sticky top-0 w-full h-[80px] flex justify-between items-center px-r bg-[#FCB97D] text-[#3f00b]" >
    <div>
        <img src={Logo} alt="logo" style={{width: '100px'}} />
    </div>
      <div>
        <ul className="flex">
          <li><Link to="/">AboutMe</Link> </li>
          <li><Link to="/portfolio">Portfolio</Link> </li>
          <li><Link to="/contact">Contact</Link> </li>
          <li><Link to="/resume">Resume</Link> </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
