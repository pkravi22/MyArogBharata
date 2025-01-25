import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import logo from "../../assets/headerLogo.webp";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-white fixed w-full opacity-100 py-1 shadow-md flex items-center justify-between px-6 md:px-16 z-50">
      {/* Logo */}
      <div className={`w-[200px] py-1 h-auto sm:w-[355px] xl:w-[455px] sm:h-auto] `}>
        <Link to="/">
        <img src={logo} alt="Logo" className="w-full" />
        </Link>
      </div>


      <button
        className="text-gray-700 text-xl sm:hidden z-50 "
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      
      <nav
        className={`flex-1 text-md sm:text-lg sm:block text-white sm:text-gray-500 ${
          isMenuOpen
            ? "absolute top-10 left-0 w-full h-[100px] bg-customBlue  flex flex-col  items-center justify-center"
            : "hidden"
        } sm:static sm:h-auto sm:flex sm:justify-end`}
      >
        <ul className="flex flex-col gap-4 justify-start  sm:flex-row  text-sm  ">
          <li>
            
            <Link to="#about" className=" hover:text-blue-500 cursor-pointer"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          > About</Link>
          </li>
          <li>
          <Link to="/offerings" className=" hover:text-blue-500 cursor-pointer"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >    Offerings</Link>
       
          </li>
          <li>
          <Link to="/contact" className=" hover:text-blue-500 cursor-pointer"
            onClick={() => setIsMenuOpen(false)} // Close menu on click
          >   Contact</Link>
            
            
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
