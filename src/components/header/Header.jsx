import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import logo from "../../assets/headerLogo.webp";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for menu visibility

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
      setIsMenuOpen(false); // Close menu on click
    }
  };

  return (
    <header className="bg-white fixed w-full opacity-100 py-1 shadow-md flex items-center justify-between px-6 md:px-16 z-50">
      {/* Logo */}
      <div className="w-[200px] py-1 h-auto sm:w-[355px] xl:w-[455px] sm:h-auto]">
        <a href="/">
          <img src={logo} alt="Logo" className="w-full" />
        </a>
      </div>

      <button
        className="text-gray-700 text-xl sm:hidden z-50"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <nav
        className={`flex-1 text-md sm:text-lg sm:block text-white sm:text-gray-500 ${
          isMenuOpen
            ? "absolute top-10 left-0 w-full h-[100px] bg-customBlue flex flex-col items-center justify-center"
            : "hidden"
        } sm:static sm:h-auto sm:flex sm:justify-end`}
      >
        <ul className="flex flex-col gap-4 justify-start sm:flex-row text-sm">
          <li>
            <a
              href="#about"
              className="hover:text-blue-500 cursor-pointer"
              onClick={() => handleScroll("about")}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#offerings"
              className="hover:text-blue-500 cursor-pointer"
              onClick={() => handleScroll("offerings")}
            >
              Offerings
            </a>
          </li>
          <li>
            <a
              href="#footer"
              className="hover:text-blue-500 cursor-pointer"
              onClick={() => handleScroll("footer")}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
